import axios from "axios";

const BASE_URL = "http://localhost:3001/notes";

const getAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

const getOne = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

const createNew = async (content) => {
  try {
    const newNote = {
      content,
      important: false,
      votes: 0,
    };
    const response = await axios.post(BASE_URL, newNote);
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

const edit = async (id, edittedNote) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, edittedNote);
    return response.data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export default { getAll, getOne, createNew, edit };
