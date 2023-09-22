import React from "react";
import { Container } from "./Style";
import {
  Datas,
  EvolutionBigText,
  EvolutionCard,
  EvolutionContainer,
  EvolutionSmallText,
  Icons,
  SLabel,
  SSLabel,
  SWelcom,
  UserIcon,
  UserLabel,
} from "../Dashboard/Styles";
import { AiOutlineUser } from "react-icons/ai";

const Messegaes = () => {
  return (
    <Container>
      <UserIcon>
        <Icons>
          <AiOutlineUser />
        </Icons>
        <UserLabel>Xush kelibsiz, Quvonchbek</UserLabel>
      </UserIcon>
      <SWelcom>
        <SLabel>Quvonchbek yangi habarlar mavjud!</SLabel>
        <SSLabel>Xabarlar</SSLabel>
      </SWelcom>
      <EvolutionContainer>
        {Array(5)
          .fill()
          .map((_, index) => {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
            });

            return (
              <EvolutionCard key={index}>
                <EvolutionBigText>Anonim habar: #{index + 1}</EvolutionBigText>
                <EvolutionSmallText>
                  fdfndkn;fdngdfnk;n;jn;kjn;kjnb;kgfbnbknbnbjgnbijgnbjnbjkgnb
                  gkfgdfkgnkdfngbkdfngnkengkngkjn
                  <Datas>Kelgan vaqti: {formattedDate}</Datas>
                </EvolutionSmallText>
              </EvolutionCard>
            );
          })}
      </EvolutionContainer>
    </Container>
  );
};

export default Messegaes;
