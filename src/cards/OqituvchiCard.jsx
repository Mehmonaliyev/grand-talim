import React from 'react'

import { FaTelegram, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';


function OqituvchiCard(props) {
    const { ism, img, fan, tg, inst, fc, desc } = props
    return (
        <>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                    <img src={img} className="img-fluid" alt="" />

                    <div className="member-content">
                        <h4>{ism}</h4>
                        <span>{fan} tili o'qituvhchisi</span>
                        <p>
                            {desc}   </p>
                        <div className="social">
                            <a className='p-2 h3' href={tg} target="_blank"><FaTelegram/></a>
                            <a className='p-2 h3' href={fc} target="_blank"><FaFacebook/></a>
                            <a className='p-2 h3' href={inst} target="_blank"><AiFillInstagram/></a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default OqituvchiCard
