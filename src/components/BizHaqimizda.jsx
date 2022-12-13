import React from 'react'
import video from '../video/video.mp4'
import '../css/bizHaqimizda.css'
function BizHaqimizda() {
    return (
        <div id="about" className="about pt-5 my-3">
            <div className="container" data-aos="fade-up">

                <div className="row">
                <h3 className='color'>Biz haqimizda</h3>
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <video controls autoPlay muted>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                       
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul className='logo2'>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laboriosam tempora adipisci aut nostrum a.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laboriosam tempora adipisci aut nostrum a.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laboriosam tempora adipisci aut nostrum a.</li>
                        </ul>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, reprehenderit! Laboriosam rem iste tempora? Nobis!
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default BizHaqimizda
