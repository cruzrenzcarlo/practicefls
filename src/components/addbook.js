import React, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function CreateBook() {
    const [author, setOnChangeAuthor] = useState(``);
    const [title, setOnChangeTitle] = useState(``);
    const [description, setOnChangeDescription] = useState(``);

    const onSubmit = (e) => {
        e.preventDefault();
        const bookvar = { author: author, title: title, description: description};

        axios
            .post('http://localhost:5000/book/add', bookvar)
            .then((res) => {
                window.location = '/';
                console.log('test');
            });
        console.log(bookvar);
    };

    return (
        <div className='CreateBook'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link className='btn btn-info float-left' to='/'>Show Book List</Link>
                    </div>
                    <div class="col-md-8 m-auto">
                        <h1 className='display-4 text-center'>Add Book</h1>
                        <p className='lead text-center'>Create New Book</p>
                        <form noValidate='' onSubmit={onSubmit}>
                            <div class="form-group">
                                <input
                                    type="text"
                                    placeholder="Title of the Book"
                                    name="title"
                                    class="form-control"
                                    value={title}
                                    onChange={(e) => setOnChangeTitle(e.target.value)}
                                    spellcheck="false"
                                    data-ms-editor="true"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    placeholder="Author"
                                    name="author"
                                    class="form-control"
                                    value={author}
                                    onChange={(e) => setOnChangeAuthor(e.target.value)}
                                    spellcheck="false"
                                    data-ms-editor="true"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    placeholder="Describe this book"
                                    name="description"
                                    class="form-control"
                                    value={description}
                                    onChange={(e) => setOnChangeDescription(e.target.value)}
                                    spellcheck="false"
                                    data-ms-editor="true"
                                    required
                                />
                            </div>
                            <input type="submit" class="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

};