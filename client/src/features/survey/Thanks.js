import React from "react";

const containerStyles = {
  width: "100%",
  height: "100%",
};

export default function Thanks() {
  return (
    <div style={containerStyles}>
      <div className="row">
        <div className="col s6 offset-s3 valign">
          <div className="card">
            <div className="card-content center-align">
              <h1>Thank you!</h1>
              <p>Your response has been recorded and will be reviewed soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
