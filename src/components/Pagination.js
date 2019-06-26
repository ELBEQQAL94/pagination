import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 0; i < Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
             {
                 pageNumbers ?
                   pageNumbers.map((pageNumber) => (
                        <li onClick={() => paginate(pageNumber)} key={pageNumber} className="page-item">
                          <a href="!#" className="page-link">
                              {pageNumber}
                          </a>
                        </li>
                   ))
                : null
             }
            </ul>
        </nav>
    )
}

export default Pagination
