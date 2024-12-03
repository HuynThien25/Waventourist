import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import QrCode from "../../components/qrCode/QrCode";
import GoBackButton from "../../components/goBackBtn/GoBackBtn";
import filter from "../../assets/img/logo/filter.png";
import "./trangTimKiem.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import vietNam from "../../assets/img/hinhAnh/vietNam.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const TrangTimKiem = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(
    location.state.date || [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]
  );

  const [category, setCategory] = useState("all"); // Lưu trạng thái của danh mục
  const [transport, setTransport] = useState("all"); // Lưu trạng thái của phương tiện di chuyển
  const [sapxep, setSapxep] = useState("tatca");
  // hàm xử lý tìm kiếm

  // hàm định dạng số với dấu chấm
  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  // State cho range slider
  const [priceRange, setPriceRange] = useState([0, 4000000]);

  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    const index = Number(e.target.dataset.index);
    const newPriceRange = [...priceRange];

    if (index === 0) {
      // Chỉ cập nhật nếu giá trị mới nhỏ hơn giá trị max
      if (value <= newPriceRange[1]) {
        newPriceRange[index] = value;
      }
    } else {
      // Chỉ cập nhật nếu giá trị mới lớn hơn giá trị min
      if (value >= newPriceRange[0]) {
        newPriceRange[index] = value;
      }
    }

    setPriceRange(newPriceRange);
  };

  // load nằm ở đầu trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // dropdow checkbox
  const [isOpen, setIsOpen] = useState(false); // State để điều khiển dropdown
  const [isOpen2, setIsOpen2] = useState(false); // State để điều khiển dropdown

  const handleToggle = () => {
    setIsOpen(!isOpen); // Thay đổi trạng thái khi click
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div>
      <Navbar />
        <div className="center1024">
          <div className="sliderText">Kết quả tìm kiếm: {destination}</div>
        </div>
        <img className="sliderIMG" alt="" src={vietNam} />
      <div className="sapxepContainer">
        <div className="grSapXep">
          <div className="sapxep">Xếp theo: </div>
          <div className="lsOptionItem1">
            {/* <span className="lsOptionText1">Giá thấp nhất</span> */}
            <select
              value={sapxep}
              onChange={(e) => setSapxep(e.target.value)}
              className="lsSelect2"
            >
              <option value="tatca">Phổ biến nhất</option>
              <option value="gia1">Giá thấp nhất</option>
              <option value="gia2">Giá cao nhất</option>
              <option value="gia3">Đánh giá cao nhất</option>
              <option value="gia4">Liên quan nhất</option>
            </select>
          </div>
        </div>
      </div>

      {/* --------------------thẻ con ---------------- */}
      <div className="btnOpenListSearch">
        <label for="nav-mobile-input2">
          <div className="boLocTimKiem">
            <img src={filter} alt="" className="iconFilter" />
            Bộ lọc tìm kiếm
          </div>
        </label>
        <input
          type="checkbox"
          hidden
          className="nav__input2"
          name=""
          id="nav-mobile-input2"
        />
        <label for="nav-mobile-input2" className="navOverlay"></label>
        {/* ----------------------------------------------- */}
        <div className="listSearchMobile1">
          <label for="nav-mobile-input2">
            <FontAwesomeIcon icon={faXmark} className="navMobileClose2" />
          </label>
          {/* Destination */}
          <div className="thethu1">
            <div className="lsItem1">
              <label>Điểm đến</label>
              <div className="inputDiemDen">
                <FontAwesomeIcon icon={faSearch} className="inputIcon" />
                <input
                  className="formInput"
                  placeholder="Tìm kiếm địa điểm ở đây"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>
            {/* Price Filter */}
            <div className="lsItem1">
              <label>Khoảng giá</label>
              <div>
                <div className="khoangGia">
                  {formatCurrency(priceRange[0])} <span>VND</span> đến{" "}
                  {formatCurrency(priceRange[1])} <span>VND+</span>
                </div>
                <div className="slider-container">
                  <input
                    type="range"
                    min="0"
                    max="4000000"
                    value={priceRange[0]}
                    data-index="0"
                    onChange={handleRangeChange}
                    className="range-slider-thumb"
                    style={{
                      zIndex: priceRange[0] === priceRange[1] ? "3" : "auto",
                    }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="4000000"
                    value={priceRange[1]}
                    data-index="1"
                    onChange={handleRangeChange}
                    className="range-slider-thumb"
                  />
                  <div
                    className="range-highlight"
                    style={{
                      left: `${(priceRange[0] / 4000000) * 100}%`,
                      width: `${
                        ((priceRange[1] - priceRange[0]) / 4000000) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lsItem1">
              <label>Loại hoạt động hạng mục</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="lsSelect1"
              >
                <option value="all">Tất cả</option>
                <option value="attraction">Điểm Thiên Nhiên</option>
                <option value="attraction">Ngắm cảnh</option>
                <option value="attraction">Nghệ thuật và văn hóa</option>
                <option value="attraction">Tour dưới nước</option>
                <option value="attraction">Tour trên đất liền</option>
                <option value="attraction">Tour theo chủ đề</option>
                <option value="attraction">Tour bằng xe buýt</option>
                <option value="food">Trải nghiệm ẩm thực</option>
                <option value="event">Sự kiện</option>
              </select>
            </div>
            {/* Transport Filter */}
            <div className="lsItem1">
              <label>Phương tiện di chuyển</label>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                className="lsSelect1"
              >
                <option value="all">Tất cả</option>
                <option value="car">Xe du lịch</option>
                <option value="plane">Máy bay</option>
                <option value="train">Tàu</option>
              </select>
            </div>
          </div>
          <div className="thethu3">
            <div className="tourTrongNuoc">
              <div className="titleTourTrongNuoc" onClick={handleToggle}>
                <p>Tour Trong Nước</p>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`iconAngleDown ${isOpen ? "rotate" : ""}`} // Xoay icon khi mở dropdown
                />
              </div>
              {/* Áp dụng class 'open' khi dropdown mở */}
              <fieldset className={`dropdownContent ${isOpen ? "open" : ""}`}>
                <div className="customCheckBox">
                  <input type="checkbox" id="daNang" name="daNang" />
                  <label htmlFor="daNang">Đà Nẵng</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="hue" name="hue" />
                  <label htmlFor="hue">Thừa Thiên Huế</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="haNoi" name="haNoi" />
                  <label htmlFor="haNoi">Hà Nội</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="hoChiMinh" name="hoChiMinh" />
                  <label htmlFor="hoChiMinh">Hồ Chí Minh</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="binhDinh" name="binhDinh" />
                  <label htmlFor="binhDinh">Bình Định</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="quangNam" name="quangNam" />
                  <label htmlFor="quangNam">Quảng Nam</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="ngheAn" name="ngheAn" />
                  <label htmlFor="ngheAn">Nghệ An</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="vungtau" name="vungtau" />
                  <label htmlFor="vungtau">Bà Rịa-Vũng Tàu</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="khanhhoa" name="khanhhoa" />
                  <label htmlFor="khanhhoa">Khánh Hòa</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="dalat" name="dalat" />
                  <label htmlFor="dalat">Đà Lạt</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="sapa" name="sapa" />
                  <label htmlFor="sapa">Sa pa</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="haiphong" name="haiphong" />
                  <label htmlFor="haiphong">Hải Phòng</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="quangtri" name="quangtri" />
                  <label htmlFor="quangtri">Quảng Trị</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="thanhhoa" name="thanhhoa" />
                  <label htmlFor="thanhhoa">Thanh Hóa</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="cantho" name="cantho" />
                  <label htmlFor="cantho">Cần Thơ</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="baclieu" name="baclieu" />
                  <label htmlFor="baclieu">Bạc Liêu</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="soctrang" name="soctrang" />
                  <label htmlFor="soctrang">Sóc Trăng</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div className="thethu2">
            <div className="tourTrongNuoc">
              <div className="titleTourTrongNuoc" onClick={handleToggle2}>
                <p>Tour Ngoài Nước</p>
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`iconAngleDown ${isOpen2 ? "rotate" : ""}`} // Xoay icon khi mở dropdown
                />
              </div>
              {/* Áp dụng class 'open' khi dropdown mở */}
              <fieldset className={`dropdownContent ${isOpen2 ? "open" : ""}`}>
                <div className="customCheckBox">
                  <input type="checkbox" id="thaiLan" name="thaiLan" />
                  <label htmlFor="thaiLan">Thái Lan</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="nhatBan" name="nhatBan" />
                  <label htmlFor="nhatBan">Nhật Bản</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="hanQuoc" name="hanQuoc" />
                  <label htmlFor="hanQuoc">Hàn Quốc</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="trungQuoc" name="trungQuoc" />
                  <label htmlFor="trungQuoc">Trung Quốc</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="haLan" name="haLan" />
                  <label htmlFor="haLan">Hà Lan</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="duc" name="duc" />
                  <label htmlFor="duc">Đức</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="phap" name="phap" />
                  <label htmlFor="phap">Pháp</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="uc" name="uc" />
                  <label htmlFor="uc">Úc</label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="thethu4">
            <div className="groupDatLaiVaChon">
              <button className="btnDatLai">Đặt lại</button>
              <button className="btnChon">Chọn</button>
            </div>
          </div>
        </div>
      </div>

      <div className="listContainer1">
        <div className="listWrapper1">
          {/* ---------------------------- */}
          <div className="listSearch1">
            {/* Destination */}
            <div className="thethu1">
              <div className="lsItem1">
                <label>Điểm đến</label>
                <div className="inputDiemDen">
                  <FontAwesomeIcon icon={faSearch} className="inputIcon" />
                  <input
                    className="formInput"
                    placeholder="Tìm kiếm địa điểm ở đây"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              {/* Price Filter */}
              <div className="lsItem1">
                <label>Khoảng giá</label>
                <div>
                  <div className="khoangGia">
                    {formatCurrency(priceRange[0])} <span>VND</span> đến{" "}
                    {formatCurrency(priceRange[1])} <span>VND+</span>
                  </div>
                  <div className="slider-container">
                    <input
                      type="range"
                      min="0"
                      max="4000000"
                      value={priceRange[0]}
                      data-index="0"
                      onChange={handleRangeChange}
                      className="range-slider-thumb"
                    />
                    <input
                      type="range"
                      min="0"
                      max="4000000"
                      value={priceRange[1]}
                      data-index="1"
                      onChange={handleRangeChange}
                      className="range-slider-thumb"
                    />
                  </div>
                </div>
              </div>
              {/* Category Filter */}
              <div className="lsItem1">
                <label>Loại hoạt động hạng mục</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="lsSelect1"
                >
                  <option value="all">Tất cả</option>
                  <option value="attraction">Điểm Thiên Nhiên</option>
                  <option value="attraction">Ngắm cảnh</option>
                  <option value="attraction">Nghệ thuật và văn hóa</option>
                  <option value="attraction">Tour dưới nước</option>
                  <option value="attraction">Tour trên đất liền</option>
                  <option value="attraction">Tour theo chủ đề</option>
                  <option value="attraction">Tour bằng xe buýt</option>
                  <option value="food">Trải nghiệm ẩm thực</option>
                  <option value="event">Sự kiện</option>
                </select>
              </div>
              {/* Transport Filter */}
              <div className="lsItem1">
                <label>Phương tiện di chuyển</label>
                <select
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  className="lsSelect1"
                >
                  <option value="all">Tất cả</option>
                  <option value="car">Xe du lịch</option>
                  <option value="plane">Máy bay</option>
                  <option value="train">Tàu</option>
                </select>
              </div>
            </div>
            <div className="thethu3">
              <div className="tourTrongNuoc">
                <div className="titleTourTrongNuoc" onClick={handleToggle}>
                  <p>Tour Trong Nước</p>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`iconAngleDown ${isOpen ? "rotate" : ""}`} // Xoay icon khi mở dropdown
                  />
                </div>
                {/* Áp dụng class 'open' khi dropdown mở */}
                <fieldset className={`dropdownContent ${isOpen ? "open" : ""}`}>
                  <div className="customCheckBox">
                    <input type="checkbox" id="daNang" name="daNang" />
                    <label htmlFor="daNang">Đà Nẵng</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="hue" name="hue" />
                    <label htmlFor="hue">Thừa Thiên Huế</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="haNoi" name="haNoi" />
                    <label htmlFor="haNoi">Hà Nội</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="hoChiMinh" name="hoChiMinh" />
                    <label htmlFor="hoChiMinh">Hồ Chí Minh</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="binhDinh" name="binhDinh" />
                    <label htmlFor="binhDinh">Bình Định</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="quangNam" name="quangNam" />
                    <label htmlFor="quangNam">Quảng Nam</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="ngheAn" name="ngheAn" />
                    <label htmlFor="ngheAn">Nghệ An</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="vungtau" name="vungtau" />
                    <label htmlFor="vungtau">Bà Rịa-Vũng Tàu</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="khanhhoa" name="khanhhoa" />
                    <label htmlFor="khanhhoa">Khánh Hòa</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="dalat" name="dalat" />
                    <label htmlFor="dalat">Đà Lạt</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="sapa" name="sapa" />
                    <label htmlFor="sapa">Sa pa</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="haiphong" name="haiphong" />
                    <label htmlFor="haiphong">Hải Phòng</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="quangtri" name="quangtri" />
                    <label htmlFor="quangtri">Quảng Trị</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="thanhhoa" name="thanhhoa" />
                    <label htmlFor="thanhhoa">Thanh Hóa</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="cantho" name="cantho" />
                    <label htmlFor="cantho">Cần Thơ</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="baclieu" name="baclieu" />
                    <label htmlFor="baclieu">Bạc Liêu</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="soctrang" name="soctrang" />
                    <label htmlFor="soctrang">Sóc Trăng</label>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="thethu2">
              <div className="tourTrongNuoc">
                <div className="titleTourTrongNuoc" onClick={handleToggle2}>
                  <p>Tour Ngoài Nước</p>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`iconAngleDown ${isOpen2 ? "rotate" : ""}`} // Xoay icon khi mở dropdown
                  />
                </div>
                {/* Áp dụng class 'open' khi dropdown mở */}
                <fieldset
                  className={`dropdownContent ${isOpen2 ? "open" : ""}`}
                >
                  <div className="customCheckBox">
                    <input type="checkbox" id="thaiLan" name="thaiLan" />
                    <label htmlFor="thaiLan">Thái Lan</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="nhatBan" name="nhatBan" />
                    <label htmlFor="nhatBan">Nhật Bản</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="hanQuoc" name="hanQuoc" />
                    <label htmlFor="hanQuoc">Hàn Quốc</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="trungQuoc" name="trungQuoc" />
                    <label htmlFor="trungQuoc">Trung Quốc</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="haLan" name="haLan" />
                    <label htmlFor="haLan">Hà Lan</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="duc" name="duc" />
                    <label htmlFor="duc">Đức</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="phap" name="phap" />
                    <label htmlFor="phap">Pháp</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="uc" name="uc" />
                    <label htmlFor="uc">Úc</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="thethu4">
              <div className="groupDatLaiVaChon">
                <button className="btnDatLai">Đặt lại</button>
                <button className="btnChon">Chọn</button>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="listResult1">
            <SearchItem
              destination={destination}
              date={date}
              category={category}
              transport={transport}
              priceRange={priceRange}
            />
          </div>
        </div>
      </div>
      <GoBackButton />
      <QrCode />
      <Footer />
    </div>
  );
};

export default TrangTimKiem;
