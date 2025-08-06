import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 2px solid
    ${({ theme, $headerColor }) =>
      theme.colors[$headerColor] || theme.colors.blue};
  border-bottom: 2px solid
    ${({ theme, $headerColor }) =>
      theme.colors[$headerColor] || theme.colors.blue};
  @media (max-width: 768px) {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 8px;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 400px;
  border-collapse: collapse;
  font-size: 24px;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }
`;

export const TableHeader = styled.th`
  text-align: center;

  padding: 12px;
  background-color: ${({ $headerColor, theme }) =>
    theme.colors[$headerColor] || "trasparent"};

  color: ${({ $textColor, theme }) =>
    theme.colors[$textColor] || theme.colors.yellow};
  min-width: ${({ $size }) => $size || "150px"};

  border-bottom: 1px solid
    ${({ theme, $headerColor }) =>
      theme.colors[$headerColor] || theme.colors.blue};
  @media (max-width: 768px) {
    padding: 10px 2px;
    width: 150px;
  }
`;

export const TableCell = styled.td`
  text-align: center;
  padding: 8px 0px;
  border: none;
  width: ${({ $size }) => $size || "150px"};
  color: ${({ theme }) => theme.colors.gelo};
`;
export const SaberUp = styled.img`
  width: 26px;
  @media (max-width: 768px) {
    width: 26px;
    margin-bottom: -4px;
  }
`;
export const SaberDown = styled.img`
  width: 26px;
  transform: rotate(180deg);
  @media (max-width: 768px) {
    width: 26px;
    margin-bottom: -4px;
  }
`;
