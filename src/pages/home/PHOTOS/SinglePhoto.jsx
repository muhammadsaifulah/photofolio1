import React from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SinglePhoto = ({id, Image, show, setSingleImage ,singleImage}) => {
  const handleImage = () => {
    setSingleImage(Image);
    show(true);
  };

  return (
    <>
      <div className="col-lg-3">
        <div className="card border-0 my-2 card-img rounded-3 position-relative">
          <div className="overlay">
            <div className="icon" style={{ height: "100%" }}>
              <div
                style={{
                  height: "100%",
                  color: "white",
                  cursor: "pointer", // Apply cursor style inline
                }}
                className="d-flex justify-content-center align-items-center gap-3"
              >
                <BsArrowsAngleExpand onClick={handleImage} size={25} />

                <Link  to={`/details/${id}`}>
                
                <FaLink  size={25} />

                </Link>
              </div>
            </div>
          </div>
          {/* Stray text "is this code correct" */}
          {/* <img className="rounded-3" width={"100%"} style={{ objectFit: 'cover' }} src={Image} alt="" /> */}
          <img
            className="rounded-3"
            width={"100%"}
            style={{ objectFit: "cover" }}
            src={Image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
