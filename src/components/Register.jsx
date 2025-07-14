import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [form , setForm] = useState({
    username : "",
    firstname : "",
    lastname : "",
    email : "",
    birthdate : "",
    gender : "",
    phone : "",
    address : "",
    password : "",
  });

  const onSubmit = async () => {

    try {
      console.log(form)
      const response = await axios.post("https://localhost:7092/api/Users/CreateUser" , form);
      console.log(response)
      alert("Register Successed")
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section style={{ background: 'url("./src/images/background-img.png")' }}>
      <div className="container">
        <div className="row">
          <div className="offset-md-3 col-md-6 my-5">
            <h2 className="display-3 fw-normal text-center">
              ...
              <span className="text-primary">Register</span>
              ...
            </h2>
              <div className="mb-3">
                <input type="text" className="form-control form-control-lg" name="username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  placeholder="Enter Your Username" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control form-control-lg" name="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Enter Your Password" />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control form-control-lg" name="firstname"
                    value={form.firstname}
                    onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                    placeholder="Enter Your Firstname" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control form-control-lg" name="lastname"
                    value={form.lastname}
                    onChange={(e) => setForm({ ...form, lastname: e.target.value })}
                    placeholder="Enter Your Lastname" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="date" className="form-control form-control-lg" name="birthdate"
                    value={form.birthdate}
                    onChange={(e) => setForm({ ...form, birthdate: e.target.value })} />
                </div>
                <div className="col-md-6 mt-2">
                  <label className="form-control-lg">Gender :</label>
                    <input
                      type="radio"
                      name="gender"
                      value={"0"}
                      checked={form.gender === '0'}
                      onChange={(e) => setForm({ ...form , gender: e.target.value})}
                    />
                    <label>Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value={"1"}
                      checked={form.gender  === '1'}
                      onChange={(e) => setForm({ ...form , gender: e.target.value})}
                    />
                    <label>Female</label>
                </div>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control form-control-lg" name="email"
                  value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter Your Email Address" />
              </div>
              <div className="mb-3">
                <input type="tel" className="form-control form-control-lg" name="phone"
                  value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter Your Phone" />
              </div>
              <div className="mb-3">
                <textarea type="text" className="form-control form-control-lg" name="address"
                  value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Enter Your Address" />
              </div>
              
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark btn-lg rounded-1"
                  onClick={() => { onSubmit() }}
                >Register it now</button>
              </div>

              <div className="mt-4 text-center">
                <p className="mb-0 fw-normal">Have already an account? <a href="/login" className="fw-bold text-primary">Sign in</a></p>
              </div>
          </div>
        </div>       
      </div>
    </section>
  )
}

export default Register;