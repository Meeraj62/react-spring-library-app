import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchTheBook } from "./components/SearchTheBook";

export const SearchBooks = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [httpError, setHttpError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const baseUrl: string = 'http://localhost:8080/api/books';
                const url: string = `${baseUrl}?page=0&size=5`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const responseJson = await response.json();
                const responseData = responseJson._embedded.books;

                const loadedBooks: BookModel[] = responseData.map((book: any) => ({
                    id: book.id,
                    title: book.title,
                    description: book.description,
                    author: book.author,
                    copies: book.copies,
                    copiesAvailable: book.copiesAvailable,
                    category: book.category,
                    img: book.img
                }));

                setBooks(loadedBooks);
            } catch (error: any) {
                setHttpError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (isLoading) {
        return <SpinnerLoading />;
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <SearchHeader />
            <ResultsInfo resultsCount={22} />
            <BooksList books={books} />
        </div>
    );
};

const SearchHeader = () => (
    <div className="row mt-5">
        <div className="col-6">
            <div className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-labelledby="Search"
                />
                <button className="btn btn-outline-success">Search</button>
            </div>
        </div>
        <div className="col-4">
            <CategoryDropdown />
        </div>
    </div>
);

const CategoryDropdown = () => (
    <div className="dropdown">
        <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            Category
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {['All', 'Front End', 'Back End', 'Dev Ops'].map((category) => (
                <li key={category}>
                    <a className="dropdown-item" href="#">
                        {category}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const ResultsInfo = ({ resultsCount }: { resultsCount: number }) => (
    <>
        <div className="mt-3">
            <h5>Number of results: ({resultsCount})</h5>
        </div>
        <p>1 to 5 of {resultsCount} items:</p>
    </>
);

const BooksList = ({ books }: { books: BookModel[] }) => (
    <div>
        {books.map((book) => (
            <SearchTheBook book={book} key={book.id} />
        ))}
    </div>
);