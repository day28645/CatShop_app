import axios from "axios";
import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";

const ListProduct = () => {
  const accessToken = localStorage.getItem("token");
  const [cat, setCat] = useState([]);

  useEffect(() => {
    console.log(accessToken);
    const getProduct = async () => {
      await axios
        .get("https://localhost:7092/api/Cats", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setCat(res.data);
          //console.log(res);
        });
    };
    getProduct();
  }, []);

  const onSubmit = async () => {
    try {
      //console.log(accessToken);
      console.log(cat[0].catid);
      const catid = cat[0].catid;
      const request = {
        catid: catid,
      };
      const response = axios.post(
        "https://localhost:7092/api/Orders/CreateOrder",
        request,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="clothing" className="my-5 overflow-hidden">
      <div className="container pb-5">
        <div className="container">
          <a href="single-product.html"></a>
          <div className="row">
            {cat.map((item) => {
              return (
                <div className="col-md-3">
                  <div className="card">
                    <img
                      src="/src/images/item1.jpg"
                      className="img-fluid rounded-4"
                      alt="image"
                    />
                    <div value={item.catid}>
                      <h3 className="card-title pt-4 m-0">{item.catName}</h3>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <h3 className="card-title pt-4 m-0">{item.catdetails}</h3>

                    <div className="card-text">
                      <h3 className="secondary-font text-primary">
                        {item.price} Bath
                      </h3>
                      <div className="d-flex flex-wrap mt-3">
                        <button
                          className="btn-cart me-3 px-4 pt-3 pb-3"
                          type="text"
                          onClick={() => {
                            onSubmit();
                          }}
                        >
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListProduct;
