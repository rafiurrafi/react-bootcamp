import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/bannerContainer.scss";
import React, { Component } from "react";
import Slider from "react-slick";

import offer_1 from "../assets/offer/offer-1.png";
import offer_2 from "../assets/offer/offer-2.png";
import offer_3 from "../assets/offer/offer-3.png";
import offer_4 from "../assets/offer/offer-4.png";
import offer_5 from "../assets/offer/offer-5.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      centerPadding: 300,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="section-banner">
        <div className="container">
          <Slider {...settings}>
            <div>
              <img className="offer__img" src={offer_1} alt="offer-1" />
            </div>
            <div>
              <img className="offer__img" src={offer_2} alt="offer-1" />
            </div>
            <div>
              <img className="offer__img" src={offer_3} alt="offer-1" />
            </div>
            <div>
              <img className="offer__img" src={offer_4} alt="offer-4" />
            </div>
            <div>
              <img className="offer__img" src={offer_5} alt="offer-4" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
// const BannerContainer = (props) => {
//   var settings = {
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="section-banner">
//       <div className="container">
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default BannerContainer;
