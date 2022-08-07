/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
// @flow

import * as React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { RotatingLines } from 'react-loader-spinner';

import {
  StyledPopup
} from './Spinner.styles';

const Spinner = (props) => {
  const {
    isOpen
  } = props;

  return (
    <StyledPopup
      open={isOpen}
      modal
      closeOnDocumentClick={false}
      closeOnEscape={false}
      lockScroll
    >
      <RotatingLines
        strokeColor="rgba(255,255,255,0.8)"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={isOpen}
      />
    </StyledPopup>
  );
};

export default Spinner;
