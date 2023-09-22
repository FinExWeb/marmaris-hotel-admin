import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding: calc(${v.smSpacing} * 2);
  margin: 0 50px;
  overflow: auto;
  height: 100vh;
  
  h1 {
    font-size: 14px;
  }
`;
