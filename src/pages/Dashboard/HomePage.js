import React from "react";
import {
  UserIcon,
  UserLabel,
  Icons,
  SWelcom,
  SLabel,
  SSLabel,
  NotificationCard,
  NotificationCards,
  NotificationLabelNumber,
  NotificationIcon,
  SNotificationLabelNumber,
  SNotificationLabelText,
  EvolutionContainer,
  EvolutionCard,
  EvolutionBigText,
  EvolutionSmallText,
} from "./Styles";
import { AiOutlineUser } from "react-icons/ai";
import { MdPeople, MdMessage, MdStars } from "react-icons/md";

const NotificationCardList = [
  {
    numbers: 23455,
    texts: "Baxolashlar soni",
    SetIcons: <MdMessage />,
  },
  {
    numbers: 6433,
    texts: "Kelgan habarlar soni",
    SetIcons: <MdStars />,
  },
];

const EvolutionList = [
  {
    text1: "Xona tozaligi uchun baxolashlar",
    text2: "1 ta yulduzcha belgilaganlar soni - 4543 ta",
    text3: "2 ta yulduzcha belgilaganlar soni - 4543 ta",
    text4: "3 ta yulduzcha belgilaganlar soni - 4543 ta",
    text5: "4 ta yulduzcha belgilaganlar soni - 4543 ta",
    text6: "5 ta yulduzcha belgilaganlar soni - 4543 ta",
  },
  {
    text1: "Restoran uchun baxolashlar",
    text2: "1 ta yulduzcha belgilaganlar soni - 4543 ta",
    text3: "2 ta yulduzcha belgilaganlar soni - 4543 ta",
    text4: "3 ta yulduzcha belgilaganlar soni - 4543 ta",
    text5: "4 ta yulduzcha belgilaganlar soni - 4543 ta",
    text6: "5 ta yulduzcha belgilaganlar soni - 4543 ta",
  },
  {
    text1: "Reception xizmati uchun baxolashlar",
    text2: "1 ta yulduzcha belgilaganlar soni - 4543 ta",
    text3: "2 ta yulduzcha belgilaganlar soni - 4543 ta",
    text4: "3 ta yulduzcha belgilaganlar soni - 4543 ta",
    text5: "4 ta yulduzcha belgilaganlar soni - 4543 ta",
    text6: "5 ta yulduzcha belgilaganlar soni - 4543 ta",
  },
  {
    text1: "Nonushta uchun baxolashlar",
    text2: "1 ta yulduzcha belgilaganlar soni - 4543 ta",
    text3: "2 ta yulduzcha belgilaganlar soni - 4543 ta",
    text4: "3 ta yulduzcha belgilaganlar soni - 4543 ta",
    text5: "4 ta yulduzcha belgilaganlar soni - 4543 ta",
    text6: "5 ta yulduzcha belgilaganlar soni - 4543 ta",
  },
  {
    text1: "Basseyn & Sauna uchun baxolashlar",
    text2: "1 ta yulduzcha belgilaganlar soni - 4543 ta",
    text3: "2 ta yulduzcha belgilaganlar soni - 4543 ta",
    text4: "3 ta yulduzcha belgilaganlar soni - 4543 ta",
    text5: "4 ta yulduzcha belgilaganlar soni - 4543 ta",
    text6: "5 ta yulduzcha belgilaganlar soni - 4543 ta",
  },
];

const HomePage = () => {
  return (
    <div>
      <UserIcon>
        <Icons>
          <AiOutlineUser />
        </Icons>
        <UserLabel>Akhmedov Quvonchbek</UserLabel>
      </UserIcon>
      <SWelcom>
        <SLabel>Hayrli kun Quvonchbek!</SLabel>
        <SSLabel>Dashboard</SSLabel>
      </SWelcom>
      
      <NotificationCards>
        {NotificationCardList.map(({ numbers, texts, SetIcons }) => (
          <NotificationCard>
            <NotificationLabelNumber>
              <SNotificationLabelNumber>{numbers}</SNotificationLabelNumber>
              <SNotificationLabelText>{texts}</SNotificationLabelText>
            </NotificationLabelNumber>
            <NotificationIcon>{SetIcons}</NotificationIcon>
          </NotificationCard>
        ))}
      </NotificationCards>

      <EvolutionContainer>
        {EvolutionList.map(({ text1, text2, text3, text4, text5, text6 }) => (
          <EvolutionCard key={text1}>
            <EvolutionBigText>{text1}</EvolutionBigText>
            <EvolutionSmallText>{text2}</EvolutionSmallText>
            <EvolutionSmallText>{text3}</EvolutionSmallText>
            <EvolutionSmallText>{text4}</EvolutionSmallText>
            <EvolutionSmallText>{text5}</EvolutionSmallText>
            <EvolutionSmallText>{text6}</EvolutionSmallText>
          </EvolutionCard>
        ))}
      </EvolutionContainer>
    </div>
  );
};

export default HomePage;
