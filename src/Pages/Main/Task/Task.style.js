/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 1px 1px rgba(0,0,0,0.1);
  border-radius: 8px;
`;

export const FinishContainer = styled.div`
  width: 20%;
  padding: 10px 24px;
  background-color: #DFF6FF;
  display: flex;
  align-items: center;
  border-radius: 8px 0 8px 8px;
  gap: 25px;
`;

export const PendingContainer = styled.div`
  width: 20%;
  padding: 10px 24px;
  background-color: rgba(255,167,39,0.1);
  display: flex;
  align-items: center;
  border-radius: 8px 0 8px 8px;
  gap: 25px;
`;

export const ContentItemContainer = styled.div`
  display: flex;
  margin: 20px 24px;
  gap: 15px;
  align-items: center;

  width: 10vw;
`;

export const RightContentItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const KeyContainer = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
`;

export const ValueContainer = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-weight: 400;
  
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
`;

export const FinishText = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-weight: 700;
  color: rgba(29,131,212,255);
`;

export const PendingText = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-weight: 700;
  color: #996203;
`;

export const DetailButton = styled.button`
  height: auto;
  width: auto;
  font-family: "Times New Roman", Times, serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
