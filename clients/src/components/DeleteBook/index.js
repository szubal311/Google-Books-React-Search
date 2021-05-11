import React from 'react'

function DeleteBook(props) {
    return (
        <span className = "delete-btn" {...props} role="button" tableIndex="0">
            Delete
        </span>
    );
}

export default DeleteBook