import * as S from "./styles";

function CustomButton({
  text,
  onClick,
  disabled = false,
  background,
  fontColor,
  width,
  height,
  border,
  active,
}) {
  return (
    <S.ContainerButton
      $width={width}
      $height={height}
      disabled={disabled}
      $background={background}
      $fontColor={fontColor}
      onClick={onClick}
      $border={border}
      $active={active}
    >
      {text}
    </S.ContainerButton>
  );
}

export default CustomButton;
