import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import img from "../images/mahed.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-inf mx-auto home">
      <Link
        className=" text-white rounded  mt-5 p-5  fw-semibold fs-1 bg-primary"
        to="/about"
        style={{ textDecoration: "non" }}
      >
        Go To Translate
      </Link>
    </div>
  );
};

export default Home;
<h2>This is Home</h2>;
