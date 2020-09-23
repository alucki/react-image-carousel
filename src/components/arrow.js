import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowLeftWrapper, ArrowRightWrapper } from "./arrow.styles";

export const LeftArrow = ({ handleClick }) => (
  <ArrowLeftWrapper onClick={handleClick}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </ArrowLeftWrapper>
);

export const RightArrow = ({ handleClick }) => (
  <ArrowRightWrapper onClick={handleClick}>
    <FontAwesomeIcon icon={faArrowRight} />
  </ArrowRightWrapper>
);
