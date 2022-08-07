import axios from 'axios';

const baseUrl = 'https://task-app-database.herokuapp.com';
const noop = () => {};

const getAllTask = async (payload) => {
  const {
    successCallback = noop,
    errorCallback = noop,
    finallyCallback = noop
  } = payload;
  try {
    const response = await axios.get(`${baseUrl}`);
    successCallback(response?.data.data);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
};

const getTask = async (payload) => {
  const {
    successCallback = noop,
    errorCallback = noop,
    finallyCallback = noop,
    id
  } = payload;
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
};

const saveTask = async (payload) => {
  const {
    successCallback = noop,
    errorCallback = noop,
    finallyCallback = noop,
    body
  } = payload;
  try {
    const response = await axios.post(`${baseUrl}`, body);
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
};

const updateTask = async (payload) => {
  const {
    successCallback = noop,
    errorCallback = noop,
    finallyCallback = noop,
    body, id
  } = payload;
  try {
    const response = await axios.post(`${baseUrl}/update/${id}`, body);
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
};

const deleteTask = async (payload) => {
  const {
    successCallback = noop,
    errorCallback = noop,
    finallyCallback = noop,
    id
  } = payload;
  try {
    const response = await axios.get(`${baseUrl}/delete/${id}`);
    successCallback(response);
  } catch (error) {
    errorCallback(error);
  } finally {
    finallyCallback();
  }
};

export default {
  getAllTask,
  getTask,
  saveTask,
  updateTask,
  deleteTask
};
