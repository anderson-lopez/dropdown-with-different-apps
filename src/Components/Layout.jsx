import styled from "styled-components";
import DropDown from "./DropDown";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import React, { useState, useEffect } from "react";
import { useRef } from "react";

const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .container-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: #4dd14d;
      margin: 0;
      font-size: 5rem;
    }
    h2 {
      color: #4d4d4d;
      font-weight: 700;
      font-size: 4rem;
      margin: 1rem;
    }
  }
`;

const ContainerButton = styled.button`
  width: 20rem;
  height: 3rem;
  color: #b9b9b9;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: none;
  box-shadow: ${({ isSeleccion }) =>
    !isSeleccion ? "0px 0px 4px 1px #638cfd" : "none"};
  background-color: #474a50;
  transition: all 0.2s;
  :hover {
    color: #dddddd;
    cursor: pointer;
  }
  span {
    width: 30%;
  }
  .drop-title-icon {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .svg-logo {
      margin: 0.5rem;
    }
    .drop-title-text {
      margin: 0.5rem;
    }
  }
  .drop-arrow {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      transform: ${({ isSeleccion }) =>
        !isSeleccion ? "rotate(180deg)" : "rotate(0)"};
    }
  }
`;

const ContainerDrop = styled.div`
  width: 20rem;
  height: 19rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Layout = () => {
  const [seleccion, setSeleccion] = useState(true);
  const [selcetedId, setSelcetedId] = useState("facebook");

  const ContentDropDown = [
    {
      id: "facebook",
      icon: <BsFacebook />,
      label: "Facebook",
    },
    {
      id: "linkedin",
      icon: <AiFillLinkedin />,
      label: "Linkedin",
    },
    {
      id: "instagram",
      icon: <BsInstagram />,
      label: "Instagram",
    },
    {
      id: "twitter",
      icon: <AiOutlineTwitter />,
      label: "Twitter",
    },
    {
      id: "youtube",
      icon: <AiFillYoutube />,
      label: "Youtube",
    },
  ];

  const labelSelection = {
    "facebook": "Facebook",
    "linkedin": "Linkedin",
    "instagram": "Instagram",
    "twitter": "Twitter",
    "youtube": "Youtube",
  };
  const iconSelection = {
    "facebook": <BsFacebook />,
    "linkedin": <AiFillLinkedin />,
    "instagram": <BsInstagram />,
    "twitter": <AiOutlineTwitter />,
    "youtube": <AiFillYoutube />,
  };

  const rendersLabels = labelSelection[selcetedId];;
  const renderIcons = iconSelection[selcetedId];

  const seleccionIdDrop = (s) => {
    setSelcetedId(s)
  };


  return (
    <Cotainer>
      <div className="container-title">
        <h1>Dropdown</h1>
        <h2>HTML l CSS l JavaScript</h2>
      </div>

      <ContainerButton
        id="drop" 
        onClick={() => setSeleccion(!seleccion)}
        isSeleccion={seleccion}
      >
        <span className="drop-title-icon">
          <div className="svg-logo">{renderIcons}</div>
          <span className="drop-title-text">
            <h3>{rendersLabels}</h3>
          </span>
        </span>
        <span className="drop-arrow">
          <div>
            <TiArrowSortedDown />
          </div>
        </span>
      </ContainerButton>
      <ContainerDrop >
        <DropDown 
          isSeleccion={seleccion}
          metSeleccion={setSeleccion}
          contentdropDown={ContentDropDown}
          seleccionIdDrop={seleccionIdDrop}
        />
      </ContainerDrop>
    </Cotainer>
  );
};

export default Layout;
