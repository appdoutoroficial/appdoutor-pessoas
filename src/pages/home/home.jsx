import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />``
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="img/logo-app.png" type="image/png" />
    <title>App dourtor - Home</title>
    {/* Bootstrap css */}
    <link rel="stylesheet" href="vender/bootstrap/css/bootstrap.min.css" />
    {/* Bootstrap icon */}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
    {/* Slick slider css */}
    <link rel="stylesheet" href="vender/slick/slick/slick.css" />
    <link rel="stylesheet" href="vender/slick/slick/slick-theme.css" />
    {/* Sidebar css */}
    <link rel="stylesheet" href="vender/sidebar/demo.css" />
    {/* Matrial Icons */}
    <link rel="stylesheet" href="vender/materialdesign/css/materialdesignicons.min.css" />
    {/* Custom css */}
    <link rel="stylesheet" href="css/style.css" />
    {/* navbar */}
    <div className="home d-flex flex-column vh-100">
      <div className="bg-white shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
          <div className="d-flex align-items-center gap-2 me-auto">
            <a href="doctor-profile.html"><img src="img/favorite/favorite-4.jpg" alt="" className="img-fluid rounded-circle icon" /></a>
            <div className="ps-1">
              <p className="text-orange m-0 small">Welcome</p>
              <p className="fw-bold mb-0 text-primary fw-bold">Hey, Samantha!</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2">
            <a href="favorite-doctor.html" className="bg-white shadow rounded-circle icon">
              <span className="mdi mdi-cards-heart-outline mdi-18px text-primary" />
            </a>
            <a href="notification.html" className="bg-white shadow rounded-circle icon">
              <span className="mdi mdi-bell-outline mdi-18px text-primary" />
            </a>
            <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center" href="#"><i className="bi bi-list text-primary fs-5 d-flex" /></a>
          </div>
        </div>
        <div className="px-3 pb-3">
          <form>
            <div className="input-group rounded-4 shadow py-1 px-3 bg-light">
              <span className="input-group-text bg-transparent text-muted border-0 p-0" id="search">
                <span className="mdi mdi-magnify mdi-24px text-primary" />
              </span>
              <input type="text" className="form-control bg-transparent text-muted rounded-0 border-0 px-3" placeholder="Find your suitable doctor!" aria-label="Search" aria-describedby="search" />
              <a href="#" className="input-group-text bg-transparent text-muted border-0 border-start pe-0" id="search">
                <span className="mdi mdi-filter-outline mdi-18px" /></a>
            </div>
          </form>
        </div>
      </div>
      {/* body */}
      <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
        {/* Available doctors */}
        <div className="mb-0 pt-3">
          <div className="available-doctor ps-2 ms-1">
            <div className="available-doctor-item">
              <div className="bg-primary text-white rounded-4 p-3 doctor-book-back">
                <h1 className="mb-1 doctor-book-back-title">Book Your Next 
                  <span className="h4 text-warning overflow-hidden rounded-4 m-0 bg-white">
                    <b className="bg-light-subtle text-primary px-1 rounded">Appointment</b>
                    <b className="bg-info fw-normal text-white px-1 rounded">Online!</b>
                  </span>
                </h1>
                <p className="mb-2 text-white-50 small">Book Now and Get 30% OFF</p>
                <a href="request-appointment.html" className="btn btn-sm btn-book btn-secondary">BOOK NOW <i className="bi bi-arrow-right" /></a>
                <div className="doctor-book-img">
                  <img src="img/home/available-doctor-1.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="available-doctor-item">
              <div className="btn-info text-white rounded-4 p-3 doctor-book-back">
                <h1 className="mb-1 doctor-book-back-title"> 
                  <span className="h4 overflow-hidden m-0">
                    <b className="text-primary">Find Your Dental</b>
                  </span>
                  Specialist Doctor
                </h1>
                <p className="mb-2 small">Dr. Samaro <span className="bg-white rounded-pill px-1 small text-orange"><i className="mdi mdi-star" /> 4.9</span></p>
                <a href="#" className="btn btn-sm btn-primary btn-book">BOOK NOW <i className="bi bi-arrow-right" /></a>
                <div className="doctor-book-img">
                  <img src="img/home/available-doctor-3.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="available-doctor-item">
              <div className="btn-secondary text-white rounded-4 p-3 doctor-book-back">
                <h1 className="mb-1 doctor-book-back-title">Find the Right <br />
                  <span className="h4 text-warning overflow-hidden rounded-4 m-0">
                    <b className="bg-warning text-black px-1 rounded">Doctor for Your</b>
                    <b className="text-black">Needs!</b>
                  </span>
                </h1>
                <p className="mb-2 text-white small">Book Now and Get 30% OFF</p>
                <a href="#" className="btn btn-sm btn-dark btn-book">BOOK NOW <i className="bi bi-arrow-right" /></a>
                <div className="doctor-book-img">
                  <img src="img/home/available-doctor-2.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 mb-2">
          <div className="row row-cols-4 g-2">
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <a href="search.html" className="link-dark">
                  <img src="img/home/doctor.png" alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Doctor</p>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <a href="request-appointment.html" className="link-dark">
                  <img src="img/home/schedule.png" alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Appointment</p>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <a href="search.html" className="link-dark">
                  <img src="img/home/prescription.png" alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Prescription</p>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                <a href="search.html" className="link-dark">
                  <img src="img/home/medicine.png" alt="" className="img-fluid px-2" />
                  <p className="text-truncate small pt-2 m-0">Medicine</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Top Doctor */}
        <div className="mb-3">
          <h6 className="mb-2 pb-1 fw-bold px-3 text-black">Top Doctor</h6>
          <div className="top-doctors ps-2 ms-1">
            <div className="top-doctor-item">
              <a href="book-appointment.html" className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src="img/home/top-doctor-1.jpg" className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Taylor Samaro</p>
                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="top-doctor-item">
              <a href="book-appointment.html" className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src="img/home/top-doctor-2.jpg" className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Iker Bureau</p>
                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="top-doctor-item">
              <a href="book-appointment.html" className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src="img/home/top-doctor-3.jpg" className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Edwin Carli</p>
                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="top-doctor-item">
              <a href="book-appointment.html" className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src="img/home/top-doctor-2.jpg" className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Iker Bureau</p>
                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="top-doctor-item">
              <a href="book-appointment.html" className="link-dark">
                <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                  <img src="img/home/top-doctor-3.jpg" className="card-img-top top-doctor-img" alt="..." />
                  <div className="card-body small p-3 osahan-card-body">
                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Edwin Carli</p>
                    <p className="card-text text-muted m-0">Dental Sargon</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h6 className="mb-2 pb-2 fw-bold text-black">Available Doctor</h6>
          <div className="row row-cols-2 g-3">
            <div className="col">
              <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                <div className="position-absolute m-2">
                  <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                </div>
                <img src="img/video/available-doctor-1.jpg" alt="" className="card-img-top top-doctor-img" />
                <div className="card-body small p-3 osahan-card-body">
                  <h6 className="card-title fs-14 mb-1">Dr. Taylor Samaro</h6>
                  <p className="card-text text-muted mb-1">MBBS, BCS</p>
                  <div className="d-flex align-items-center gap-3 small mb-3">
                    <div><span className="mdi mdi-star text-warning me-1" />4.9 (5,380)</div>
                    <div><span className="mdi mdi-medical-bag text-primary me-1" />4+ Years</div>
                  </div>
                  <h6 className="mb-0">$199<span className="text-muted small ms-1">Inc.VAT</span></h6>
                </div>
                <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                  <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                    <span className="small">SEE DOCTOR NOW</span>
                    <span className="mdi mdi-video-outline mdi-18px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                <div className="position-absolute m-2">
                  <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                </div>
                <img src="img/video/available-doctor-2.jpg" alt="" className="card-img-top top-doctor-img" />
                <div className="card-body small p-3 osahan-card-body">
                  <h6 className="card-title fs-14 mb-1">Dr. Leabow</h6>
                  <p className="card-text text-muted mb-1">MBBS, BCS</p>
                  <div className="d-flex align-items-center gap-3 small mb-3">
                    <div><span className="mdi mdi-star text-warning me-1" />4.9 (5,380)</div>
                    <div><span className="mdi mdi-medical-bag text-primary me-1" />4+ Years</div>
                  </div>
                  <h6 className="mb-0">$199<span className="text-muted small ms-1">Inc.VAT</span></h6>
                </div>
                <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                  <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                    <span className="small">SEE DOCTOR NOW</span>
                    <span className="mdi mdi-video-outline mdi-18px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                <img src="img/video/available-doctor-3.jpg" alt="" className="card-img-top top-doctor-img" />
                <div className="card-body small p-3 osahan-card-body">
                  <h6 className="card-title fs-14 mb-1">Dr. Morgan</h6>
                  <p className="card-text text-muted mb-1">MBBS, BCS</p>
                  <div className="d-flex align-items-center gap-3 small mb-3">
                    <div><span className="mdi mdi-star text-warning me-1" />4.9 (5,380)</div>
                    <div><span className="mdi mdi-medical-bag text-primary me-1" />4+ Years</div>
                  </div>
                  <h6 className="mb-0">$199<span className="text-muted small ms-1">Inc.VAT</span></h6>
                </div>
                <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                  <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                    <span className="small">SEE DOCTOR NOW</span>
                    <span className="mdi mdi-video-outline mdi-18px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                <div className="position-absolute m-2">
                  <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                </div>
                <img src="img/video/available-doctor-4.jpg" alt="" className="card-img-top top-doctor-img" />
                <div className="card-body small p-3 osahan-card-body">
                  <h6 className="card-title fs-14 mb-1">Dr. Cayden Stack</h6>
                  <p className="card-text text-muted mb-1">MBBS, BCS</p>
                  <div className="d-flex align-items-center gap-3 small mb-3">
                    <div><span className="mdi mdi-star text-warning me-1" />4.9 (5,380)</div>
                    <div><span className="mdi mdi-medical-bag text-primary me-1" />4+ Years</div>
                  </div>
                  <h6 className="mb-0">$199<span className="text-muted small ms-1">Inc.VAT</span></h6>
                </div>
                <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                  <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                    <span className="small">SEE DOCTOR NOW</span>
                    <span className="mdi mdi-video-outline mdi-18px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="footer mt-auto p-3 fix-osahan-footer">
        <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
          <a href="home.html" className="col footer-bottom-nav active">
            <span className="mdi mdi-home-variant-outline mdi-24px" />
            <span>Home</span>
          </a>
          <a href="search.html" className="col footer-bottom-nav">
            <span className="mdi mdi-magnify mdi-24px" />
            <span>Search</span>
          </a>
          <a href="video.html" className="col footer-bottom-nav">
            <span className="mdi mdi-video-outline mdi-24px" />
            <span>Video</span>
          </a>
          <a href="message.html" className="col footer-bottom-nav">
            <span className="mdi mdi-message-processing-outline mdi-24px" />
            <span>Chat</span>
          </a>
          <a href="my-profile.html" className="col footer-bottom-nav">
            <span className="mdi mdi-account-outline mdi-24px" />
            <span>Profile</span>
          </a>
        </div>
      </div>
    </div>
    {/* sidebar nav */}
    <nav id="main-nav">
      <ul className="second-nav">
        <li className="osahan-user-profile bg-primary">
          <div className="d-flex align-items-center gap-2">
            <img src="img/favorite/favorite-4.jpg" alt="" className="rounded-pill img-fluid" />
            <div className="ps-1">
              <h6 className="fw-bold text-white mb-0">Hey, Samantha!</h6>
              <p className="text-white-50 m-0 small">+91 12345-67890</p>
            </div>
          </div>
        </li>
        <li><a href="index.html"><span className="mdi mdi-cellphone me-3" />Splash</a></li>
        <li>
          <a href="#"><span className="mdi mdi-login me-3" />Authentication</a>
          <ul>
            <li><a href="landing.html">Landing</a></li>
            <li><a href="welcome.html">Welcome</a></li>
            <li><a href="sign-up.html">Sign up</a></li>
            <li><a href="sign-in.html">Sign in</a></li>
            <li><a href="sign-in-email.html">Sign in with email</a></li>
            <li><a href="forget-password.html">Forget Password</a></li>
            <li><a href="reset-password.html">Reset Password</a></li>
            <li><a href="verify.html">Verify</a></li>
            <li> <a href="congrats.html">Congrats</a></li>
          </ul>
        </li>
        <li><a href="notification.html"><span className="mdi mdi-bell-outline me-3" />Notification</a></li>
        <li><a href="home.html"><span className="mdi mdi-home-variant-outline me-3" />Homepage</a></li>
        <li>
          <a href="#"><span className="mdi mdi-magnify me-3" />Doctors</a>
          <ul>
            <li><a href="search.html"><span className="mdi mdi-magnify me-3" />Doctor List</a></li>
            <li><a href="doctor-profile.html"><span className="mdi mdi-account-supervisor-outline me-3" />Doctor Profile</a></li>
            <li><a href="request-appointment.html"><span className="mdi mdi-calendar-check me-3" />Request Appointment</a>
            </li>
            <li><a href="book-appointment.html"><span className="mdi mdi-calendar-plus me-3" />Book Appointment</a></li>
            <li><a href="visit-info.html"><span className="mdi mdi-information-outline me-3" />Visit Info</a></li>
            <li><a href="overview.html"><span className="mdi mdi-file-table-box-outline me-3" />Checkout</a></li>
          </ul>
        </li>
        <li>
          <a href="#"><span className="mdi mdi-account-outline me-3" />My Profile</a>
          <ul>
            <li><a href="my-profile.html"><span className="mdi mdi-account-outline me-3" />My Account</a></li>
            <li><a href="my-appointment-upcoming.html"><span className="mdi mdi-calendar-clock me-3" />My Upcoming Appointment</a></li>
            <li><a href="my-appointment.html"><span className="mdi mdi-calendar-range me-3" />My Appointments</a></li>
            <li><a href="history.html"><span className="mdi mdi-history me-3" />History</a></li>
            <li><a href="favorite-doctor.html"><span className="mdi mdi-cards-heart-outline me-3" />Favorites Doctor</a></li>
            <li><a href="change-profile.html"><span className="mdi mdi-square-edit-outline me-3" />Edit Profile</a></li>
          </ul>
        </li>
        <li><a href="video.html"><span className="mdi mdi-video-outline me-3" />Video Consultation</a></li>
        <li>
          <a href="#"><span className="mdi mdi-phone-outline me-3" />Doctor Call</a>
          <ul>
            <li><a href="call.html">Call</a></li>
            <li><a href="call-doctor.html">Call Doctor</a></li>
            <li><a href="call-end.html">Call End</a></li>
          </ul>
        </li>
        <li>
          <a href="#"><span className="mdi mdi-record-circle-outline me-3" />Doctor Recordings</a>
          <ul>
            <li><a href="recording.html">Recording 1</a></li>
            <li><a href="recording-2.html">Recording 2</a></li>
            <li><a href="play-recording.html">Play Recording 1</a></li>
            <li><a href="play-recording-2.html">Play Recording 2</a></li>
          </ul>
        </li>
        <li><a href="message.html"><span className="mdi mdi-message-processing-outline me-3" />Message</a></li>
        <li><a href="chat.html"><span className="mdi mdi-chat-processing-outline me-3" />Chat</a></li>
        <li><a href="review.html"><span className="mdi mdi-star-half-full me-3" />Doctor Review</a></li>
      </ul>
      <ul className="bottom-nav">
        <li className="home">
          <a href="home.html">
            <p className="h5 m-0"><span className="mdi mdi-home-variant-outline" /></p>
            Home
          </a>
        </li>
        <li className="find">
          <a href="search.html">
            <p className="h5 m-0"><span className="mdi mdi-magnify" /></p>
            Search
          </a>
        </li>
        <li className="more">
          <a href="my-profile.html">
            <p className="h5 m-0"><span className="mdi mdi-account-circle-outline" /></p>
            Profile
          </a>
        </li>
      </ul>
    </nav>
    {/* Bootstrap bundle js */}
    {/* Jquery js */}
    {/* Slick slider js */}
    {/* Sidebar js */}
    {/* Custom js */}
  </div>
  );
};

export default Home;
