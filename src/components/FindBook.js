import React, { useState } from 'react'
import Product from './Product';

const FindBook = ({bookFacade}) => {
    const emptyBook = {id:0, title:"",info:""};
    const [productId, setProductId] = useState(0);
    const [book, setBook] = useState(emptyBook);

    const handleChange = event => {
        let value = event.target.value;
        setProductId(value);
        let found = bookFacade.findBook(value);
        if(found !== undefined) {
            setBook(found);
        }
    };

    return(
        <div>
            <h1>Find a Book</h1>
            <form>
                <input type="number" placeholder="Product number" value={productId} onChange={handleChange}/> <br/>
            </form>
            <Product bookFacade={bookFacade} product={book}/>
        </div>
    );
}



export default FindBook;