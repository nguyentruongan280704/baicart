import "./products.css";
import React from "react";
import airport from "../../imagex/apple-airpods-pro-2-2022-didongviet.png"
import gear from "../../imagex/macbook-pro-14-inc.jpg"
import iphone from "../../imagex/iPhone-14-Pro-Max-3.jpg"
import samsung from "../../imagex/Gear-Samsung-Galaxy-S22-Ultra.webp"
function Products() {
    return (
        <>
            <div class="container">
                <div class="form1">
                    <div class="products">
                        <p>List Products</p>
                    </div>
                    <div class="family">
                        <div className="image">
                            <img src={ airport } alt="" />
                        </div>
                        <div class="airpods">
                            <h2>Air Pods Pro</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                        </div>
                        <div class="botton">
                            <input type="number" />
                            <button>12 USD</button>
                        </div>
                    </div>
                    <div class="family">
                        <div className="image">
                            <img src={ gear } alt="" />
                        </div>
                        <div class="airpods">
                            <h2>Macbook</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                        </div>
                        <div class="botton">
                            <input type="number" />
                            <button>12 USD</button>
                        </div>
                    </div>
                    <div class="family">
                        <div className="image">
                            <img src={ iphone } alt="" />
                        </div>
                        <div class="airpods">
                            <h2>Iphone 14 Promax</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                        </div>
                        <div class="botton">
                            <input type="number" />
                            <button>12 USD</button>
                        </div>
                    </div>
                    <div class="family">
                        <div className="image">
                            <img src={ samsung } alt="" />
                        </div>
                        <div class="airpods">
                            <h2>Sam Sung Galaxy S22 Ultra</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!</p>
                        </div>
                        <div class="botton">
                            <input type="number" />
                            <button>12 USD</button>
                        </div>
                    </div>
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
                        <div className="tudulis1">
                            <label>1</label>
                            <p class="lorem">Lorem ipsum.</p>
                            <p className="use">12 USD</p>
                            <input type="number" name="" id="" />
                            <p className="use1">12 USD</p>
                            <div class="updelete">
                                <button className="update">Update</button>
                                <button className="delete">Delete</button>
                            </div>
                        </div>
                        <div class="empty">
                            <p>Empty product in your cart</p>
                        </div>
                        <div class="there">
                            <label>There are 5 items in your shopping cart.</label>
                            <p>12 USD</p>
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
