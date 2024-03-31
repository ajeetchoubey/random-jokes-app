import axios from "axios";
import { useState } from "react";

const Button = ({ onDataReceived }) => {
  const [apiCallSuccess, setApiCallSuccess] = useState(false);
  const apiCall = async () => {
    try {
      const response = await axios.get(` https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "text/plain",
        },
      });
      onDataReceived(response.data);
      setApiCallSuccess(true);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setApiCallSuccess(false);
    }
  };

  // console.log(selectedValue)

  const handleClick = () => {
    apiCall();
  };

  return (
    <div className=" flex gap-4 mt-10 items-center flex-col sm:flex-row">
      <button
        onClick={handleClick}
        className="bg-blue-400 p-2 rounded hover:bg-blue-500"
      >
        {apiCallSuccess ? "Click to get another joke" : "click to get a joke"}
      </button>
    </div>
  );
};

export default Button;
