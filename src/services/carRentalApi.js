import axios from 'axios';

axios.defaults.baseURL = 'https://652f85410b8d8ddac0b299c0.mockapi.io';

export const fetchCars = async (page, perPage) => {
  try {
    const response = await axios.get(`/adverts?page=${page}&limit=${perPage}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllCars = async () => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

