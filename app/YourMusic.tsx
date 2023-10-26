"use client";
import "bootstrap/dist/css/bootstrap.css";
import './custom.css';
import React from 'react';
import { Link } from 'react-router-dom';

function YourMusic() {
    return (
      <div>
        <div className="container-fluid bg-black text-orange" style={{ height: '100vh' }}>
          <div className="row justify-content-center align-items-center" style={{ height: '100%' }}>
            <div className="col-md-6 text-center">
              <p className="lead">Your Music Feature Coming Soon...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default YourMusic;