import { Button } from "@mantine/core";
import type { NextPage } from "next";

const handleClick = () => {
  alert("Hello!");
};

const Home: NextPage = () => {
  return (
    <div>
      <p className="text-xl font-bold">Click!</p>
      <Button onClick={handleClick} className={'bg-red-300 hover:bg-red-500'}>Greet</Button>
    </div>
  );
};

export default Home;
