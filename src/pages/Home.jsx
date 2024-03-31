import React from "react";
import Heading from "../components/Heading";
import JokeField from "../components/JokeField";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className=" flex flex-col text-center items-center justify-center w-2/3 h-2/3 m-auto bg-slate-700 shadow-lg mt-48 p-10 text-white rounded">
      <Heading />
      <JokeField />
    </div>
  );
};

export default Home;
