import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "428px",
  margin: "10px",
};

// eslint-disable-next-line react/prop-types
const Slider = ({ instagramDataArr }) => (
  <Carousel autoplay>
    {instagramDataArr.map((obj, index) => (
      <div key={index}>
        <div style={contentStyle}>
          <img src={obj.url} className="instagram__photo" />
          <p className="instagram__desc">{obj.text}</p>
        </div>
      </div>
    ))}
  </Carousel>
);

export default Slider;
