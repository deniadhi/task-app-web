/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { useSnackbar } from 'react-simple-snackbar';

import {
  Header, MainContainer, Title, Subtitle, TasksContainer, SubHeaderContainer, AddButton
} from './Main.styles';
import lang from '../../Lang';
import utils from '../../Utils';
import { Task } from './Task';
import { Spinner } from './Spinner';
import { PopupMenu } from './PopupMenu';
import { EmptyState } from './EmptyState';

const { headerText, subtitleText, addTaskButtonText } = lang;
const { getAllTask } = utils;

const mapTasks = (tasks) => tasks.map(({
  Detail, Assignee, Deadline, Finished, ID
}) => ({
  Detail, Assignee, Deadline, Finished, ID
}));

const Main = () => {
  const [tasks, setTasks] = React.useState([]);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isSpinnerOpen, setIsSpinnerOpen] = React.useState(true);
  const [editedTask, setEditedTask] = React.useState();
  const [openSnackbar] = useSnackbar();

  const setOpenSnackbar = () => {
    const message = 'Error fetching data';
    const duration = 2000;
    openSnackbar(message, duration);
  };

  const fetchTasks = () => {
    getAllTask({
      successCallback: setTasks,
      finallyCallback: () => setIsSpinnerOpen(false),
      errorCallback: setOpenSnackbar
    });
  };

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const renderTask = (task) => (
    <Task
      task={task}
      finallyCallback={fetchTasks}
      setIsPopupOpen={setIsPopupOpen}
      setEditedTask={setEditedTask}
      setIsSpinnerOpen={setIsSpinnerOpen}
      setOpenSnackbar={setOpenSnackbar}
    />
  );

  const renderTasks = () => {
    const mappedTasks = mapTasks(tasks);
    return (
      <TasksContainer>
        {mappedTasks.map(renderTask)}
      </TasksContainer>
    );
  };

  const renderEmptyState = () => (
    <EmptyState />
  );

  const renderBody = () => {
    const shouldRenderEmptyState = !tasks.length && !isSpinnerOpen;

    return shouldRenderEmptyState ? renderEmptyState() : renderTasks();
  };

  return (
    <>
      <PopupMenu
        isOpen={isPopupOpen}
        onCancelPressed={() => setIsPopupOpen(false)}
        finallyCallback={fetchTasks}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        setIsPopupOpen={setIsPopupOpen}
        setIsSpinnerOpen={setIsSpinnerOpen}
        setOpenSnackbar={setOpenSnackbar}
      />
      <Spinner
        isOpen={isSpinnerOpen}
      />
      <Header>
        <Title>
          {headerText}
        </Title>
        <SubHeaderContainer>
          <Subtitle>
            {subtitleText}
          </Subtitle>
          <AddButton
            onClick={() => setIsPopupOpen(true)}
          >
            {addTaskButtonText}
          </AddButton>
        </SubHeaderContainer>
      </Header>
      <MainContainer>
        {renderBody()}
      </MainContainer>
    </>

  );
};

export default Main;
