import styled from "styled-components";

export const SliderContent = styled("div")`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;
