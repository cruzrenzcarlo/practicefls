const router = require('express').Router();
let Book = require('../models/model');

router.route('/').get((req, res) => {
    Book.find()
        .then((activities) => res.json(activities))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//route for adding new book
router.route('/add').post(async (req, res) => {
    const { author, title, description } = req.body;    
    const newBook = new Book({
        author,
        title,
        description
    });

    console.log(newBook);
    //save new book
    newBook
        .save()
        .then(() => res.json('Book added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

//retrieving
router.route('/:id').get((req, res) => {
    console.log('just id' + req.params.id);
    Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(400).json('Error: ' + err)); 
});

//deleting
router.route('/delete/:id').delete(async (req, res) => {
    console.log('delete execution');
    await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//updating
router.route('/update/:id').post(async (req, res) => {
    console.log('Update triggered for ' + req.params.id);
    await Book.findById(req.params.id)
        .then((bookforedit) => {
            bookforedit.author = req.body.author;
            bookforedit.title = req.body.title;
            bookforedit.description = req.body.description;
            
            bookforedit
            .save()
            .then(() => res.json('Book updated!'))
            .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
