import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    idnumber: "",
    birthdate: "",
    gender: "",
    price: "",
    prodcutdetail: "",
    breedid: "",
    size: "",
    catname: "",
    catstatus: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const accessToken = localStorage.getItem("token");
  
  useEffect(() => {
    const getBreed = async () => {
      try {
        fetch("https://localhost:7092/api/Breeds", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setBreed(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getBreed();
  }, []);

   const [breed, setBreed] = useState([]);
  const selectBreed = async (e) => {
    console.log(e.target.value);
    setForm({ ...form, breedid: e.target.value });
  };

  const onSubmit = async () => {
    try {
      if (!selectedFile) return;

      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("Price", form.price);
      formData.append("Idnumber", form.idnumber);
      formData.append("Birthdate", form.birthdate);
      formData.append("Gender", form.gender);
      formData.append("Catdetails", form.prodcutdetail);
      formData.append("Size", form.size);
      formData.append("Breedid", form.breedid);
      formData.append("CatStatus", form.catstatus);
      console.log(formData)
      const myheader = {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      };
      axios
        .post("https://localhost:7092/api/Cats/CreateCat", formData, {
          headers: myheader,
        })
        .then((res) => {
          console.log(res);
        });
      alert("Add Cat Successed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Add Products</h2>
      <div className="row">
        <select
          onChange={selectBreed}
          className="form-select mt-5"
          aria-label="Default select example"
        >
          <option value={0}>{"Select Breed"}</option>
          {breed.map((item) => {
            return <option key={item.breedid} value={item.breedid}>{item.breedname}</option>;
          })}
        </select>

        <select
          className="form-select mt-5"
          name="catstatus"
          type="text"
          onChange={(e) => setForm({ ...form, catstatus: e.target.value })}
        >
          <option value="" disabled>
            Cat Status
          </option>
          <option value="avaliable">avaliable</option>
          <option value="adopted">adopted</option>
          <option value="sick">sick</option>
          <option value="death">death</option>
        </select>

        <div className="mt-5">
          <input
            className="form-control"
            type="text"
            name="idnumber"
            value={form.idnumber}
            onChange={(e) => setForm({ ...form, idnumber: e.target.value })}
            placeholder="Enter Identification Number"
          />
        </div>
        <div className="mt-5">
          <input
            className="form-control"
            type="text"
            name="catname"
            value={form.catname}
            onChange={(e) => setForm({ ...form, catname: e.target.value })}
            placeholder="Enter Cat Name"
          />
        </div>
        <div className="mt-5">
          <input
            className="form-control"
            type="date"
            name="birthday"
            value={form.birthdate}
            onChange={(e) => setForm({ ...form, birthdate: e.target.value })}
          />
        </div>
        <div className="mt-5">
          <label className="form-control-lg">Gender :</label>
          <input
            type="radio"
            name="gender"
            value={"0"}
            checked={form.gender === "0"}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value={"1"}
            checked={form.gender === "1"}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          />
          <label>Female</label>
        </div>
        <div className="mt-5">
          <input
            className="form-control"
            type="number"
            name="price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="Enter Cat Price"
          />
        </div>
        <div className="mt-5">
          <input
            className="form-control"
            type="text"
            name="prodcutdetail"
            value={form.prodcutdetail}
            onChange={(e) =>
              setForm({ ...form, prodcutdetail: e.target.value })
            }
            placeholder="Enter Cat Detail"
          />
        </div>
        <div className="mt-5">
          <label className="form-control-lg">Size :</label>
          <input
            type="radio"
            name="size"
            value={"0"}
            checked={form.size === "0"}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
          />
          <label>Small</label>
          <input
            type="radio"
            name="size"
            value={"1"}
            checked={form.size === "1"}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
          />
          <label>Medium</label>
          <input
            type="radio"
            name="size"
            value={"2"}
            checked={form.size === "2"}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
          />
          <label>Large</label>
          <div className="mt-5">
            <label htmlFor="image">Choose images to upload (PNG , JPG)</label>
            <br></br>
            <input
              type="file"
              name="image"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
            />
          </div>

          <div className="d-grid gap-2 mt-5">
            <button
              type="submit"
              className="btn btn-dark btn-lg rounded-1"
              onClick={() => {
                onSubmit();
              }}
            >
              Add Cat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
