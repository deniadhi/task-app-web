/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
// @flow

import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import {
  StyledPopup, ContentContainer, Title, InputForm, KeyForm,
  InputAreaForm, ButtonForm, FormContainer, FormFieldContainer,
  ButtonContainer, RadioContainer
} from './PopupMenu.styles';
import utils from '../../../Utils';

const { saveTask, updateTask } = utils;
const MAX_LENGTH = 30;

const PopupMenu = (props) => {
  const {
    isOpen,
    onCancelPressed,
    finallyCallback,
    editedTask,
    setEditedTask,
    setIsPopupOpen,
    setIsSpinnerOpen,
    setOpenSnackbar
  } = props;
  const now = new Date();

  const [detail, setDetail] = React.useState('');
  const [assignee, setAssignee] = React.useState('');
  const [deadline, setDeadline] = React.useState(now);
  const [finished, setFinished] = React.useState(false);

  React.useEffect(() => {
    const initialDetail = editedTask?.Detail || '';
    const initialAssignee = editedTask?.Assignee || '';
    const initialDeadline = editedTask?.Deadline;
    const initialFinished = editedTask?.Finished || false;
    const convertedDeadline = initialDeadline ? new Date(initialDeadline) : now;

    setDetail(initialDetail);
    setAssignee(initialAssignee);
    setDeadline(convertedDeadline);
    setFinished(initialFinished);
  }, [editedTask]);

  const handleCancelButton = () => {
    setDetail('');
    setAssignee('');
    setDeadline();
    setFinished(false);
    setEditedTask();
    onCancelPressed();
  };

  const saveTaskCallback = () => {
    setIsSpinnerOpen(true);
    const finalDeadline = deadline || new Date();
    const body = {
      Detail: detail,
      Assignee: assignee,
      Deadline: moment(finalDeadline).format('YYYY-MM-DD'),
      Finished: finished
    };

    setDetail('');
    setAssignee('');
    setDeadline();
    setEditedTask();
    setFinished(false);
    setIsPopupOpen(false);
    if (editedTask) {
      updateTask({
        body,
        finallyCallback,
        id: editedTask.ID,
        errorCallback: setOpenSnackbar
      });
      return;
    }
    saveTask({
      body,
      finallyCallback,
      errorCallback: setOpenSnackbar
    });
  };

  return (
    <StyledPopup
      open={isOpen}
      modal
      closeOnDocumentClick={false}
      closeOnEscape={false}
      lockScroll
    >
      <ContentContainer>
        <Title>
          Silakan isi data berikut
        </Title>
        <FormContainer>
          <FormFieldContainer>
            <KeyForm>Detail Tugas</KeyForm>
            <InputAreaForm
              onChange={(input) => {
                const text = input.target.value;
                if (text.length > MAX_LENGTH) {
                  return;
                }
                setDetail(text);
              }}
              value={detail}
            />
          </FormFieldContainer>
          <FormFieldContainer>
            <KeyForm>Assignee</KeyForm>
            <InputForm
              onChange={(input) => {
                const text = input.target.value;
                if (text.length > MAX_LENGTH) {
                  return;
                }
                setAssignee(text);
              }}
              value={assignee}
            />
          </FormFieldContainer>
          <FormFieldContainer>
            <KeyForm>Deadline</KeyForm>
            <DatePicker
              selected={deadline}
              onSelect={setDeadline}
            />
          </FormFieldContainer>
          <FormFieldContainer>
            <RadioContainer>
              <input
                type="radio"
                name="finish"
                onChange={() => setFinished(false)}
                checked={!finished}
              />
              <p>Pending</p>
              <input
                type="radio"
                name="finish"
                onChange={() => setFinished(true)}
                checked={finished}
              />
              <p>Finish</p>
            </RadioContainer>
          </FormFieldContainer>
          <ButtonContainer>
            <ButtonForm
              onClick={handleCancelButton}
            >
              Batal
            </ButtonForm>
            <ButtonForm
              disabled={!detail || !assignee}
              onClick={saveTaskCallback}
            >
              Submit
            </ButtonForm>
          </ButtonContainer>

        </FormContainer>
      </ContentContainer>
    </StyledPopup>
  );
};

export default PopupMenu;
