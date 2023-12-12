import axios from "axios";

const ip = process.env.BACK_HOST;
const porta = process.env.BACK_PORT;
const caminho = process.env.BACK_PATH;

export const api = () =>
  axios.create({
    baseURL: `${ip}${porta}${caminho}`,
    timeout: 1000,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
