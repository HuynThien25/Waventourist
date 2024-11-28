import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/img/logo/logo.png";
import translate from "../../assets/img/logo/translate.png";
import japan from "../../assets/img/logo/japan.png";
import england from "../../assets/img/logo/england.png";
import korea from "../../assets/img/logo/south-korea.png";
import germany from "../../assets/img/logo/germany.png";
import china from "../../assets/img/logo/china.png";
import indonesia from "../../assets/img/logo/indonesia.png";
import singapore from "../../assets/img/logo/singapore.png";
import thailand from "../../assets/img/logo/thailand.png";
import { faAngleDown, faBars, faCircleUser, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [destination, setDestination] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleHome = () => navigate("/", { state: { destination } });
  const handleRegister = () => navigate("/register", { state: { destination } });
  const handleTourDaDat = () =>navigate("/TourDaDat", { state: { destination } });
  const handleLogin = () => navigate("/login", { state: { destination } });

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = (e) => {
    e.stopPropagation();
    setIsOpen2(!isOpen2);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
      if (isOpen2) setIsOpen2(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, isOpen2]);


  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userToken");
    setLoggedInUser(null);
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="navbar">
      {/* --------------navPC----------- */}
      <div className="navContainer">
        <div>
          <img src={logo} alt="Group 5" className="icon" />
          <span className="logo" onClick={handleHome}>
            WavenTourist
          </span>
        </div>

        <div className="headerList1">
          <div className="headerListItem1" onClick={handleHome}><span>Trang Chủ</span></div>
          <div className="headerListItem1"><span>Tour Nước Ngoài</span></div>
          <div className="headerListItem1"><span>Tour Trong Nước</span></div>
          <div className="headerListItem1" onClick={toggleDropdown}>
            <div className="dropdownHeader">
              <span>Dịch Vụ Du Lịch </span>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            {isOpen && (
              <ul className="dropDownList">
              <li className="dropdownItem">Thuê Xe</li>
                <li className="dropdownItem">Vé Máy Bay</li>
                <li className="dropdownItem">Bảo Hiểm Du Lịch</li>
                <li className="dropdownItem">Coupon Du Lịch</li>
            </ul>
            )}
          </div>
          <div className="headerListItem1"><span>Liên Hệ</span></div>
        </div>

        <div className="boNgonNgu" onClick={toggleDropdown2}>
          <div className="dropdownTranslate">
            <img src={translate} className="translateImg" alt="" />
            <span>VIE | VND</span>
            <FontAwesomeIcon className="iconTranslate" icon={faAngleDown} />
          </div>
          {isOpen2 && (
            <ul className="dropDownList2">
            <div className="groupTranslate">
                <img className="iconQuocGia" src={england} alt=""/>
                <li className="dropdownItem2"><span>England | GBP £</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={korea} alt=""/>
                <li className="dropdownItem2"><span>Korea | KPW ₩</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={japan} alt=""/>
                <li className="dropdownItem2"><span>Japan | JPY ¥</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={germany} alt=""/>
                <li className="dropdownItem2"><span>Germany | EUR €</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={china} alt=""/>
                <li className="dropdownItem2"><span>China | CNY ¥</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={thailand} alt=""/>
                <li className="dropdownItem2"><span>Thailand | BAHT ฿</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={singapore} alt=""/>
                <li className="dropdownItem2"><span>Singapore | SGD $</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={indonesia} alt=""/>
                <li className="dropdownItem2"><span>Indonesia | IDR Rp</span></li>
                </div>
            </ul>
          )}
        </div>

        <div className="navItems">
          {loggedInUser ? (
            <div className="userSection">
              <FontAwesomeIcon icon={faCircleUser} className="iconUserLogged" />
              <span className="userName" onClick={handleTourDaDat}>{loggedInUser}</span>
              <button className="logOutBtn" onClick={() => setIsModalOpen(true)}>Đăng xuất</button>
            </div>
          ) : (
            <>
              <button className="navButton2" onClick={handleLogin}>
                <FontAwesomeIcon icon={faUser} className="iconUserNoLogin" /> Đăng Nhập
              </button>
              <button className="navButton1" onClick={handleRegister}>Đăng Ký</button>
            </>
          )}
        </div>

      </div>
      {/* ---------navMobile------------ */}
        <div className="grIconMobile">
          <img src={logo} alt="Group 5" className="iconMobile" />
          <span className="logoMobile" onClick={handleHome}>
            WavenTourist
          </span>
        </div>
      <label for="nav-mobile-input">
      <FontAwesomeIcon icon={faBars} className="navContainerBtn"/>
      </label>
      <input type="checkbox" hidden className="nav__input" name="" id="nav-mobile-input"/>
      <label for="nav-mobile-input" className="navOverlay"></label>
      <div className="navMobileContainer">
          <label for="nav-mobile-input"> 
          <FontAwesomeIcon icon={faXmark} className="navMobileClose"/>
          </label>
        <div className="navItemsMobile">
          {loggedInUser ? (
            <div className="userSection">
              <FontAwesomeIcon icon={faCircleUser} className="iconUserLogged" />
              <span className="userName" onClick={handleTourDaDat}>{loggedInUser}</span>
              <button className="logOutBtn" onClick={() => setIsModalOpen(true)}>Đăng xuất</button>
            </div>
          ) : (
            <>
              <button className="navButton2" onClick={handleLogin}>
                <FontAwesomeIcon icon={faUser} className="iconUserNoLogin" /> Đăng Nhập
              </button>
              <button className="navButton1" onClick={handleRegister}>Đăng Ký</button>
            </>
          )}
        </div>
        <div className="boNgonNguMobile" onClick={toggleDropdown2}>
          <div className="dropdownTranslate">
            <img src={translate} className="translateImg" alt="" />
            <span>VIE | VND</span>
            <FontAwesomeIcon className="iconTranslate" icon={faAngleDown} />
          </div>
          {isOpen2 && (
            <ul className="dropDownList2">
            <div className="groupTranslate">
                <img className="iconQuocGia" src={england} alt=""/>
                <li className="dropdownItem2"><span>England | GBP £</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={korea} alt=""/>
                <li className="dropdownItem2"><span>Korea | KPW ₩</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={japan} alt=""/>
                <li className="dropdownItem2"><span>Japan | JPY ¥</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={germany} alt=""/>
                <li className="dropdownItem2"><span>Germany | EUR €</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={china} alt=""/>
                <li className="dropdownItem2"><span>China | CNY ¥</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={thailand} alt=""/>
                <li className="dropdownItem2"><span>Thailand | BAHT ฿</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={singapore} alt=""/>
                <li className="dropdownItem2"><span>Singapore | SGD $</span></li>
                </div>
                <div className="groupTranslate">
                <img className="iconQuocGia" src={indonesia} alt=""/>
                <li className="dropdownItem2"><span>Indonesia | IDR Rp</span></li>
                </div>
            </ul>
          )}
        </div>
        <div className="headerListMobile1">
          <div className="headerListItemMobile1"><span>Trang Chủ</span></div>
          <div className="headerListItemMobile1"><span>Tour Nước Ngoài</span></div>
          <div className="headerListItemMobile1"><span>Tour Trong Nước</span></div>
          <div className="headerListItemMobile1" onClick={toggleDropdown}>
            <div className="dropdownHeader">
              <span>Dịch Vụ Du Lịch </span>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            {isOpen && (
              <ul className="dropDownList">
                <li className="dropdownItem">Thuê Xe</li>
                <li className="dropdownItem">Vé Máy Bay</li>
                <li className="dropdownItem">Bảo Hiểm Du Lịch</li>
                <li className="dropdownItem">Coupon Du Lịch</li>
              </ul>
            )}
          </div>
          <div className="headerListItemMobile1"><span>Liên Hệ</span></div>
        </div>

      </div>
      {/* -------------------------------------*/}
      {isModalOpen && (
  <div className={`modalOverlay ${isModalOpen ? "show" : ""}`}>
    <div className="modalContent">
      <h2>Đang đăng xuất</h2>
      <p>Ôi không! Bạn sẽ bỏ lỡ rất nhiều điều khi đăng nhập. Bạn có chắc vẫn muốn đăng xuất?</p>
      <div className="modalButtons">
        <button className="confirmButton" onClick={handleLogout}>Có</button>
        <button className="cancelButton" onClick={() => setIsModalOpen(false)}>Không</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Navbar;
