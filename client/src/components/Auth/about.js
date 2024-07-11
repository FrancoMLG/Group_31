import React, {useState} from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {about} from "../../api/index.js";
import {useNavigate, Link} from "react-router-dom";
import Navbar from "../navbar";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid bg-body-tertiary">
      <nav
        className="navbar navbar-expand-lg fixed-top bg-body-secondary"
        style={{paddingTop: "0"}}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
              height="30"
              alt="Fake Company Logo"
              style={{paddingRight: "10px"}}
            />
            Fake Company Name
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="container col-xxl-8 px-2 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={`${process.env.PUBLIC_URL}/images/about_us1.svg`}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              About Us
            </h1>
            <p className="lead">
              Welcome to Fake Company Name, your reliable partner in solving IT
              challenges swiftly and efficiently. Established with a commitment
              to provide exceptional technical support, Fake Company Name is
              dedicated to assisting individuals and businesses alike in
              navigating the complexities of technology.
            </p>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Our Mission
            </h1>
            <p className="lead">
              At Fake Company Name, our mission is clear: to deliver
              unparalleled IT assistance that empowers our clients to focus on
              what matters most to them. We strive to be the trusted resource
              our customers turn to for resolving technical issues promptly and
              effectively.
            </p>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Who We are
            </h1>
            <p className="lead">
              Fake Comapny Name comprises a team of seasoned IT professionals
              with years of collective experience in the field. From
              troubleshooting hardware and software issues to providing expert
              advice on IT infrastructure, our technicians are equipped with the
              knowledge and skills necessary to handle a wide range of technical
              challenges.
            </p>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              What We Do
            </h1>
            <div className="lead">
              We specialize in providing comprehensive IT support services
              tailored to meet the unique needs of our clients. Whether you're a
              small business owner grappling with network problems or an
              individual facing software glitches, we're here to help. Our
              services include:
              <br></br>
              <br></br>
              <b>Help Desk Support:</b> Our user-friendly platform allows
              customers to easily make an account and create help tickets
              online, ensuring a streamlined process for reporting and resolving
              issues.
              <br></br>
              <br></br>
              <b>Technical Troubleshooting:</b> Our skilled technicians diagnose
              and resolve hardware, software, and network issues efficiently,
              minimizing downtime and disruptions.
              <br></br>
              <br></br>
              <b>Remote Assistance:</b> We offer remote support capabilities,
              enabling us to assist clients promptly regardless of their
              location. Through secure connections, our technicians can
              troubleshoot and resolve issues in real-time.
              <br></br>
              <br></br>
              <b>Live Chat Support:</b> Once you have submitted your ticekt, our
              live chat feature will connect you directly with the technician
              who was assigned your ticket, fostering real-time communication
              and problem-solving.
              <br></br>
              <br></br>
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Why Choose Us
              </h1>
              <p className="lead">
                Choosing Fake Company Name means choosing reliability,
                expertise, and a commitment to exceptional customer service.
                Here's why our clients trust us:
              </p>
              <b>Expertise:</b> Our technicians undergo rigorous training and
              possess certifications in various aspects of IT support, ensuring
              they are well-equipped to handle any technical challenge.
              <br></br>
              <br></br>
              <b>Customer-Centric Approach:</b> We prioritize customer
              satisfaction above all else. Our team is dedicated to providing
              friendly, professional service that exceeds expectations.
              <br></br>
              <br></br>
              <b>Efficiency:</b> We understand the importance of quick
              resolutions. With streamlined processes and efficient workflows,
              we aim to resolve issues promptly without compromising quality.
              <br></br>
              <br></br>
              <b>Security:</b> Protecting our clients' data and privacy is
              paramount. We adhere to industry best practices and utilize secure
              communication channels to safeguard sensitive information.
              <br></br>
              <br></br>
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Our Commitment
              </h1>
              <p className="lead">
                At Fake Company Name, we believe in building lasting
                relationships with our clients based on trust, transparency, and
                reliability. Whether you're seeking ongoing IT support or
                assistance with a one-time issue, we are here to help you
                navigate the complexities of technology with ease.
              </p>
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                Ready For Our Help?
              </h1>
              <p className="lead">
                Ready to experience exceptional IT support? Sign up today and
                create a help ticket outlining your IT issue and your ticket
                will be assigned to one of our technicians who will promptly
                work on helping you fix your problem.
              </p>
              <p className="lead">
                Thank you for choosing Fake Company Name. We look forward to
                serving you!
              </p>
            </div>
          </div>
        </div>
      </div>
	  
	  <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img
                src={`${process.env.PUBLIC_URL}/images/calendar-week.svg`}
                height="30"
              />
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © Cool Coders, Group 31
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
