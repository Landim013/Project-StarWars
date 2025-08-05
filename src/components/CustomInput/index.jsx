import { useState } from "react";
import EyeIconClose from "../../assets/icons/eye-off-svgrepo-com.svg";
import EyeIconOpen from "../../assets/icons/eye-show-svgrepo-com.svg";

import * as S from "./styles";

function CustomInput({
  type = "text",
  placeholder,
  name,
  width,
  height,
  register,
  messageError,
  registerOptions,
  required = false,
  maxLength,
  onChange,
  value,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;
  return (
    <S.ContainerInput $width={width} $messageError={messageError}>
      <S.InputBox>
        <S.StyledInput
          type={inputType}
          placeholder={placeholder}
          $height={height}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          {...(register
            ? register(name, { required, ...registerOptions })
            : {})}
        />
        {isPassword && (
          <S.ToggleButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <S.IconCustom src={EyeIconClose} alt="Ocultar senha" />
            ) : (
              <S.IconCustom src={EyeIconOpen} alt="Mostrar senha" />
            )}
          </S.ToggleButton>
        )}
      </S.InputBox>
      {messageError && (
        <S.ErrorText>
          {messageError.split(",").map((item, idx) => (
            <span key={idx}>🚫 {item}</span>
          ))}
        </S.ErrorText>
      )}
    </S.ContainerInput>
  );
}

export default CustomInput;
