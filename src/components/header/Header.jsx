import "./header.css";
import { useState, useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import japan2 from "../../assets/img/hinhAnh/japan2.jpg";
import korea from "../../assets/img/hinhAnh/korea.jpg";
import thailand from "../../assets/img/hinhAnh/thailand.jpg";
import singapore from "../../assets/img/hinhAnh/singapore.jpg";
import china4 from "../../assets/img/hinhAnh/china4.jpg";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    { image: thailand, headerDesc: "KHÁM PHÁ THÁI LAN", headerTitle: "BANGKOK - PATTAYA - PHUKET", headerBtn1: "XEM THÊM" },
    { image: korea, headerDesc: "KHÁM PHÁ HÀN QUỐC", headerTitle: "SEOUL - ĐẢO JEJU - BUSAN", headerBtn1: "XEM THÊM" },
    { image: japan2, headerDesc: "KHÁM PHÁ NHẬT BẢN", headerTitle: "OSAKA - KYOTO - NÚI PHÚ SĨ - TOKYO", headerBtn1: "XEM THÊM" },
    { image: singapore, headerDesc: "KHÁM PHÁ SINGAPORE", headerTitle: "MARINA BAY SANDS - ĐẢO SENTOSA", headerBtn1: "XEM THÊM" },
    { image: china4, headerDesc: "KHÁM PHÁ TRUNG QUỐC", headerTitle: "BẮC KINH - THƯỢNG HẢI - HÀNG CHÂU", headerBtn1: "XEM THÊM" },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [slides.length]);

  const handleSearch = useCallback(() => {
    navigate("/trangtimkiem", { state: { destination, startDate, endDate } });
  }, [destination, startDate, endDate, navigate]);
  
  const toggleDatePicker = useCallback((start) => {
    setOpenStartDate(start);
    setOpenEndDate(!start);
  }, []);
  
  const updateDate = useCallback((item, isStartDate) => {
    if (isStartDate) {
      setStartDate(item.selection.startDate);
      toggleDatePicker(false);
    } else {
      setEndDate(item.selection.endDate);
      setOpenEndDate(false);
    }
  }, [toggleDatePicker]);

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
          <div className="imageTransition">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slider-image ${index === currentImageIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            ))}
          </div>

        <button className="prev" onClick={() => setCurrentImageIndex((currentImageIndex - 1 + slides.length) % slides.length)}>❮</button>
        <button className="next" onClick={() => setCurrentImageIndex((currentImageIndex + 1) % slides.length)}>❯</button>

        {type !== "list" && (
          <>
            <p className="headerDesc">{slides[currentImageIndex].headerDesc}</p>
            <h1 className="headerTitle">{slides[currentImageIndex].headerTitle}</h1>
            <div className="btnCenter">
              <button className="headerBtn1">{slides[currentImageIndex].headerBtn1}</button>
            </div>
            {/* ----------------Header Search----------------- */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faSearch} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Tìm Kiếm..."
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" onClick={()=>toggleDatePicker(true)}/>
                <span onClick={() => toggleDatePicker(true)} className="headerSearchText">
                  {`Thời gian đi: ${format(startDate, "MM/dd/yyyy")}`}
                </span>
                <span onClick={() => toggleDatePicker(true)} className="headerSearchTextMobile">
                  {`${format(startDate, "MM/dd/yyyy")}`}
                </span>
                {openStartDate && (
                  <DateRange
                    editableDateInputs
                    onChange={(item) => updateDate(item, true)}
                    ranges={[{ startDate, endDate: startDate, key: "selection" }]}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" onClick={()=>toggleDatePicker(true)}/>
                <span onClick={() => toggleDatePicker(false)} className="headerSearchText">
                  {`Thời gian đến: ${format(endDate, "MM/dd/yyyy")}`}
                </span>
                <span onClick={() => toggleDatePicker(false)} className="headerSearchTextMobile">
                  {`${format(endDate, "MM/dd/yyyy")}`}
                </span>
                {openEndDate && ( 
                  <DateRange
                    editableDateInputs
                    onChange={(item) => updateDate(item, false)}
                    ranges={[{ startDate: endDate, endDate, key: "selection" }]}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Tìm Kiếm</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
