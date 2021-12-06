/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';

import Poster from './Poster';
import Jogos from '../../components/Jogos';
import Consoles from '../../components/Consoles';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GameZone | Home</title>
      </Helmet>
      <Poster/>
      <Jogos/>
      <Consoles/>
    </>
  );
}
export default Home;