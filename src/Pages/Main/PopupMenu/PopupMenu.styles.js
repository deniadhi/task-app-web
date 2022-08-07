/* eslint-disable import/prefer-default-export */
import Popup from 'reactjs-popup';
import styled from 'styled-components';

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.4);
  }

  &-content {
    max-width: 100%;
    border-radius: 16px;
    background-color: white;
  }

  ${({ popupStyle }) => popupStyle}
`;

export const ContentContainer = styled.div`
  padding: 25px 50px 50px 50px;
`;

export const Title = styled.h2`
  font-family: "Times New Roman", Times, serif;
`;

export const InputForm = styled.input`
  font-family: "Times New Roman", Times, serif;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const InputAreaForm = styled.textarea`
  font-family: "Times New Roman", Times, serif;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const KeyForm = styled.div`
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 5px;
`;

export const ButtonForm = styled.button`
  height: auto;
  width: 45%;
  margin-top: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormFieldContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between
`;

export const RadioContainer = styled.div`
  display: flex;
  max-height: 50px;
`;
