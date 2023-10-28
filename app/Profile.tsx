"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";
import React from "react";
import { Link } from "react-router-dom";
import ProfileForm from "@/components/ProfileForm";

function Profile() {
  return (
    <div>
      <div
        className="container-fluid bg-black text-orange"
        style={{ height: "100vh" }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="col-md-6 text-center">
          <h1>Your Profile</h1>
          <p>Edit your profile information:</p>
          <ProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
