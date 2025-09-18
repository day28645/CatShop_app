import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const ListCart = () => {
  const accessToken = localStorage.getItem("token");
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getListCart = async () => {
      const response = await axios.get("https://localhost:7092/api/Orders", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('response',response);
      setOrder(response.data);
      let sumTotal = 0;
      for (let i = 0; i < response.data.length; i++) {
        sumTotal += response.data[i].price;
      }
      setTotal(sumTotal);
    };
    getListCart();
  }, []);

  return (
    <section id="cart" className="my-5 py-5">
      <div className="container">
        <div className="row g-md-5">
          <div className="col-md-8 pe-md-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="card-title text-uppercase">
                    Cat Name
                  </th>
                  <th scope="col" className="card-title text-uppercase">
                    Quantity
                  </th>
                  <th scope="col" className="card-title text-uppercase">
                    Subtotal
                  </th>
                  <th scope="col" className="card-title text-uppercase"></th>
                </tr>
              </thead>

              {order.map((item) => {
                return (
                  <tbody>
                    <tr>
                      <td scope="row" className="py-4">
                        <div className="cart-info d-flex flex-wrap align-items-center ">
                          <div className="col-lg-3">
                            <div className="card-image">
                              <img
                                src="/src/images/item1.jpg"
                                alt="cloth"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <div
                              className="card-detail ps-3"
                              value={item.orderid}
                            >
                              <h5 className="card-title">
                                <a href="#" className="text-decoration-none">
                                  {item.catName}
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 align-middle">
                        <div className="input-group product-qty align-items-center w-50">
                          <span className="input-group-btn"></span>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            className="form-control-plaintext input-number text-center p-2 mx-1"
                            value="1"
                            disabled 
                          />
                          <span className="input-group-btn"></span>
                        </div>
                      </td>
                      <td className="py-4 align-middle">
                        <div className="total-price">
                          <span className="secondary-font fw-medium">
                            ฿ {item.price} 
                            <div className="remove-cart">
                            <a href="#">
                              <sv>
                                <use xlinkHref="#trash">

                              </use>
                              </sv>
                              
                            </a>
                            </div>
                          </span>
                        </div>
                      </td>
                      <td className="py-4 align-middle">
                        <div className="cart-remove">
                          <a href="#">
                            <svg width="24" height="24">
                              <use xlinkHref="#trash"></use>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      {/* Cart Total */}
                      <td className="py-4 align-middle">
                        <div className="cart-remove">
                          <a href="#">
                            <svg width="24" height="24">
                              <use xlinkHref="#trash"></use>
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="col-md-4">
            <div className="cart-totals">
              <h2 className="pb-4">Cart Total</h2>
              <div className="total-price pb-4">
                <table cellSpacing="0" className="table text-uppercase">

                  <tbody>
                    <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                      <th>Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="price-amount amount text-dark ps-5">
                          <bdi>
                            <span className="price-currency-symbol">฿</span>
                            {total}
                          </bdi>
                        </span>
                      </td>
                    </tr>
                    <tr className="order-total pt-2 pb-2 border-bottom">
                      <th>Total</th>
                      <td data-title="Total">
                        <span className="price-amount amount text-dark ps-5">
                          <bdi>
                            <span className="price-currency-symbol">฿</span>
                            {total}
                          </bdi>
                        </span>
                      </td>
                    </tr>
                  </tbody>


                </table>
              </div>
              <div className="button-wrap row g-2">
                <div className="col-md-6">
                  <button className="btn btn-dark btn-lg rounded-1 fs-6 p-3 w-100">
                    Update Cart
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-dark btn-lg rounded-1 fs-6 p-3 w-100">
                    Continue To Shop
                  </button>
                </div>
                <div className="col-md-12">
                  <a
                    href="checkout.html"
                    className="btn btn-primary p-3 text-uppercase rounded-1 w-100"
                  >
                    Proceed to checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCart;
