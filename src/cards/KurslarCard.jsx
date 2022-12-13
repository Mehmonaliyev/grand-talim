import React from 'react'

function KurslarCard(props) {
    const {rasm, nomi, summa, natija, text} = props
    return (
        <>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch my-2">
                            <div className="course-item">
                                <img src={rasm} className="img-fluid" alt="..." />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>{nomi}</h4>
                                            <p className="price">{summa} ming so'm</p>
                                        </div>
                                        <h3>{natija} </h3>
                                        <p>{text}</p>
                                    </div>
                            </div>
                        </div>
        </>
    )
}

export default KurslarCard
