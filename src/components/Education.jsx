import React from "react";

export default function Education({ value }) {
  return (
    <div class="col-12 col-x-4 col-xl-4 col-xxl-4 text-lg-center mb-4 mb-lg-0">
      <div class="row bg-light p-2 rounded-4">
        <div class="col-6 col-xl-12 col-xxl-12 m-auto">
          <img
            class="card-img"
            src={value.logo}
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div class="col-6 col-xl-12 col-xxl-12 align-content-center p-1">
          <div class="fw-bolder p-1">
            <a class="text-decoration-none" href={value.link} target="_blank">
              {value.university}
            </a>
          </div>
          <div class="fw-semibold p-1">{value.degree}</div>
          <div class="text-muted pb-1">{value.duration}</div>
          <div class="text-muted">{value.gpa}</div>
        </div>
      </div>
    </div>
  );
}
