import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./khuyenMai.css";
import km1 from "../../assets/img/sliderQC/km1.jpg";
import km2 from "../../assets/img/sliderQC/km2.jpg";
import km3 from "../../assets/img/sliderQC/km3.jpg";
import km4 from "../../assets/img/sliderQC/km4.jpg";
import km5 from "../../assets/img/sliderQC/km5.jpg";
import km6 from "../../assets/img/sliderQC/km6.jpg";
import km8 from "../../assets/img/sliderQC/km8.jpg";
import km9 from "../../assets/img/sliderQC/km9.jpg";
import km10 from "../../assets/img/sliderQC/km10.jpg";
import km11 from "../../assets/img/sliderQC/km11.jpg";
import km12 from "../../assets/img/sliderQC/km12.jpg";
import km13 from "../../assets/img/sliderQC/km13.jpg";
import km14 from "../../assets/img/sliderQC/km14.jpg";
import campodia from "../../assets/img/sliderQC/campodia.png";
const KhuyenMai = () => {
  const images = useMemo(
    () => [
      km1, km2, km3, km4, km5, km6, km8, km9, km10, km12, km14,km1, km2, km3, km4, km5, km6, km8, km9, km12, km14,km4, km5, km6, km8, km9, km12, km14,
    ],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null) ;
  
  useEffect(() => {
    const autoScroll =setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex + 1)% images.length);
    },3000);
    return ()=> clearInterval(autoScroll);
    },[images.length]); 

  const handlNextClick = useCallback(()=>{
    setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length);
  },[images.length]);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  // Xử lý khi chuyển slide xong, sau 0.5s sẽ ngắt hiệu ứng chuyển động
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform= `translateX(-${currentIndex * 25}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="khuyenMai">
      <div className="imgKM">
        <img className="img" src={campodia} alt="Campodia" />
        <div className="grKMColumn">
        <img className="imgKMcolumn" src={km13} alt="KM7" />
        <img className="imgKMcolumn" src={km11} alt="KM7" />
        </div>
      </div>
      <div className="sliderKMContainer">
      <button className="prevBtn" onClick={handlePrevClick}>{"‹"}</button>

        <div className="sliderKM" ref={sliderRef}>
          {images.map((img, index) => (
            <img
              key={index}
              className="imgSlider"
              src={img}
              alt={`Slider${index + 1}`}
            />
          ))}
        </div>
        
        <button className="nextBtn" onClick={handlNextClick}>{"›"}</button>
      </div>
      <div className="xemChiTiet">
      <button className="xemChiTietBtn">Xem chi tiết ►</button>
      </div>
    </div>
  );
};

export default KhuyenMai;



