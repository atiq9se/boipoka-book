import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch("./booksData.json")
        .then(res=>res.json())
        .then(data=> setBooks(data))
    },[])
    return (
        <div>
            <h3 className="text-4xl font-bold text-center">Book</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    books.map(book=><Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;