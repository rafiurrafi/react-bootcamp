import React from "react";
import styled from "styled-components";
const BoxContainer = styled.div`
  height: 10rem;
  width: 12rem;
  background-color: gray;
  color: ${(props) => {
    return props.isActive ? "red" : "white";
  }};
`;
const Button = styled.button({
  border: "none",
  backgroundColor: ({ variant }) => (variant === "primary" ? "blue" : "gray"),
  color: "white",
  fontSize: "18px",
  padding: "1rem 1.5rem",
  margin: "1rem",
  borderRadius: "1rem",
  cursor: "pointer",
});
const Box = (props) => {
  return (
    <>
      <BoxContainer isActive={false} className="box">
        I am a component
      </BoxContainer>
      <Button variant="secondary">Primary</Button>
    </>
  );
};

export default Box;
