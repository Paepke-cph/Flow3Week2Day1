import React from 'react';
import {useParams} from 'react-router-dom';

const Product = ({bookFacade,product}) => {
    const emptyProduct = {id:0,title:"",info:""}
    let shownProduct;
    const {productId} = useParams();

    const deleteBook = book => {
        bookFacade.deleteBook(book.id);
        shownProduct = emptyProduct;
    }

    if(typeof product === 'undefined') {
        shownProduct = bookFacade.findBook(productId); 
    } else {
        shownProduct = product;
    }
    return(
        <div>
            <p>ID: {shownProduct.id}</p>
            <p>Title: {shownProduct.title}</p>
            <p>Info: {shownProduct.info}</p>
            <button onClick={(e) => {deleteBook(shownProduct)}}>Delete Book</button>
        </div>
    );
};

export default Product;