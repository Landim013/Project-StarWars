import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;

export const LoginCard = styled.div`
  width: 420px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 20px;
`;

export const Logo = styled.img`
  width: 280px;
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const Saber = styled.img`
  width: 20px;
  height: 460px;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  padding: 0 8px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 14px;

  @media (max-width: 768px) {
    margin-top: 2px;
  }
`;
