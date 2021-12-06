import { Helmet } from 'react-helmet';

import Jogo from '../../components/Jogos';

const Jogos = () => {

  return (
    <>
      <Helmet>
        <title>GameZone | Jogos</title>
      </Helmet>
      <Jogo/>
    </>
  )
}
export default Jogos;