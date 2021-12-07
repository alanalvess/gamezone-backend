/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet";
import axios from "axios";

import Poster from "./Poster";
import Jogos from "../../components/Jogos";
import Consoles from "../../components/Consoles";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axios
      .get(
        "https://gamezone-env.eba-nm6433md.us-east-1.elasticbeanstalk.com/products"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Helmet>
        <title>GameZone | Home</title>
      </Helmet>
      <Poster />
      <Jogos />
      <Consoles />
    </>
  );
};
export default Home;
