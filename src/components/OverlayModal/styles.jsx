import styled from "styled-components";

export const ContainerOverlay = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  gap: 4px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.modal};
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  min-height: 254px;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 40%;
    align-self: center;
  }
`;

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -20px;
  width: 80px;
  @media (max-width: 768px) {
    max-width: 60px;
    align-self: center;
  }
`;
export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  color: ${({ $color, theme }) => theme.colors[$color] || theme.colors.yellow};
`;

export const Description = styled.p`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 18px;
  color: ${({ $color, theme }) => theme.colors[$color] || theme.colors.yellow};
`;
export const ContainerButton = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
  padding-bottom: 30px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
