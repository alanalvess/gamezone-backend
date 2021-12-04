/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';

import Poster from './components/Poster';
import Produtos from './components/Produtos';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GameZone | Home</title>
      </Helmet>
      <Poster/>
      <Produtos/>
    </>
  );
}
export default Home;