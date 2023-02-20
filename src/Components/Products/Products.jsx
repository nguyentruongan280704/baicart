import "./products.css";
import React, { useEffect, useState } from "react";

function Products(props) {
    let  {
        dataProduct,
        handleSumbit,
        valueInput,
        contenCart,
        handleClickDelete,
        tudulist
    } = props;
    return (
        <>
            <div class="container">
                <div class="form1">
                    <div class="products">
                        <p>List Products</p>
                    </div>

                    { dataProduct.map((e, i) => (<div class="family">

                        <div class="image">
                            <img src={ e.image } alt="" />
                        </div>
                        <div class="airpods">
                            <h2>{ e.name }</h2>
                            <p>{ e.content }</p>
                        </div>
                        <form class="botton" onSubmit={handleSumbit} action='' id={e.id}>
                            <input 
                            id={e.id}
                            type="number" 
                            name='name'
                            value={valueInput}
                            defaultValue={1}    
                            min={1} />
                            <button id={e.id}>{ e.price } USD</button>
                        </form>
                    </div>)) }
                </div>
                <div class="from2">
                    <div class="products1">
                        <p>Your Cart</p>
                    </div>
                    <div class="family1">
                        <div class="name">
                            <label>#</label>
                            <p>Name</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                            <p>Action</p>
                        </div>
                        {contenCart.map((e, i) => (
                        <div key={i} className="tudulis1">
                            <label>1</label>
                            <p class="lorem">{e.name}</p>
                            <p className="use">{e.price} USD</p>
                            <p className='quantity'>{e.quantity}</p>
                            <p className="use1">{e.list_subtotal} USD</p>
                            <div class="updelete">
                                <button className="update">Update</button>
                                <button  
                                 id={e.id}
                                onClick={handleClickDelete}
                                 className="delete">Delete</button>
                            </div>
                        </div>
                        ))}
                        <div class="empty">
                            <p>Empty product in your cart</p>
                        </div>
                        <div class="there">
                            <label>There are 5 items in your shopping cart.</label>
                            <p>{ tudulist } USD</p>
                        </div>
                    </div>
                    <div class="products2">
                        <p>Updated</p><label>ivysaur</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
