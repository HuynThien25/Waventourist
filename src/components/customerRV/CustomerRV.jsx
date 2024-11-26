import "./customerRV.css";
import mtp from "../../assets/img/anhDaiDien/mtp.jpg";
import ht2 from "../../assets/img/anhDaiDien/ht2.jpg";
import heartFill from "../../assets/img/logo/heartFill.png";
import { useEffect, useRef, useState } from "react";

const CustomerRV = () => {
  const slides = [
    {
      id: 1,
      image: mtp,
      name: "Nguyen Thanh Tung",
      content: `Một chuyến đi tuyệt vời! Đặt vé trên waventourist nhanh, tiện lợi. Thực sự mình thấy rất hài lòng khi đặt trên này. Nếu có dịp mình vẫn sẽ lựa chọn waventourist.`,
      danhGia: heartFill,
      diemDanhGia: "9.0/10",
      textDanhGia: "Đánh giá cách đây 7 ngày",
    },
    {
      id: 2,
      image: ht2,
      name: "Tran Minh Hieu",
      content: "Đặt tour trên waventourist được hỗ trợ rất nhanh và nhiệt tình, giá tour hợp lý và mình nhận được rất nhiều ưu đãi.",
      danhGia: heartFill,
      diemDanhGia: "9.0/10",
      textDanhGia: "Đánh giá cách đây 10 ngày",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  //Sử dụng useEffect để tạo hiệu ứng tự động chuyển slide mỗi 10 giây.
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(autoScroll); 
  }, [slides.length]);
  //clearInterval được gọi khi component bị hủy, giúp ngăn ngừa rò rỉ bộ nhớ.

  //goNext: tăng chỉ số currentIndex lên một giá trị để hiển thị slide tiếp theo, và nếu đang ở slide cuối cùng thì trở lại slide đầu tiên.
  const goNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const goPrev = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  //goPrev: giảm chỉ số currentIndex để hiển thị slide trước, và nếu đang ở slide đầu tiên thì trở lại slide cuối cùng.
  
  //Mỗi khi currentIndex thay đổi, sliderRef sẽ cập nhật vị trí transform của thẻ div chứa slider, 
  //giúp chuyển đổi vị trí hiển thị của slide.
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="customerRVContainer">
      
      <button className="prevBtn2" onClick={goPrev}>{"‹"}</button>
      
      <div className="sliderWrapper">
        <div className="sliderCustomer" ref={sliderRef}>
          {slides.map((slide) => (
            <div className="sliderItem" key={slide.id}>
              <img className="imgSlider2" src={slide.image} alt={`Slider ${slide.id}`} />
              <h1 className="name">{slide.name}</h1>
              <div className="grCustomer">
                <img className="iconDanhGia" alt="" src={slide.danhGia} />
                <div className="diemDanhGia">{slide.diemDanhGia}</div>
                <div className="textDanhGia">{slide.textDanhGia}</div>
              </div>
              <p className="subRV">{slide.content}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="nextBtn2" onClick={goNext}>{"›"}</button>
    </div>
  );
};

export default CustomerRV;
