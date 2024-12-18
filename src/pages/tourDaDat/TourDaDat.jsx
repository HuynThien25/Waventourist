import "./tourDaDat.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCalendarDays, faHeart, faTicketSimple, faUser } from "@fortawesome/free-solid-svg-icons";
const TourDaDat = () => {
  const location = useLocation();
  const [favoriteTours, setFavoriteTours] = useState([]);
  const [boughtTours, setBoughtTours] = useState([]);
  const [viewMode, setViewMode] = useState("info");
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUsername(loggedInUser);
    }
  }, []);

  const handleWatch = () => {
    navigate("/chiTietTour", { state: {} });
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteTours");
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    setFavoriteTours(favorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    // Lấy dữ liệu từ localStorage, nếu không có thì trả về mảng rỗng
    const existingFavorites = localStorage.getItem("favoriteTours");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    // Lọc danh sách yêu thích để loại bỏ tour có id khớp
    const updatedFavorites = favorites.filter((tour) => tour.id !== id);
    // Lưu lại danh sách yêu thích đã cập nhật vào localStorage
    localStorage.setItem("favoriteTours", JSON.stringify(updatedFavorites));
    // Cập nhật state
    setFavoriteTours(updatedFavorites);
    // Thông báo xóa thành công
    setShowPopup(true);
    autoClosePopup(setShowPopup);
  };

  const autoClosePopup = (setPopupState) => {
    setTimeout(() => {
      setPopupState(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userToken");
    setLoggedInUser(null);
    setIsModalOpen(false);
    navigate("/");
  };

  const handleOpenConfirmPopup = (id) => {
    setSelectedTourId(id);
    setShowConfirmPopup(true);
  };

  const handleConfirmDelete = () => {
    if (selectedTourId) {
      handleRemoveFavorite(selectedTourId);
    }
    setShowConfirmPopup(false);
    setSelectedTourId(null);
  };

  const handleCancelDelete = () => {
    setShowConfirmPopup(false);
    setSelectedTourId(null);
  };

  useEffect(() => {
    return () => {
      setShowPopup(false);
    };
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const savedTours = localStorage.getItem("bookedTours");
    const tours = savedTours ? JSON.parse(savedTours) : [];
    setBoughtTours(tours);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="tourDaDatContain">
        <div className="tourDaDat">
          <div className="cvfg">
            <div className="bangTourDaDat">
              <div className="titleTourDaDat">Xin chào {username}</div>
              <div className="bangmot">
                <h4>Quản lý thông tin của bạn</h4>
                <div className="tabOptions">
                <div className="hoSo">
                  <button
                      className={viewMode === "user" ? "activeTab" : ""}
                      onClick={() => setViewMode("user")}
                    >
                      <FontAwesomeIcon icon={faUser} className="iconTourDaDat1"/>
                      Hồ sơ
                      <FontAwesomeIcon icon={faAngleRight} className="iconTourDaDat2"/>

                    </button>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="thongTinDaDat">
                    <button
                      className={viewMode === "info" ? "activeTab" : ""}
                      onClick={() => setViewMode("info")}
                    >
                      <FontAwesomeIcon icon={faCalendarDays} className="iconTourDaDat1"/>
                      Thông tin tour đã đặt
                      <FontAwesomeIcon icon={faAngleRight} className="iconTourDaDat2"/>

                    </button>
                  </div>
                  {/*  */}
                  <div className="tourYeuThich">
                    <button
                      className={viewMode === "favorites" ? "activeTab" : ""}
                      onClick={() => setViewMode("favorites")}
                    >
                      <FontAwesomeIcon icon={faHeart} className="iconTourDaDat1"/>
                      Tour yêu thích của bạn
                      <FontAwesomeIcon icon={faAngleRight} className="iconTourDaDat2"/>

                    </button>
                  </div>
                  {/*  */}
                  <div className="khuyenMaine">
                  <button
                      className={viewMode === "coupons" ? "activeTab" : ""}
                      onClick={() => setViewMode("coupons")}
                    >
                      <FontAwesomeIcon icon={faTicketSimple} className="iconTourDaDat1"/>
                      Mã khuyến mãi
                      <FontAwesomeIcon icon={faAngleRight} className="iconTourDaDat2"/>
                    </button>
                  </div>
                  {/*  */}
                </div>
              </div>
                  <button className="logOutBtnTourDaDat" onClick={() => setIsModalOpen(true)}>Đăng xuất</button>
            </div>

            {viewMode === "info" && (
              <div className="bangCacThongTinTour">
                <div className="tourHeader">
                  <div>ID</div>
                  <div>Mã tour</div>
                  <div>Ngày đi</div>
                  <div>Ngày về</div>
                  <div>Tour</div>
                  <div>Giá</div>
                  <div>Thời gian đặt</div>
                </div>
                {boughtTours.length > 0 ? (
                  boughtTours.map((tour, index) => (
                    <div className="tourRow" key={tour.id}>
                      <div>{index + 1}</div>
                      <div>{tour.maTour}</div>
                      <div>{tour.ngayDi}</div>
                      <div>{tour.ngayVe}</div>
                      <div>{tour.diaDiem}</div>
                      <div>{tour.gia}</div>
                      <div>{tour.thoiGianDat}</div>
                      <button className="danhGia">Đánh giá</button>
                    </div>
                  ))
                ) : (
                  <p>Chưa có tour nào được đặt.</p>
                )}
              </div>
            )}

            {viewMode === "favorites" && (
              <div className="cardContainer">
                {favoriteTours.length > 0 ? (
                  favoriteTours.map((tour, index) => (
                    <div className="tourCard" key={tour.id}>
                      {/* Hình ảnh bên trái */}
                      <div className="cardImage" onClick={handleWatch}>
                        <img src={tour.image2} alt={`Tour ${tour.maTour}`} />
                      </div>
                      {/* Nội dung bên phải */}
                      <div className="cardContent">
                        <div className="cardHeader" onClick={handleWatch}>
                          <h3>{tour.h1}</h3>
                          <span>ID: {index + 1}</span>
                        </div>
                        <div className="cardDetails">
                          <p>
                            <strong>Mã tour:</strong> {tour.maTour}
                          </p>
                          <p>
                            <strong>Ngày đi:</strong> {tour.ngayDi}
                          </p>
                          <p>
                            <strong>Ngày về:</strong> {tour.ngayVe}
                          </p>
                          <p>
                            <strong>Giá:</strong> {tour.gia}
                          </p>
                        </div>
                        {/* Nút xóa */}
                        <button
                          className="removeBtn"
                          onClick={() => handleOpenConfirmPopup(tour.id)}
                        >
                          Xóa khỏi mục yêu thích
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="chuaCoTour">Chưa có tour Yêu thích nào.</p>
                )}
                {showConfirmPopup && (
                  <>
                    <div
                      className="popupOverlay"
                      onClick={handleCancelDelete}
                    ></div>
                    <div className="confirmPopup">
                      <div className="popupContent">
                        <h1>Xóa mục yêu thích</h1>
                        <p>
                          Nếu bạn xóa mục yêu thích này, nó sẽ xóa khỏi danh
                          sách yêu thích đã lưu. Bạn có muốn làm vậy?
                        </p>
                        <div className="popupActions">
                          <button onClick={handleConfirmDelete}>Đồng ý</button>
                          <button onClick={handleCancelDelete}>Hủy</button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Popup thông báo */}
                {showPopup && (
                  <div className="popupNotification">
                    <span>Đã xóa khỏi danh sách yêu thích!</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
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
      <Footer />
    </div>
  );
};

export default TourDaDat;
