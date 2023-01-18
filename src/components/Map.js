import React from "react";

export default function Map() {
  return (
    <div id="map">
      <h1 className="map-title">Dove siamo</h1>
      <iframe
        className="map"
        src="https://maps.google.com/maps?q=Via%20Lunense%2057&t=&z=13&ie=UTF8&iwloc=&output=embed"
        title="map"
      ></iframe>
      <div className="map-social">
        <h4 className="social-title">Seguici sui social!</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com" className="instagram-a">
            <img src="../../images/instagram.png" />
          </a>{" "}
          <a href="/" className="facebook-a">
            <img src="../../images/facebook.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
