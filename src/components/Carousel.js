import "../styles/carousel.scss";
import { useEffect, useState } from "react";

let carouselInterval = null;

const initialChildren = [
  {
    img:
      "https://marshesshopping.com/app/uploads/2018/05/11191-Website-banner-GENERIC-1.jpg",
    caption: "PROMOÇÃO DE VERÃO",
    text: "Conheça os nossos produtos incríveis feitos para você!",
  },
  {
    img: "https://yonnemart.com/images/promo/2/mens_wear.jpg",
    caption: "APROVEITE A BLACK FRIDAY",
    text:
      "Aqui na Store+ nós fazemos de tudo para que você possa adquirir muitos produtos na Black Friday!",
  },
];

const Carousel = () => {
  const [children, setChildren] = useState(initialChildren);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      carouselInterval = setInterval(() => {
        setIndex((i) => (i === children.length - 1 ? 0 : i + 1));
      }, 15000);
    };

    fetchData();
    return () => {
      clearInterval(carouselInterval);
      carouselInterval = null;
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className={`carousel-item`}>
        <div
          className="img"
          style={{ backgroundImage: `url(${children[index].img})` }}
        >
          <div className="project-text">
            <h3>{children[index].caption}</h3>
            <p>{children[index].text}</p>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: 15 }}
        className="indexes flex j-center align-center"
      >
        {children.map((c, i) => {
          return (
            <div
              key={i}
              className={`index ${i === index ? "i-active" : ""}`}
              onClick={() => {
                setIndex(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
