import { useEffect, useState } from "react";
import * as S from "./styles";

import iconFooter1 from "../../assets/icons/IconFooter1.png";
import iconFooter2 from "../../assets/icons/IconFooter2.png";
import iconFooter3 from "../../assets/icons/IconFooter3.png";
import iconFooter4 from "../../assets/icons/IconFooter4.png";
import iconFooter5 from "../../assets/icons/IconFooter5.png";
import iconFooter6 from "../../assets/icons/IconFooter6.png";
import iconFooter7 from "../../assets/images/star-wars-4.svg";

const icons = [
  iconFooter1,
  iconFooter2,
  iconFooter3,
  iconFooter4,
  iconFooter5,
  iconFooter6,
  iconFooter7,
  iconFooter1,
  iconFooter2,
  iconFooter3,
  iconFooter4,
  iconFooter5,
  iconFooter6,
];

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const visibleIcons = isMobile ? icons.slice(3, 10) : icons;

  return (
    <S.Container>
      {visibleIcons.map((icon, index) => (
        <S.ImgFooter
          key={index}
          src={icon}
          $width={icon === iconFooter7 ? "100px" : undefined}
        />
      ))}
    </S.Container>
  );
}

export default Footer;
