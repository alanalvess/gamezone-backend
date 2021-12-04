// import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import useAxios from '../../hooks/useAxios';


import Produtos from '../Home/components/Produtos';

const Jogos = () => {
// //   const navigate = useNavigate();
//   const user = useAxios(`jogos`);

// //   setTimeout(() => {
// //     navigate('/jogos');
// //   }, 5000);

  return (
    <>
      <Helmet>
        <title>GameZone | Jogos</title>
      </Helmet>
      <Produtos/>
    </>
  )
}
export default Jogos;