/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import Images from '../../Assets';

const { banner } = Images;

export const Header = styled.div`
  background-image: url(${banner});
  height: 150px;
  padding: 0 20vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  color: white;
`;

export const Subtitle = styled.h3`
  color: white;
`;

export const MainContainer = styled.div`
  padding: 0 20vw;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0;
`;

export const SubHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  height: auto;
  width: auto;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  padding: 10px 20px;
`;
