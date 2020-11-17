import React, { useEffect, useState } from "react";

import { Switch, Tooltip } from "antd";
import { InstagramOutlined } from "@ant-design/icons";

import '../../sass/_constants.scss';

import Slider from "../slider/slider";

import {
  INSTAGRAM_API_TRONASTYA,
  INSTAGRAM_API_LEAP_TO_TRIP,
  TRONASTYA_URL,
  LEAP_TO_TRIP_URL,
} from "../../utils/constants";
import goToPage from "../../utils/goToPage";



const AboutPage = () => {
  const [tronastyaDataArr, setTronastyaDataArr] = useState([]);
  const [leapToTripDataArr, setLeapToTripDataArr] = useState([]);
  const [isSwitchChecked, setSwitchChecked] = useState(true);
  const [tronastyaProfilePhoto, setTronastyaProfilePhoto] = useState("");
  const [LeapToTripProfilePhoto, setLeapToTripProfilePhoto] = useState("");

  const followUrl = isSwitchChecked ? LEAP_TO_TRIP_URL : TRONASTYA_URL;

  const changeInstagramProfile = () => {
    if (isSwitchChecked) {
      setSwitchChecked(false);
    } else {
      setSwitchChecked(true);
    }
  };

  useEffect(() => {
    async function fetchInstagramData(api, setStateFunc) {
      const response = await fetch(api);
      const data = await response.json();
      const mediaArr = data.graphql.user.edge_owner_to_timeline_media.edges;
      const instaData = mediaArr.map((obj) => {
        const textNode = obj.node.edge_media_to_caption.edges[0];
        return {
          url: obj.node.display_url,
          text: `${textNode ? textNode.node.text : ""}`,
        };
      });

      setStateFunc(instaData);
    }

    async function fetchProfilePhoto(api, setStateFunc) {
      const response = await fetch(api);
      const data = await response.json();
      const photoUrl = data.graphql.user.profile_pic_url;

      setStateFunc(photoUrl);
    }

    fetchInstagramData(INSTAGRAM_API_LEAP_TO_TRIP, setLeapToTripDataArr);
    fetchProfilePhoto(INSTAGRAM_API_LEAP_TO_TRIP, setLeapToTripProfilePhoto);
    fetchInstagramData(INSTAGRAM_API_TRONASTYA, setTronastyaDataArr);
    fetchProfilePhoto(INSTAGRAM_API_TRONASTYA, setTronastyaProfilePhoto);
  }, []);

  return (
    <div className="about">
      <div className="about__description">
        <h2 className="about__title">About me</h2>
        <div className="about__name">
          <h3>I am Anastasiya Sych.</h3>
          <Tooltip title="Switch Instagram profiles">
            <Switch
              checkedChildren="leapToTrip"
              unCheckedChildren="tronastya23"
              className="instagram-switcher"
              checked={isSwitchChecked}
              onChange={changeInstagramProfile}
            />
          </Tooltip>
        </div>
        <div className="about__info">
          <div>
            <img src="../../src/assets/images/girl.png" />
            <span>
              I am a Junior <strong>Front-end Developer</strong> and{" "}
              <strong>Language Teacher</strong> (English, Chinese) located in
              Minsk, Belarus.
            </span>
          </div>
          <div>
            <img src="../../src/assets/images/developer.png" />
            <span>
              I enjoy coding using <strong>React JS</strong> as well as teaching
              other people languages.
            </span>
          </div>
          <div>
            <img src="../../src/assets/images/snowboard.png" />
            <span>
              When I'm not coding, you'll find me <strong>snowboarding</strong>{" "}
              or <strong>skateboarding</strong>.
            </span>
          </div>
        </div>
        <div className="about__follow" onClick={() => goToPage(followUrl)}>
          <InstagramOutlined className="instagram-icon" />
          <span>Follow me</span>
        </div>
      </div>
      <div className="about__slider">
        <Slider
          instagramDataArr={
            isSwitchChecked ? leapToTripDataArr : tronastyaDataArr
          }
          profilePhoto={
            isSwitchChecked ? LeapToTripProfilePhoto : tronastyaProfilePhoto
          }
          isSwitchChecked={isSwitchChecked}
        />
      </div>
    </div>
  );
};

export default AboutPage;
