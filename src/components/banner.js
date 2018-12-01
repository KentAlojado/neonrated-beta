import React from "react";
const Banner = () => (
  <div className="bg-grey-dark banner-sec">
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
  </video>
    <div class="container h-100">
    <div class="d-flex text-center h-100">
      <div class="my-auto w-100 text-white">
        <h1 class="display-3">Video Header</h1>
        <h2>With HTML5 Video and Bootstrap 4</h2>
      </div>
    </div>
  </div>
  </div>
);
export default Banner;
