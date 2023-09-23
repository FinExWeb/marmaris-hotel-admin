import styled from "styled-components";
export const Containers = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255);
  max-width: 600px;
  color: #009688;
  margin: 10px;
  flex-direction: column;
`;

export const SContainer = styled.div`
  overflow: auto;
  height: 100vh;
  max-width: 100%;
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SImages = styled.img`
  max-width: 100%;
`;
export const SText = styled.h2`
  text-align: start;
  width: 100%;
  margin: 10px 0;
`;
