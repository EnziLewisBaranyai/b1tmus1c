"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import React from "react";
import { Link } from "react-router-dom";
import img from '/public/BackSplash.jpg';

function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url("${img}")`,
    backgroundSize: "contain",
    backgroundPosition: "center center",
    width: "100%",
    height: "100vh",
  };
  return (
    <div style={backgroundImageStyle}>
      <div
        className="container-fluid bg-black text-orange"
        style={{ height: "100vh" }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="col-md-6 text-center">
            <h1 className="display-4">Welcome to B1tMus1c</h1>
            <p className="lead">Share your favorite music with the world!</p>
            <Link
              href="/protected"
              className="btn btn-outline-light btn-lg mt-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
