import axios from "axios";
import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";

const ListProduct = () => {
  const accessToken = localStorage.getItem("token");
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        axios
          .get("https://localhost:7092/api/Cats", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setCat(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <section id="clothing" className="my-5 overflow-hidden">
      <div className="container pb-5">
        <div className="products-carousel swiper">
          <div className="swiper-wrapper">
            <div className="container">
              <div className="swiper-slide">
                <div className="card position-relative">
                  <a href="single-product.html">
                    <img
                      src="/src/images/item1.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                  </a>
                  {cat.map((item) => {
                    return;
                    <div value={item.catid}>
                      <h3 className="card-title pt-4 m-0">{item.catStatus}</h3>
                    </div>;
                  })}

                  <div className="card-body p-0">
                    <a href="single-product.html">
                      <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                    </a>

                    <div className="card-text">
                      <h3 className="secondary-font text-primary">$18.00</h3>

                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListProduct;
