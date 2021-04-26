import axios from "axios";
import { binance_test_api } from "../config.json";

export const fetchCoinValue = async (userData) => {
  try {
    const res = await axios.post(`${binance_test_api}`, userData, {
      headers: {
        "content-type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
