import styled, { keyframes } from "styled-components";
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

export const ContainerLoading = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const Logo = styled.img`
  width: 200px;
  height: auto;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

export const Title = styled.h2`
  margin-top: 24px;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.yellow || "#333"};
`;
