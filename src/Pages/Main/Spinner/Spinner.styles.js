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
  }

  ${({ popupStyle }) => popupStyle}
`;
