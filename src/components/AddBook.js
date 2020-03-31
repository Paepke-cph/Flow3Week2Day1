import React, { useState, useEffect} from 'react';
import {Prompt} from "react-router-dom";

const AddBook = ({bookFacade}) => {
    const emptyBook = {title:"",info:""}
    const [book, setBook] = useState(emptyBook);
    const [isBlocking, setIsBlocking] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        bookFacade.addBook(book);
        setBook(emptyBook);
    }
    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setBook({ ...book, [name]: value });
    }

    useEffect(() => {
        setIsBlocking(book.title.length !== 0 || book.info.length !== 0);
    },[book])

    return(
        <div>
            <h1>Add A Book</h1>
            <form>
                <Prompt
                    when={isBlocking}
                    message={location =>`Unsaved changes will be lost!`}
                />
                <input placeholder="Add Name" name="title" value={book.title} onChange={handleChange}/><br/>
                <input placeholder="Add Info" name="info" value={book.info} onChange={handleChange}/><br/>
                <input type="submit" value="Save" onClick={handleSubmit}/>
            </form>
        </div>
    );
};

export default AddBook;