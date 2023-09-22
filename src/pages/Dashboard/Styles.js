import styled from "styled-components";
import { v } from "../../styles/variables";

export const UserIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.div`
  font-size: 2rem;
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserLabel = styled.span`
  font-size: 1.5rem;
  font-family: monospace;
  text-transform: uppercase;
  margin-left: 10px;
  }
`;

export const SWelcom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const SLabel = styled.p`
  color: #333;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const SSLabel = styled.span`
  color: #333;
  font-size: 15px;
`;

export const NotificationCards = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

export const NotificationCard = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.bg};
  width: 230px;
  color: #009688;
  margin: 10px;
`;

export const NotificationLabelNumber = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70px;
`;

export const SNotificationLabelNumber = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SNotificationLabelText = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
`;

export const NotificationIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
`;

export const EvolutionContainer = styled.div`
  margin: 30px 0;
  color: #009688;
`;
export const EvolutionCard = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: 20px;
  margin: 10px 0;
`;
export const EvolutionBigText = styled.p`
  font-weight: auto;
  font-size: 1.3rem;
`;

export const EvolutionSmallText = styled.p`
  font-weight: auto;
  margin: 10px 0;
  font-size: 0.9rem;
`;

export const Datas = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin: 30px 0;
  text-align: end;
`;
