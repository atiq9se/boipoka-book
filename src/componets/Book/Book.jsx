import { Link } from "react-router-dom";


const Book = ({book}) => {
    const {bookId, image, bookName} = book;
    return (
            <Link to={`/book/${bookId}`}>
                <div className="card bg-red-300 w-96 shadow-xl">
                    <figure className="bg-red-300">
                        <img
                        src={image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {bookName}
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </Link>
    );
};

export default Book;