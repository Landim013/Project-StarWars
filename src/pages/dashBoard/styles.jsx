import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const CotentTable = styled.div`
  max-width: 1200px;
  width: 1200px;
  padding: 0 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
    align-items: stretch;
  }
`;
