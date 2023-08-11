import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./components/addbook";
import BookList from "./components/booklist";
import "bootstrap/dist/css/bootstrap.min.css";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/add" element={<AddBook/>}/>
      </Routes>
      </BrowserRouter>
  );
}

