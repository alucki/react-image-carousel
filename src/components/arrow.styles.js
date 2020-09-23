import styled, { css } from "styled-components";

const sharedArrowStyles = css`
  position: absolute;
  top: 45%;
  z-index: 1;
  background: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  svg {
    transform: scale(1.2);
  }
`;

export const ArrowLeftWrapper = styled("div")`
  ${sharedArrowStyles}

  left: 5%;
`;

export const ArrowRightWrapper = styled("div")`
  ${sharedArrowStyles}

  right: 5%;
`;
