/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';

import {
  Container,
  EmptyTitle,
  EmptySubtitle
} from './EmptyState.style';
import Images from '../../../Assets';
import Lang from '../../../Lang';

const { empty } = Images;
const { emptyTitleText, emptySubtitleText } = Lang;

const EmptyState = () => (
  <Container>
    <img
      src={empty}
      alt="empty"
      height={150}
      width={150}
    />
    <EmptyTitle>
      {emptyTitleText}
    </EmptyTitle>
    <EmptySubtitle>
      {emptySubtitleText}
    </EmptySubtitle>
  </Container>
);

export default EmptyState;
