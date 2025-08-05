import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 12px 28px;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
export const Cabecario = styled.img`
  width: 100%;
`;

export const Logo = styled.img`
  width: 200px;
`;
export const User = styled.img`
  width: 80px;
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
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  min-width: 100px;
  z-index: 99;
`;

export const MenuItem = styled.div`
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
