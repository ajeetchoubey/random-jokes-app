import React, { useState } from "react";
import Button from "./Button";

const JokeField = () => {
  const [joke, setJoke] = useState("Click the below button to get a Joke.");

  const handleDataReceived = (data) => {
    setJoke(data);
  }

  return (
    <>
      <div className=" w-5/6 md:w-4/6 lg:w-1/2 text-center text-xl sm:3xl mt-10">
        {joke}
      </div>
      <Button onDataReceived={handleDataReceived} />
    </>
  );
};

export default JokeField;
