import React from 'react'
import OqituvchiCard from '../cards/OqituvchiCard';
import '../css/oqituvchilar.css'
import r1 from '../img/person.jpg'
import r2 from '../img/person.jpg'
import r3 from '../img/person.jpg'


function Oqituvchilar() {
    const person = [
        {id:1, img: r1, ism: "User Name", desc:"Aqilli gap.....", fan:'Ingliz', tg:'', inst:'', fc:''},
        {id:1, img: r2, ism: "User Name", desc:"Aqilli gap.....", fan:'Rus', tg:'', inst:'', fc:''},
        {id:1, img: r3, ism: "User Name", desc:"Aqilli gap.....", fan:'Arab', tg:'', inst:'', fc:''},
    ]
    return (
        <>
            <div id="trainers" className="trainers">
                <div className="container" data-aos="fade-up">
                    <h4 className='color'>O'qituvchilar</h4>
                    <div className="row" data-aos="zoom-in" data-aos-delay="100">
                        {
                            person?.length ? person.map((val)=>{
                                return(
                                    <OqituvchiCard
                                    key={val.id}
                                    img={val.img}
                                     ism={val.ism}
                                     desc={val.desc}
                                     fan={val.fan}
                                     tg={val.tel}
                                     inst={val.inst}
                                     fc={val.fc}
                                    />

                                )
                            }): 'Loading'
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Oqituvchilar
