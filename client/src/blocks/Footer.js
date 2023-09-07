import React from 'react'

const Footer = ({ currentIndex, toBack, toNext, submit }) => {


  return (
    <div className="footer">
      {currentIndex === 0 ? (
        <div className="none">
          <div className="iconclose"></div>
        </div>
      ) :
      (
        <button className="back" onClick={toBack}>
          <div className="iconclose">
            <img src="/icons/back_arrow.png" alt="" />
          </div>
        </button>
      )}
      {currentIndex !== 3 ? (
        <button className="next" onClick={toNext}>
          <div className="iconarrow">
            <img src="/icons/nav_arrow.png" alt="" />
          </div>
        </button>
      ) : 
      (
        <button className="next" type="button" onClick={submit}>
          <div className="iconarrow">
            <img src="/icons/iconcheck.svg" alt="" />
          </div>
        </button>
      )}
    </div>
  )
}

export default Footer
