import styled from "styled-components";

export const ContainerButton = styled.button`
  padding: 12px 24px;
  border: 2px solid ${({ theme, $border }) => theme.colors[$border]};
  border-radius: 5px;
  background-color: ${({ $background, theme }) =>
    theme.colors[$background] || "transparent"};
  color: ${({ theme, $fontColor }) => theme.colors[$fontColor] || "#fff"};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "auto"};
  ${({ theme, $fontColor, $active }) =>
    $active &&
    `
    box-shadow: 0 0 20px ${theme.colors[$fontColor]};
    outline: 2px solid ${theme.colors[$fontColor]};
  `}
  &:hover {
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.red};
    outline: 2px solid {
      ${({ theme }) => theme.colors.red}
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayLight};
    color: ${({ theme }) => theme.colors.grayDark};
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.3;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
