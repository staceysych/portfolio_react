import React, { useEffect, useState } from "react";

import { Switch } from "antd";

import Slider from "../slider/slider";

import INSTAGRAM__API from "../../utils/constants";

const AboutPage = () => {
  const [instagramDataArr, setInstagramDataArr] = useState([]);

  useEffect(() => {
    async function fetchInstagramPhotos() {
      const response = await fetch(INSTAGRAM__API);
      const data = await response.json();
      const mediaArr = data.graphql.user.edge_owner_to_timeline_media.edges;
      const instaData = mediaArr.map((obj) => {
        const textNode = obj.node.edge_media_to_caption.edges[0];
        return {
          url: obj.node.display_url,
          text: `${textNode ? textNode.node.text : ""}`,
        };
      });

      setInstagramDataArr(instaData);
    }
    fetchInstagramPhotos();
  });

  return (
    <div className="about">
      <div className="about__description">
        <h2 className="about__title">About me</h2>
        <p className="about__info">
          <h3>I am Anastasiya Sych.</h3>
          I am a Junior Front-end Developer and Language Teacher (English, Chinese)
          located in Minsk, Belarus. I enjoy coding using React JS as well as teaching other people languages. I like combining programming and languages. I am looking to take on
          more work and to increase my skills as a Front-end Developer. 
          When I'm not coding, you'll find me snowboarding,
          skateboarding in the park.
        </p>
        <Switch
          checkedChildren="tronastya23"
          unCheckedChildren="leapToTrip"
          defaultChecked
        />
      </div>
      <div className="about__slider">
        <Slider instagramDataArr={instagramDataArr} />
      </div>
    </div>
  );
};

export default AboutPage;
