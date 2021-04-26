import React, { useState } from "react";
import Input from "../../components/Input";
import SelectCoin from "../../components/SelectCoin";
import { fetchCoinValue } from "../../api";
import { toast } from "react-toastify";
import "./index.css";

const BinanceForm = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    price: "",
    coin: "BTCUSDT",
    condition: "",
  });

  const handleChange = ({ target: input }) => {
    setUserInput({ ...userInput, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data } = await fetchCoinValue(userInput);
      data.error ? toast.error(data.error) : toast.info(data.msg);

      setLoading(false);
    } catch (error) {
      toast.error(error.toString());
      setLoading(false);
    }
  };
  return (
    <div className="binance_form">
      <h1>Binance Test Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <Input
          name="email"
          id="email"
          label="Email"
          placeholder="test@gmail.com"
          value={userInput.email}
          type="text"
          handleChange={handleChange}
        />
        <Input
          name="price"
          id="price"
          label="Price"
          placeholder="0.00"
          value={userInput.price}
          type="text"
          handleChange={handleChange}
        />

        <SelectCoin
          name="coin"
          id="coin"
          label="Coin"
          handleChange={handleChange}
          value={userInput.coin}
        />

        <Input
          name="condition"
          id="condition"
          label="Condition"
          value={userInput.condition}
          type="text"
          handleChange={handleChange}
        />
        {loading && <div className="loading">Loading...</div>}
        <div className="form_button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BinanceForm;
