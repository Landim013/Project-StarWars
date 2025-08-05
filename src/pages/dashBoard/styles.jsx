import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const CotentTable = styled.div`
  max-width: 1200px;
  width: 1200px;
  padding: 0 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
