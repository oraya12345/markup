import React from 'react'
import '../../css/Home_Dior.css'
// import Footer from './../layout/Footer';

export default function Home_Dior() {

    return (
        <div className="bg" >
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images/dior/i1.png" />
                        <div class="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>We had such a great time in LA!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/dior/i2.png" />
                        <div class="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/images/dior/i3.png" />
                        <div class="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* <div className="video">
                <div className="video-img">
                            <iframe  src="/images/video.mp4" ></iframe>
                </div>
            </div> */}

            <div className="home">
                <h4>เอกลักษณ์สำหรับเทศกาลฮอลิเดย์นี้​</h4>
                <div className="row">
                    <div class="col p-3"><img src="/images/dior/h1.png" /></div>
                    <div class="col p-3 "><img src="/images/dior/h2.png" /></div>
                    <div class="col p-3 "><img src="/images/dior/h3.png" /></div>
                </div>
            </div>

            <div className="home">
                <h4>ผลิตภัณฑ์รุ่นลิมิเต็ดและผลิตภัณฑ์พิเศษเฉพาะออนไลน์​​</h4>
                <div className="row">
                    <div class="col p-3"><img src="/images/dior/o1.png" /></div>
                    <div class="col p-3 "><img src="/images/dior/o2.png" /></div>
                    <div class="col p-3 "><img src="/images/dior/o3.png" /></div>
                </div>
            </div>

            <div className="home">
                <h4>สินค้าใหม่​​</h4>
                <div className="row">
                    <div class="col p-3"><img src="/images/dior/k1.png" /></div>
                    <div class="col p-3 "><img src="/images/dior/k2.png" /></div>
                    <div class="col p-3 "><img src="/images/dior/k3.png" /></div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}


