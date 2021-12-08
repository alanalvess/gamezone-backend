/* eslint-disable jsx-a11y/anchor-is-valid */
import { Helmet } from 'react-helmet';
import { Card, Col, Row } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import api from '../../services/api'
import { useEffect } from 'react';

// import Jogo from '../../components/Jogos';

// import CallOfDuty from "../../img/games/ps4-call-of-duty.png";
// import GodOfWar from "../../img/games/ps4-god-of-war.png";
// import Gta from "../../img/games/ps4-gta5.png";
// import Injustice from "../../img/games/ps4-injustice.png";
// import Sekiro from "../../img/games/ps4-sekiro.jpg";
// import SpidermanPs4 from "../../img/games/ps4-spider-man.png";
import AssassinsCreed from "../../img/games/ps5-assassins-creed.jpg";
import Fortinite from "../../img/games/ps5-fortnite.jpg";
import SpaidermanPs5 from "../../img/games/ps5-spider-man.png";

const Jogos = () => {

  useEffect (() => {
    const request = async () => {
      const response = await api.get("/products")
      console.log(response);
    }
    request();
  }, [])
  const produtos = useAxios ("/products");
  function handleNavigateToGameDetail(e) {
    e.preventDefault();
    window.location.href = "/jogo-detalhe";
  }

  return (
    <>
      <Helmet>
        <title>GameZone | Jogos</title>
      </Helmet>
      <Row className="g-4 d-flex" bg="dark">
        <Col className="d-flex">
          <Card>
            <Card.Body>
              <section className="container section-product">
                <article className="container-product">
                  <div className="card">
                    <img src={SpaidermanPs5} alt="" />
                    <div className="box-info-product">
                      <strong>Call of duty</strong>
                      <span>R$ 120,00</span>
                      <a className="button-buy-product" href="">
                        <button onClick={handleNavigateToGameDetail}>
                          Comprar
                        </button>
                      </a>
                    </div>
                  </div>
                </article>
              </section>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <section className="container section-product">
                <article className="container-product">
                  <div className="card">
                    <img src={Fortinite} alt="" />
                    <div className="box-info-product">
                      <strong>GTA 5</strong>
                      <span>R$ 180,00</span>
                      <a className="button-buy-product" href="">
                        <button onClick={handleNavigateToGameDetail}>
                          Comprar
                        </button>
                      </a>
                    </div>
                  </div>
                </article>
              </section>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <section className="container section-product">
                <article className="container-product">
                  <div className="card">
                    <img src={AssassinsCreed} alt="" />
                    <div className="box-info-product">
                      <strong>Injustice</strong>
                      <span>R$ 100,00</span>
                      <a className="button-buy-product" href="">
                        <button onClick={handleNavigateToGameDetail}>
                          Comprar
                        </button>
                      </a>
                    </div>
                  </div>
                </article>
              </section>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
export default Jogos;