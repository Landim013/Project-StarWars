import { useState } from "react";
import user from "../../assets/icons/user.svg";
import Logo from "../../assets/images/star-wars-4.svg";
import { useAuth } from "../../contexts/authContext";
import * as S from "./styles";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout, deleteAccount } = useAuth();
  return (
    <S.Header>
      <S.Logo src={Logo} alt="Star Wars" />
      <S.ForceText>Que a força esteja com você...</S.ForceText>
      <S.Actions>
        <S.UserWrapper>
          <S.IconButton onClick={() => setMenuOpen(!menuOpen)}>
            <S.User src={user} />
          </S.IconButton>

          {menuOpen && (
            <S.DropdownMenu>
              <S.MenuItem onClick={logout}>Sair</S.MenuItem>
              <S.MenuItem onClick={deleteAccount}>Excluir conta</S.MenuItem>
            </S.DropdownMenu>
          )}
        </S.UserWrapper>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
