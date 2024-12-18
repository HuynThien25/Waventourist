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
import {faAngleDown,faSearch,faXmark,} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
const TrangTimKiem = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || "");
  const [openDate, setOpenDate] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 15000000]);
  const [sapxep, setSapxep] = useState("tatca");
  const [category, setCategory] = useState("all");
  const [transport, setTransport] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setDestination(searchTerm);
      return;
    }
    setDestination(searchTerm);
  };

  useEffect(() => {
    if (!destination) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [destination]);

  const [date, setDate] = useState(
    location.state.date || [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]
  );

  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown = () => {
    setIsOpen3((prev) => !prev);
  };
  const toggleDropdown2 = () => {
    setIsOpen4((prev) => !prev);
  };
  const toggleDropdown3 = () => {
    setIsOpen5((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="center1024">
        {isLoading ? (
          <div className="skeletonText sliderTextSkeleton"></div>
        ) : (
          <div className="sliderText">Điểm đến khớp với <span>"{destination}"</span></div>
        )}
      </div>
      <img className="sliderIMG" alt="" src={vietNam} />
      <div className="sapxepContainer">
        <div className="grSapXep">
          <div className="sapxep">Sắp xếp theo </div>
          <div className="lsOptionItem1">
            <div className="dropdown-container">
              <select
                value={sapxep} onChange={(e) => setSapxep(e.target.value)} onClick={toggleDropdown} onBlur={() => setIsOpen3(false)}
                className="lsSelect2"
              >
                <option value="tatca">Phổ biến nhất</option>
                <option value="gia1">Giá thấp nhất</option>
                <option value="gia2">Giá cao nhất</option>
                <option value="gia3">Đánh giá cao nhất</option>
              </select>
              <FontAwesomeIcon icon={faAngleDown} className={`dropdown-icon ${isOpen3 ? "rotate" : ""}`}/>
            </div>
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
        {/* ------------Mobile------------- */}
        <div className="listSearchMobile1">
          <label for="nav-mobile-input2">
            <FontAwesomeIcon icon={faXmark} className="navMobileClose2" />
          </label>
          <div className="thethu1">
            {/* Destination M */}
            <div className="lsItem1">
                <label>Điểm đến</label>
                <FontAwesomeIcon icon={faSearch} className="inputIcon" onClick={handleSearch}/>
                <div className="inputDiemDen">
                  <input
                    type="text"
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch(); 
                    }}
                    placeholder="Bạn tìm địa điểm ở đây..."
                    className="formInput"
                  />
                </div>
              </div>
            {/* time M */}
            <div className="lsItem1">
              <label>Thời gian</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} - ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            {/* Price Filter M */}
            <div className="lsItem1">
              <label>Khoảng giá</label>
              <div>
                <div className="khoangGia">
                  {formatCurrency(priceRange[0])} <span>VND</span> -{" "}
                  {formatCurrency(priceRange[1])} <span>VND+</span>
                </div>
                <div className="slider-container">
                  <input
                    type="range"
                    min="0"
                    max="15000000"
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
                    max="15000000"
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

            {/* Category Filter M */}
            <div className="lsItem1">
              <label>Loại hoạt động hạng mục</label>
              <div className="dropdown-container">
                <select
                  value={category} onClick={toggleDropdown2} onBlur={() => setIsOpen4(false)} onChange={(e) => setCategory(e.target.value)}
                  className="lsSelect1"
                >
                  <option value="all">Tất cả</option>
                  <option value="Điểm thiên nhiên">Điểm Thiên Nhiên</option>
                  <option value="Ngắm cảnh">Ngắm cảnh</option>
                  <option value="Nghệ thuật và văn hóa">Nghệ thuật và văn hóa</option>
                  <option value="Tour dưới nước">Tour dưới nước</option>
                  <option value="Tour theo chủ đề">Tour theo chủ đề</option>
                  <option value="Tour bằng xe buýt">Tour bằng xe buýt</option>
                  <option value="Trải nghiệm ẩm thực">Trải nghiệm ẩm thực</option>
                  <option value="Sự kiện">Sự kiện</option>
                </select>
                <FontAwesomeIcon icon={faAngleDown} className={`dropdown-icon2 ${isOpen4 ? "rotate" : ""}`}/>
              </div>
            </div>
            {/* Transport Filter M */}
            <div className="lsItem1">
              <label>Phương tiện di chuyển</label>
              <div className="dropdown-container">
                <select
                  value={transport} onClick={toggleDropdown3} onBlur={() => setIsOpen5(false)} onChange={(e) => setTransport(e.target.value)}
                  className="lsSelect1"
                >
                  <option value="all">Tất cả</option>
                  <option value="Xe du lịch">Xe du lịch</option>
                  <option value="Hàng không">Máy bay</option>
                  <option value="Tàu">Tàu hỏa</option>
                </select>
                <FontAwesomeIcon icon={faAngleDown} className={`dropdown-icon2 ${isOpen5 ? "rotate" : ""}`}/>
              </div>
            </div>
          </div>
          <div className="thethu3">
            <div className="tourTrongNuoc">
              <div className="titleTourTrongNuoc" onClick={handleToggle}>
                <p>Tour Trong Nước</p>
                <FontAwesomeIcon icon={faAngleDown} className={`iconAngleDown ${isOpen ? "rotate" : ""}`}/>
              </div>
              {/* Check box M*/}
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
                <FontAwesomeIcon icon={faAngleDown} className={`iconAngleDown ${isOpen2 ? "rotate" : ""}`}/>
              </div>
              {/* Check box M */}
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
                <div className="customCheckBox">
                  <input type="checkbox" id="maCao" name="maCao" />
                  <label htmlFor="maCao">Ma Cao</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="campuchia" name="campuchia" />
                  <label htmlFor="campuchia">Campuchia</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="philippines" name="philippines" />
                  <label htmlFor="philippines">Philippines</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="hoaKy" name="hoaKy" />
                  <label htmlFor="hoaKy">Hoa Kỳ</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="Anh" name="Anh" />
                  <label htmlFor="Anh">Vương Quốc Anh</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="bi" name="bi" />
                  <label htmlFor="bi">Bỉ</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="newZealand" name="newZealand" />
                  <label htmlFor="newZealand">New Zealand</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="ao" name="ao" />
                  <label htmlFor="ao">Áo</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="tayBanNha" name="tayBanNha" />
                  <label htmlFor="tayBanNha">Tây Ban Nha</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="mexico" name="mexico" />
                  <label htmlFor="mexico">Mexico</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="y" name="y" />
                  <label htmlFor="y">Ý</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="hongkong" name="hongkong" />
                  <label htmlFor="hongkong">Hồng Kông</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="daiLoan" name="daiLoan" />
                  <label htmlFor="daiLoan">Đài Loan</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="indonesia" name="indonesia" />
                  <label htmlFor="indonesia">Indonesia</label>
                </div>
                <div className="customCheckBox">
                  <input type="checkbox" id="singapore" name="singapore" />
                  <label htmlFor="singapore">Singapore</label>
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
          {/* ------------PC------------- */}
          <div className="listSearch1">
            {/* Destination PC */}
            <div className="thethu1">
              <div className="lsItem1">
                <label>Điểm đến</label>
                <FontAwesomeIcon icon={faSearch} className="inputIcon" onClick={handleSearch}/>
                <div className="inputDiemDen">
                  <input
                    type="text"
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch(); 
                    }}
                    placeholder="Bạn tìm địa điểm ở đây..."
                    className="formInput"
                  />
                </div>
              </div>
              {/* time PC*/}
              <div className="lsItem1">
                <label>Thời gian</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} – ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              {/* Price Filter PC*/}
              <div className="lsItem1">
                <label>Khoảng giá</label>
                <div>
                  <div className="khoangGia">
                    {formatCurrency(priceRange[0])} <span>VND</span> –{" "}
                    {formatCurrency(priceRange[1])} <span>VND+</span>
                  </div>
                  <div className="slider-container">
                    <input
                      type="range"
                      min="0"
                      max="15000000"
                      value={priceRange[0]}
                      data-index="0"
                      onChange={handleRangeChange}
                      className="range-slider-thumb"
                    />
                    <input
                      type="range"
                      min="0"
                      max="15000000"
                      value={priceRange[1]}
                      data-index="1"
                      onChange={handleRangeChange}
                      className="range-slider-thumb"
                    />
                  </div>
                </div>
              </div>
              {/* Category Filter PC*/}
              <div className="lsItem1">
                <label>Loại hoạt động hạng mục</label>
                <div className="dropdown-container">
                  <select
                    value={category}
                    onClick={toggleDropdown2}
                    onBlur={() => setIsOpen4(false)}
                    onChange={(e) => setCategory(e.target.value)}
                    className="lsSelect1"
                  >
                    <option value="all">Tất cả</option>
                    <option value="Điểm thiên nhiên">Điểm Thiên Nhiên</option>
                    <option value="Ngắm cảnh">Ngắm cảnh</option>
                    <option value="Nghệ thuật và văn hóa">Nghệ thuật và văn hóa</option>
                    <option value="Tour dưới nước">Tour dưới nước</option>
                    <option value="Tour theo chủ đề">Tour theo chủ đề</option>
                    <option value="Tour bằng xe buýt">Tour bằng xe buýt</option>
                    <option value="Trải nghiệm ẩm thực">Trải nghiệm ẩm thực</option>
                    <option value="Sự kiện">Sự kiện</option>
                  </select>
                  <FontAwesomeIcon icon={faAngleDown} className={`dropdown-icon2 ${isOpen4 ? "rotate" : ""}`}/>
                </div>
              </div>
              {/* Transport Filter PC*/}
              <div className="lsItem1">
                <label>Phương tiện di chuyển</label>
                <div className="dropdown-container">
                  <select
                    value={transport} onClick={toggleDropdown3} onBlur={() => setIsOpen5(false)} onChange={(e) => setTransport(e.target.value)}
                    className="lsSelect1"
                  >
                    <option value="all">Tất cả</option>
                    <option value="Xe du lịch">Xe du lịch</option>
                    <option value="Hàng không">Máy bay</option>
                    <option value="Tàu">Tàu hỏa</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`dropdown-icon2 ${isOpen5 ? "rotate" : ""}`}
                  />
                </div>
              </div>
            </div>
            <div className="thethu3">
              <div className="tourTrongNuoc">
                <div className="titleTourTrongNuoc" onClick={handleToggle}>
                  <p>Tour Trong Nước</p>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`iconAngleDown ${isOpen ? "rotate" : ""}`}
                  />
                </div>
                {/* Check box PC*/}
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
                  <FontAwesomeIcon icon={faAngleDown} className={`iconAngleDown ${isOpen2 ? "rotate" : ""}`} />
                </div>
                {/* Check Box PC*/}
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
                  <div className="customCheckBox">
                    <input type="checkbox" id="maCao" name="maCao" />
                    <label htmlFor="maCao">Ma Cao</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="campuchia" name="campuchia" />
                    <label htmlFor="campuchia">Campuchia</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="philippines" name="philippines"/>
                    <label htmlFor="philippines">Philippines</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="hoaKy" name="hoaKy" />
                    <label htmlFor="hoaKy">Hoa Kỳ</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="Anh" name="Anh" />
                    <label htmlFor="Anh">Vương Quốc Anh</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="bi" name="bi" />
                    <label htmlFor="bi">Bỉ</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="newZealand" name="newZealand" />
                    <label htmlFor="newZealand">New Zealand</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="ao" name="ao" />
                    <label htmlFor="ao">Áo</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="tayBanNha" name="tayBanNha" />
                    <label htmlFor="tayBanNha">Tây Ban Nha</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="mexico" name="mexico" />
                    <label htmlFor="mexico">Mexico</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="y" name="y" />
                    <label htmlFor="y">Ý</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="hongkong" name="hongkong" />
                    <label htmlFor="hongkong">Hồng Kông</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="daiLoan" name="daiLoan" />
                    <label htmlFor="daiLoan">Đài Loan</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="indonesia" name="indonesia" />
                    <label htmlFor="indonesia">Indonesia</label>
                  </div>
                  <div className="customCheckBox">
                    <input type="checkbox" id="singapore" name="singapore" />
                    <label htmlFor="singapore">Singapore</label>
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

          <div className="listResult1">
            <SearchItem
              destination={destination}
              date={date}
              category={category}
              transport={transport}
              priceRange={priceRange}
              sapxep={sapxep}
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