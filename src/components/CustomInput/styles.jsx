import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  padding: 0 18px;
  font-size: 16px;
  box-shadow: rgba(37, 37, 37, 0.12) 0px 4px 24px 0px;
  border: 2px solid ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  outline: none;
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "45px"};
  background: none;

  &:focus {
    outline: 2px solid #33e1ff;
    box-shadow: 0 0 12px #33e1ff;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.colors.red};
  /* color: #ffc502; */
  font-size: 12px;
  margin-top: 8px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 54%;
  right: 18px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;
`;
export const InputBox = styled.div`
  position: relative;
  width: 100%;
`;

export const IconCustom = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
