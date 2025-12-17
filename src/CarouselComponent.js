import Carousel from "react-bootstrap/Carousel";
import Produto1 from "./assets/produto1.jpg";
import Produto2 from "./assets/produto2.jpg";
import Produto3 from "./assets/produto3.jpg";
import Produto4 from "./assets/produto4.jpg"

export default function CarouselComponent() {
  return (
    <Carousel className="mt-4 mb-4 sm-6 md-4 lg-3">
      <Carousel.Item className="sm-6 md-4 lg-3">
        <img
          className="d-block w-100 img-fluid"
          src={Produto1}
          alt="Frango Cremoso e Requeijão Cremoso"
        />
        <Carousel.Caption>
          <h3>Frango Cremoso e Requeijão Cremoso</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Produto2}
          alt="Batata Bolonhesa"
        />

        <Carousel.Caption>
          <h3>Batata Bolonhesa</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Produto3}
          alt="Macarrão Calabresa e Requeijão"
        />
        <Carousel.Caption>
          <h3>Macarrão Calabresa e Requeijão</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={Produto4}
          alt="Macarrão Calabresa e Requeijão"
        />
        <Carousel.Caption>
          <h3>Strogonoff de Frango e Bacon</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
