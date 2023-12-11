

import React from 'react'

const PageTop = ({ pageName,
    BoxOneIcon, BoxOneTitle, BoxOneValue,
    BoxTwoIcon, BoxTwoTitle, BoxTwoValue,
    BoxThreeIcon, BoxThreeTitle, BoxThreeValue,
    subtitle
}) => {
  return (
    <div className="page-top">
        <div className="title-box">
            <h2 className="title">{pageName}</h2>
            <p>{subtitle ? subtitle : 'total sum progress'}</p>
        </div>
        <div className="info-box one">
            <div className="icon-container">
                <BoxOneIcon />
            </div>
            <p className="box-title">{BoxOneTitle}</p>
            <h4 className="box-value">{BoxOneValue}</h4>
        </div>
        <div className="info-box two">
            <div className="icon-container">
                <BoxTwoIcon />
            </div>
            <p className="box-title">{BoxTwoTitle}</p>
            <h4 className="box-value">{BoxTwoValue}</h4>
        </div>
        <div className="info-box three">
            <div className="icon-container">
                <BoxThreeIcon />
            </div>
            <p className="box-title">{BoxThreeTitle}</p>
            <h4 className="box-value">{BoxThreeValue}</h4>
        </div>
    </div>
  )
}

export default PageTop
