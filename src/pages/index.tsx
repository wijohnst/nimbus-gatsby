import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-family: "Titan One", cursive;
`;
const IndexPage = () => {
  return <StyledSpan>Nimbus: Cloud Enabled Point-of-Sale</StyledSpan>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Great service. From anywhere.</title>;
