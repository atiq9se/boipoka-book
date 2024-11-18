import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
     const {bookId} = useParams();
     const id = parseInt(bookId);
     const data = useLoaderData();

     const book = data.find(book=> book.bookId === id)
     const { bookId:currentBookId, image, bookName} = book;
     console.log(data, book);
    return (
        <div>
            <h2>{bookId}</h2>
            <img src={image} alt="" />
            <h3>{bookName}</h3>

            <button className="btn btn-outline btn-accent mr-3">Marks as Read</button>
            <button className="btn btn-accent">Whishlist</button>
        </div>
    );
};

export default BookDetails;