import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 28px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Logo = styled.img`
  width: 200px;
  @media (max-width: 768px) {
    width: 20%;
  }
`;
export const ForceText = styled.div`
  font-size: 38px;
  margin-right: 120px;
  font-weight: bold;
  font-family: "StarJedi", sans-serif;
  color: ${({ theme }) => theme.colors.yellow};
  background: linear-gradient(90deg, #ffe347, #ffc502);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid ${({ theme }) => theme.colors.yellow};
  width: fit-content;

  animation: typing 10s steps(70, end);
  animation-delay: 0s, 18s;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 45%;
    }
  }

  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ theme }) => theme.colors.yellow};
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    margin: 0;
    width: 160px;
    white-space: normal;
    height: 40px;
    animation: none;
    border-right: none;
  }
`;

export const User = styled.img`
  width: 80px;
  @media (max-width: 768px) {
    width: 40px;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const UserWrapper = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  right: -10px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  min-width: 100px;
  z-index: 99;
  text-align: center;
  @media (max-width: 768px) {
    top: 50px;
    right: -10px;
    min-width: 60px;
  }
`;

export const MenuItem = styled.div`
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.yellow};
  }
`;
