import { useState } from "react";
// import { BsMoon, BsSun } from "react-icons/bs";
// import { FaUserCircle } from "react-icons/fa";
import user from "../../assets/icons/user.svg";
import Logo from "../../assets/images/star-wars-4.svg";
import * as S from "./styles";

function Header({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S.Header>
      <S.Logo src={Logo} alt="Star Wars" />

      <S.Actions>
        <S.IconButton onClick={toggleTheme}>
          {/* {isDark ? <BsSun size={24} /> : <BsMoon size={24} />} */}
        </S.IconButton>

        <S.UserWrapper>
          <S.IconButton onClick={() => setMenuOpen(!menuOpen)}>
            <S.User src={user} />
          </S.IconButton>

          {menuOpen && (
            <S.DropdownMenu>
              <S.MenuItem onClick={() => console.log("Sair")}>Sair</S.MenuItem>
            </S.DropdownMenu>
          )}
        </S.UserWrapper>
      </S.Actions>
    </S.Header>
  );
}

export default Header;
