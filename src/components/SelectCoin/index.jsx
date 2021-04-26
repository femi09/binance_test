import React from "react";
import PropTypes from "prop-types";

const SelectCoin = ({ value, handleChange, name, label, id }) => {
  return (
    <div className="form_group">
      <label htmlFor="coin">{label}</label>
      <select value={value} onChange={handleChange} name={name} id={id}>
        <option value="BTCUSDT">BTC</option>
        <option value="ETHUSDT">ETH</option>
        <option value="LTCUSDT">LTC</option>
      </select>
    </div>
  );
};

SelectCoin.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default SelectCoin;
