import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import { SearchTheBook } from "./components/SearchTheBook";
import { Pagination } from "../Utils/Pagination";

export const SearchBooks = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [httpError, setHttpError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);
    const [totalAmountOfBooks, setTotalAmountOfBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const baseUrl: string = 'http://localhost:8080/api/books';
                let url: string = searchUrl === '' 
                    ? `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}` 
                    : `${baseUrl}${searchUrl}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const responseJson = await response.json();
                const responseData = responseJson._embedded.books;

                setTotalAmountOfBooks(responseJson.page.totalElements);
                setTotalPages(responseJson.page.totalPages);

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

        window.scrollTo(0, 0);
    }, [currentPage, searchUrl]);

    const searchHandleChange = () => {
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findByTitleContaining?title=${search}&page=0&size=${booksPerPage}`);
        }
        setCurrentPage(1);
    }

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

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const lastItem = booksPerPage * currentPage <= totalAmountOfBooks 
        ? booksPerPage * currentPage 
        : totalAmountOfBooks;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <SearchHeader 
                search={search} 
                setSearch={setSearch} 
                searchHandleChange={searchHandleChange} 
            />
            {books.length > 0 ? (
                <>
                    <ResultsInfo 
                        resultsCount={totalAmountOfBooks} 
                        indexOfFirstBook={indexOfFirstBook}
                        lastItem={lastItem}
                    />
                    <BooksList books={books} />
                    {totalPages > 1 && 
                        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
                    }
                </>
            ) : (
                <NoResults />
            )}
        </div>
    );
};

const SearchHeader = ({ search, setSearch, searchHandleChange }: { search: string, setSearch: (search: string) => void, searchHandleChange: () => void }) => (
    <div className="row mt-5">
        <div className="col-6">
            <div className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-labelledby="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button 
                    className="btn btn-outline-success"
                    onClick={searchHandleChange}
                >
                    Search
                </button>
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

interface ResultsInfoProps {
    resultsCount: number;
    indexOfFirstBook: number;
    lastItem: number;
}

const ResultsInfo = ({ resultsCount, indexOfFirstBook, lastItem }: ResultsInfoProps) => (
    <>
        <div className="mt-3">
            <h5>Number of results: ({resultsCount})</h5>
        </div>
        <p>{indexOfFirstBook + 1} to {lastItem} of {resultsCount} items:</p>
    </>
);

const BooksList = ({ books }: { books: BookModel[] }) => (
    <div>
        {books.map((book) => (
            <SearchTheBook book={book} key={book.id} />
        ))}
    </div>
);

const NoResults = () => (
    <div className="container my-5">
        <div className="row p-4 align-items-center border shadow-lg">
            <div className="col-lg-7 p-3">
                <h1 className="display-4 fw-bold">
                    Can't find what you are looking for?
                </h1>
                <p className="lead">
                    If you cannot find what you are looking for, you can explore our full library collection.
                </p>
                <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                    <a href="/books" className="btn main-color btn-lg px-4 me-md-2 fw-bold text-white">
                        View All Books
                    </a>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
        </div>
    </div>
);