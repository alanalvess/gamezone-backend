import { Helmet } from 'react-helmet';

import Console from '../../components/Consoles'

const Consoles = () => {

  return (
    <>
      <Helmet>
        <title>GameZone | Consoles</title>
      </Helmet>
      <Console/>
    </>
  )
}
export default Consoles;