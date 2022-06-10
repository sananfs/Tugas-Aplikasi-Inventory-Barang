import React, { Component } from "react";
import { Row, Col, Container, Figure } from "react-bootstrap";
import "../Css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css";

export default class HomePage extends Component {
  render() {
    AOS.init({ once: true, duration: 1500 });
    return (
      <div>
        <Row>
          <Col fluid className="jumbotron">
            <h1 data-aos="fade-up">
              Pena <span>elegan</span> yang telah<br></br> mengukir <span>masa depan</span>
            </h1>
          </Col>
        </Row>
        <Container className="pb-5">
          <Row data-aos="zoom-out" data-aos-duration="700" className="justify-content-center">
            <Col xs={10} sm={10} md={10} lg={10} className="hhc">
              <Row>
                <Col lg={true}>
                  <img src={require("../Assets/img/medal.png")} className="float-left" width={100} />
                  <h4>High Quality</h4>
                  <p>Terbuat dari vibranium yang sudah diruqiyah RT setempat</p>
                </Col>
                <Col lg={true}>
                  <img src={require("../Assets/img/shield.png")} className="float-left" width={100} />
                  <h4>High Durability</h4>
                  <p>Satu perguruan dengan Nokia yang teruji kekuatannya</p>
                </Col>
                <Col lg={true}>
                  <img src={require("../Assets/img/equalizer.png")} className="float-left" />
                  <h4>Custom Your Own</h4>
                  <p>Bisa untuk orang yang sangat ribet seperti anda</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Row className="pabrik py-5 my-5">
          <Col xs={12} md={6} lg={6} className="px-5">
            <img data-aos="fade-right" data-aos-duration="1000" src={require("../Assets/img/pabrik.png")} className="img-fluid gbrpabrik" width={690} height={799} />
          </Col>
          <Col xs={12} md={6} lg={6} className="px-5">
            <h3 data-aos="fade-left" data-aos-duration="2500" className="pt-5">
              Dibuat <span>khusus</span> menggunakan bahan dengan mutu <span>berkualitas</span>
            </h3>
            <p data-aos="fade-up" data-aos-duration="1500" className="pt-2">
              Bekerja dengan penuh ke telitian yang tingkat ke detailan yang sangat presisi agar mampu menciptakan barang terbaik untuk anda
            </p>
          </Col>
        </Row>

        <Swiper
          className="swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={-200}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide lg={6} xs={12} sm={12} md={12}>
            <div className="testimoni">
              <div className="layer"></div>
              <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                  <h5>" Ga pernah nyangka ada pena yang nyaman digenggam, rekomen banget guys buat coblos pemilu. "</h5>
                </Col>
              </Row>
            </div>
            <Row className="figure justify-content-center">
              <Col className="d-flex justify-content-center text-center" xs={6} sm={6} md={6} lg={6}>
                <Figure>
                  <Figure.Image className="mt-3 rounded-circle" width={90} height={99} alt="" src={require("../Assets/img/10.jpg")} />
                  <Figure.Caption>
                    <h5>Bejo</h5>
                    <p>Lek Brem</p>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide lg={6} xs={12} sm={12} md={12}>
            <div className="testimoni">
              <div className="layer"></div>
              <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                  <h5>"Designnya keren laki banget !! Jadi ga rebutan pulpen sama istri. "</h5>
                  <br></br>
                  <br></br>
                </Col>
              </Row>
            </div>
            <Row className="figure justify-content-center">
              <Col className="d-flex justify-content-center text-center" xs={6} sm={6} md={6} lg={6}>
                <Figure>
                  <Figure.Image className="mt-3 rounded-circle" width={90} height={99} alt="" src={require("../Assets/img/11.jpg")} />
                  <Figure.Caption>
                    <h5>Cak Bron</h5>
                    <p>Kades</p>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide lg={6} xs={12} sm={12} md={12}>
            <div className="testimoni">
              <div className="layer"></div>
              <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                  <h5>" Bisa buat ganjal pintu guys, kalo pake merk sebelah belum ada 1 bulan udah ancur. "</h5>
                  <br></br>
                </Col>
              </Row>
            </div>
            <Row className="figure justify-content-center">
              <Col className="d-flex justify-content-center text-center" xs={6} sm={6} md={6} lg={6}>
                <Figure>
                  <Figure.Image className="mt-3 rounded-circle" width={90} height={99} alt="" src={require("../Assets/img/12.jpg")} />
                  <Figure.Caption>
                    <h5>Om Pong</h5>
                    <p>Parkir Pesawat</p>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide lg={6} xs={12} sm={12} md={12}>
            <div className="testimoni">
              <div className="layer"></div>
              <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                  <h5>" Ini teh pulpen gitu? kok bisa nyetrum kan kaget yak?. "</h5>
                  <br></br>
                  <br></br>
                </Col>
              </Row>
            </div>
            <Row className="figure justify-content-center">
              <Col className="d-flex justify-content-center text-center" xs={6} sm={6} md={6} lg={6}>
                <Figure>
                  <Figure.Image className="mt-3 rounded-circle" width={90} height={99} alt="" src={require("../Assets/img/13.jpg")} />
                  <Figure.Caption>
                    <h5>Papilaya</h5>
                    <p>Kurir Pak Soleh</p>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide lg={6} xs={12} sm={12} md={12}>
            <div className="testimoni">
              <div className="layer"></div>
              <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                  <h5>" Ini loh baru inovasi !! pulpen ada senternya !!. "</h5>
                  <br></br>
                  <br></br>
                </Col>
              </Row>
            </div>
            <Row className="figure justify-content-center">
              <Col className="d-flex justify-content-center text-center" xs={6} sm={6} md={6} lg={6}>
                <Figure>
                  <Figure.Image className="mt-3 rounded-circle" width={90} height={99} alt="" src={require("../Assets/img/10.jpg")} />
                  <Figure.Caption>
                    <h5>Kang Kung</h5>
                    <p>Leker Keliling</p>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide lg={6} xs={12} sm={12} md={12}>
            <div className="testimoni">
              <div className="layer"></div>
              <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                  <h5>"Pulpen sejuta kenangan, tintanya manis banyak rasa bagus deh pokoknya. "</h5>
                  <br></br>
                </Col>
              </Row>
            </div>
            <Row className="figure justify-content-center">
              <Col className="d-flex justify-content-center text-center" xs={6} sm={6} md={6} lg={6}>
                <Figure>
                  <Figure.Image className="mt-3 rounded-circle" width={90} height={99} alt="" src={require("../Assets/img/11.jpg")} />
                  <Figure.Caption>
                    <h5>Mang Kal</h5>
                    <p>Tukang Tikung</p>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </SwiperSlide>
          <SwiperSlide lg={6} xs={12} sm={12} md={12}>
            <div className="testimoni">
              <div className="layer"></div>
              <Row className="justify-content-center">
                <Col lg={6} xs={12} sm={12} md={12}>
                  <h5>" Emak liat aku masuk tipi, eh masuk web mak !! "</h5>
                  <br></br>
                  <br></br>
                </Col>
              </Row>
            </div>
            <Row className="figure justify-content-center">
              <Col className="d-flex justify-content-center text-center" xs={6} sm={6} md={6} lg={6}>
                <Figure>
                  <Figure.Image className="mt-3 rounded-circle" width={90} height={99} alt="" src={require("../Assets/img/12.jpg")} />
                  <Figure.Caption>
                    <h5>Pak Kir</h5>
                    <p>Sales Swallow</p>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </SwiperSlide>
        </Swiper>
        <Row className="justify-content-end contact">
          <Col className="text-center" xs={2}>
            <h5>Connect with Us</h5>
            <Row>
              <Col>
                <a href="#">
                  <Figure.Image className="rounded-circle" width={40} height={49} alt="" src={require("../Assets/img/facebook.png")} />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <Figure.Image className="rounded-circle" width={40} height={49} alt="" src={require("../Assets/img/instagram.png")} />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <Figure.Image className="rounded-circle" width={40} height={49} alt="" src={require("../Assets/img/twitter.png")} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-end address">
          <Col xs={6} className="text-end">
            <a
              href="https://www.google.com/maps/dir/-6.9161237,107.6570478/Jl.+Pelajar+Pejuang+45+No.65,+Lkr.+Sel.,+Kec.+Lengkong,+Kota+Bandung,+Jawa+Barat+40263/@-6.9217257,107.62862,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e68e87f3af10001:0x309f92c8425837e3!2m2!1d107.6267484!2d-6.9294252"
              target="_blank"
            >
              <h6>Jl. Pelajar Pejuang 45 No.65,Lkr. Sel.,Lengkong,Kota Bandung</h6>
            </a>
          </Col>
        </Row>
        <Row className="footer">
          <Col className="copyright text-center">
            <b>
              <p>
                &copy; Copyright 2022 by <a href="#homepage">TaskPEN</a>
              </p>
            </b>
          </Col>
        </Row>

        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#813919"
            fill-opacity="1"
            d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,240C672,213,768,171,864,144C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }
}
