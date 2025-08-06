import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 80px;
  margin-top: auto;
  background-color: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.gelo};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 44px;
  z-index: 10;

  @media (max-width: 768px) {
    gap: 18px;
    min-height: 60px;
    flex-wrap: wrap;
    padding: 10px 8px;
  }
`;

export const ImgFooter = styled.img`
  width: ${({ $width }) => $width || "40px"};
  height: auto;

  @media (max-width: 768px) {
    width: ${({ $width }) => $width || "24px"};
    ${({ "data-mobile-hidden": hidden }) => hidden && `display: none;`}
  }
`;
