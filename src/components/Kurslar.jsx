import React from 'react'
import KurslarCard from '../cards/KurslarCard'
import '../css/kurslar.css'
import i from '../img/i.jpg'
import a from '../img/a.jpg'
import r from '../img/r.jpg'

function Kurslar() {

    const kurs = [
        { id: 1, rasm:i, nomi: 'Ingliz tili', summa: 250, natija: 'IELTS, C2, C1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam magnam, ipsam sequi ipsa debitis cum suscipi.' },
        { id: 2, rasm:r, nomi: 'Rus tili', summa: 250, natija: 'IELTS, C2, C1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam magnam, ipsam sequi ipsa debitis cum suscipi.' },
        { id: 3, rasm:a, nomi: 'Arab tili', summa: 300, natija: 'IELTS, C2, C1', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam magnam, ipsam sequi ipsa debitis cum suscipi.' },
    ]

    return (
        <>
            <div id="popular-courses" className="courses py-5  ">
                <div className="container" data-aos="fade-up">

                    <div className="div-title">
                        <h2 className='color'>Kurslar</h2>
                        <p>MASHHUR KURSLAR</p>
                    </div>

                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                        {
                            kurs?.length ? kurs.map((val) => 
                            <KurslarCard
                                key={val.id}
                                rasm={val.rasm}
                                nomi={val.nomi}
                                natija={val.natija}
                                summa={val.summa}
                                text={val.text}
                            />
                            ) : 'Loading...'
                      }
                    </div>

                </div>
            </div>

        </>
    )
}

export default Kurslar
