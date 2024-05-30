
import 'swiper/swiper-bundle.min.css';
import './App.css'
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import { useEffect, useRef } from 'react';

function App() {

  const slideContent = useRef(null);

  const sliderPagination = useRef(null);

  const sliderNextElement = useRef(null);

  const sliderPrevElement = useRef(null);


  useEffect(() => {
    new Swiper(slideContent.current, {
      modules: [Navigation, Pagination, Scrollbar],
      slidesPerView: 3,
      spaceBetween: 25,
      centeredSlides: true,
      loop: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: sliderPagination.current,
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: sliderNextElement.current,
        prevEl: sliderPrevElement.current,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  // const swiper = 


  return (
    <>
      <div className="slide-container swiper">
        <div className="intro">
          <img src="/kspxFuslACBP.png" alt="" className="close" />
          <h1>Mis entradas</h1>
        </div>
        <div className="slide-content" ref={slideContent}>
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 6</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour <br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 7</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour<br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 8</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour<br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 6</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour <br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 7</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour<br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 8</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour<br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>

            {/* ////////////////// */}
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 6</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour <br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 7</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour<br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
            <div className="card swiper-slide">
              <div className="header-content">
                <h4>Billetes estándar</h4>
              </div>
              <div className="seat-content">
                <div className="row">
                  <span className="seat">SEC</span>
                  <span className="seat">Fila</span>
                  <span className="seat">Asiento</span>
                </div>
                <div className="row1">
                  <span className="seat"> 104</span>
                  <span className="seat"> 4</span>
                  <span className="seat"> 8</span>
                </div>
              </div>
              <div className="image-content">
                <div className="card-img">
                  <img src="/woman.jpeg" alt="nick" style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "fill"
                  }} />
                  <div className="overlay"></div>
                  <div className="service-desc">
                    <h3>The Eras Tour<br /></h3>

                    <p>
                      Thu, Miè, 30 may 2024, 20:00
Santiago Bernabéu Stadium , Madrid.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h2 className="name">sección 104</h2>
                <button className="btn-apple">
                  <img src="/ZDxqK9zTaxuz.png" alt="nick" className="apple" />
                  <span>Add to Apple Wallet</span>
                </button>
                <div className="detail">
                  <a href="">Mostrar código de barras</a>
                  <a href="">Detalles del billete</a>
                </div>
              </div>
              <div className="footer-content">
                <img src="/euZet6wt4nPl.png" alt="" className="love" />
                <p><i>ticketmaster.verified</i></p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next swiper-navBtn" ref={sliderNextElement}></div>
        <div className="swiper-button-prev swiper-navBtn" ref={sliderPrevElement}></div>
        <div className="swiper-pagination swiper-navBtn1" ref={sliderPagination}></div>

        <div className="banner-btn">
          <a href=""> <span></span>Transferir</a>
          <a href=""> <span></span>Vender</a>
        </div>
      </div>
    </>
  )
}

export default App
