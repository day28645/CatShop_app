import React, { useEffect } from "react";
import { useState } from "react";

const ListCart = () => {
  const accessToken = localStorage.getItem("token");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getListCart = async () => {

    }
    getListCart();
  }, []);

  return <div></div>;
};

export default ListCart;
