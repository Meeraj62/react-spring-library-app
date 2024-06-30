import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    paginate: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = getPageNumbers(currentPage, totalPages);

    return (
        <nav aria-label="Pagination">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => paginate(1)}>&laquo; First</button>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => paginate(number)}>{number}</button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => paginate(totalPages)}>Last &raquo;</button>
                </li>
            </ul>
        </nav>
    );
};

const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pageNumbers = [];

    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        if (currentPage <= 3) {
            for (let i = 1; i <= 5; i++) {
                pageNumbers.push(i);
            }
        } else if (currentPage >= totalPages - 2) {
            for (let i = totalPages - 4; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                pageNumbers.push(i);
            }
        }
    }

    return pageNumbers;
};