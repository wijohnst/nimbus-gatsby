import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
//@ts-ignore
import elevatorPitch from "../images/NimbusElevatorPitch.png";

import SignUpForm from "./SignUpForm";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  background-color: #f1e3e4;
  background: linear-gradient(180deg, #f1e3e4 0%, #f1e3e4 50%, #bb9bb0 100%);
`;

const ElevatorPitchImage = styled.img`
  width: 75%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const IndexPage = () => {
  return (
    <AppWrapper>
      <ElevatorPitchImage src={elevatorPitch} />
      <SignUpForm />
    </AppWrapper>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>Nimbus - Great service. From anywhere.</title>
);
