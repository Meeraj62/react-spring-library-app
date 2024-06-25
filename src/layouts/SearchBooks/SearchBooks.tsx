import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";

export const SearchBooks = () => {
    
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            const baseUrl: string = 'http://localhost:8080/api/books';
            
            const url: string = `${baseUrl}/page=0&size=5`;

            const response = await fetch(url);

            if(!response.ok) {
                throw new Error('Something went wrong!!!');
            }

            const responseJson = await response.json();
        
            const responseData = responseJson._embedded.books;

            const loadedBooks: BookModel[] = [];

            for (const key in responseData) {
                loadedBooks.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    description: responseData[key].description,
                    author: responseData[key].author,
                    copies: responseData[key].copies,
                    copiesAvailable: responseData[key].copiesAvailable,
                    category: responseData[key].category,
                    img: responseData[key].img
                });
            }
        }
    }, []);

    return(

    );
}