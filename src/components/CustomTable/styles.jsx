// src/components/DataTable/styles.jsx
import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 2px solid
    ${({ theme, $headerColor }) =>
      theme.colors[$headerColor] || theme.colors.yellow};
  border-bottom: none;
  @media (max-width: 768px) {
    border: 1px solid ${({ theme }) => theme.colors.gray || "#ccc"};
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
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  background-color: ${({ $headerColor, theme }) =>
    theme.colors[$headerColor] || "trasparent"};

  color: ${({ $textColor, theme }) => theme.colors[$textColor] || "#000"};
  width: ${({ $size }) => $size || "auto"};

  border-bottom: 1px solid
    ${({ theme, $headerColor }) => theme.colors[$headerColor] || "#fff"};
`;

export const TableCell = styled.td`
  padding: 12px;
  border: none;
  width: ${({ $size }) => $size || "auto"};
  color: ${({ $textColor, theme }) => theme.colors[$textColor] || "#000"};
  border-bottom: 4px solid
    ${({ $bordeColor, theme }) => theme.colors[$bordeColor] || "#fff"};
`;
// export const TableCell = styled.td`
//   padding: 12px;
//   border-bottom: 1px solid
//     ${({ $bordeColor, theme }) => theme.colors[$bordeColor] || "#fff"};

//   box-shadow: 0 4px 8px -2px ${({ theme }) => theme.colors.red};
//   width: ${({ $size }) => $size || "auto"};
//   color: ${({ $textColor, theme }) => theme.colors[$textColor] || "#000"};
// `;
