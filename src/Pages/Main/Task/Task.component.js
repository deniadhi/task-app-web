/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import moment from 'moment';

import {
  Container, FinishContainer, ContentItemContainer,
  RightContentItemContainer, KeyContainer, ValueContainer,
  ContentContainer, FinishText, PendingContainer, PendingText,
  DetailButton, ButtonContainer
} from './Task.style';
import Images from '../../../Assets';
import Lang from '../../../Lang';
import utils from '../../../Utils';

const { deleteTask } = utils;
const {
  tick, person, date, task: taskImage, clock
} = Images;
const {
  taskText, assigneeText, deadlineText,
  finishText, pendingText, buttonText,
  deleteButtonText
} = Lang;

const Task = (props) => {
  const {
    task, finallyCallback, setIsPopupOpen, setEditedTask, setIsSpinnerOpen,
    setOpenSnackbar
  } = props;
  const contents = [
    {
      title: taskText,
      subtitle: task.Detail,
      icon: taskImage
    },
    {
      title: assigneeText,
      subtitle: task.Assignee,
      icon: person
    },
    {
      title: deadlineText,
      subtitle: moment(task.Deadline).format('DD MMM YYYY'),
      icon: date
    }
  ];

  const onDeleteButtonPressed = () => {
    setIsSpinnerOpen(true);
    deleteTask({
      id: task.ID,
      finallyCallback,
      errorCallback: setOpenSnackbar
    });
  };

  const renderContentItem = ({ title, subtitle, icon }, index) => {
    const isFirstItem = index === 0;
    return (
      <ContentItemContainer isFirstItem={isFirstItem}>
        <img
          src={icon}
          alt="task"
          height={30}
          width={30}
        />
        <RightContentItemContainer>
          <KeyContainer>
            {title}
          </KeyContainer>
          <ValueContainer>
            {subtitle}
          </ValueContainer>
        </RightContentItemContainer>
      </ContentItemContainer>
    );
  };

  const renderPendingComponent = () => (
    <PendingContainer>
      <img
        src={clock}
        alt="clock"
        height={20}
        width={20}
      />
      <PendingText>
        {pendingText}
      </PendingText>
    </PendingContainer>
  );

  const renderFinishComponent = () => (
    <FinishContainer>
      <img
        src={tick}
        alt="tick"
        height={20}
        width={20}
      />
      <FinishText>
        {finishText}
      </FinishText>
    </FinishContainer>
  );

  const renderButton = () => (
    <ButtonContainer>
      <DetailButton onClick={() => {
        setEditedTask(task);
        setIsPopupOpen(true);
      }}
      >
        {buttonText}
      </DetailButton>
      <DetailButton onClick={onDeleteButtonPressed}>
        {deleteButtonText}
      </DetailButton>
    </ButtonContainer>
  );

  return (
    <Container>
      {task.Finished ? renderFinishComponent() : renderPendingComponent()}
      <ContentContainer>
        {contents.map(renderContentItem)}
        {renderButton()}
      </ContentContainer>
    </Container>
  );
};

export default Task;
