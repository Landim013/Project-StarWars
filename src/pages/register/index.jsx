import { useState } from "react";
import { useForm } from "react-hook-form";
import saberRed from "../../assets/images/saberRed.png";
import imageStar from "../../assets/images/star-wars-4.svg";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import OverlayModal from "../../components/OverlayModal";
import * as S from "./styles";

function Register() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    description: "",
    colorButton: "",
    border: "",
    fontColor: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: { email: "", confirmPassword: "", password: "" },
  });

  const onSubmit = (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("userRegister", JSON.stringify(userData));

    setModalOpen(true);
    setModalInfo({
      title: "Sucesso",
      description: "Seu cadastro foi concluído!",
      border: "green",
      fontColor: "green",
    });

    console.log("Cadastro salvo:", userData);
  };

  function validatePassword(password) {
    const errors = [];

    if (password.length < 6) {
      errors.push("A senha deve ter pelo menos 6 caracteres");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Deve conter uma letra maiúscula");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Deve conter uma letra minúscula");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Deve conter um número");
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      errors.push("Deve conter um caractere especial");
    }

    return errors.length === 0 ? true : errors.join(", ");
  }

  return (
    <S.Container>
      <S.LoginCard>
        <S.FormContent>
          <S.Logo
            src={imageStar}
            alt="Logo star wars"
            aria-label="Logo star wars"
          />
          <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              name="email"
              type="text"
              placeholder="Digite seu e-mail"
              register={register}
              disabled={false}
              messageError={errors.email?.message}
              registerOptions={{ required: "Nome obrigatório" }}
              aria-label="Nome do usuário"
            />
            <CustomInput
              name="password"
              type="password"
              placeholder="Digite sua senha"
              disabled={false}
              register={register}
              registerOptions={{
                validate: validatePassword,
                required: "Senha é obrigatória",
              }}
              messageError={errors.password?.message}
              aria-label="Senha do usuário"
            />
            <CustomInput
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              disabled={false}
              register={register}
              registerOptions={{
                required: "Confirmação obrigatória",
                validate: (value) =>
                  value === watch("password") || "As senhas não coincidem",
              }}
              messageError={errors.confirmPassword?.message}
              aria-label="Senha do usuário"
            />

            <S.ButtonGroup>
              <CustomButton
                text="Cadastrar"
                type="submit"
                fontColor={"red"}
                background="none"
                width="100%"
                aria-label="Cadastrar"
              />
            </S.ButtonGroup>
          </S.StyledForm>
        </S.FormContent>

        <S.Saber
          src={saberRed}
          alt="Imagem saber de luz vermelho"
          aria-label="Imagem saber de luz vermelho"
        />
      </S.LoginCard>
      <OverlayModal
        isOpen={modalOpen}
        title={modalInfo.title}
        description={modalInfo.description}
        fontColor={modalInfo.fontColor}
        border={modalInfo.border}
        onClose={() => setModalOpen(false)}
        aria-label="Modal de resultado"
      />
    </S.Container>
  );
}

export default Register;
