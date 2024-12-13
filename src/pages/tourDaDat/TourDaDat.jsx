import "./tourDaDat.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const TourDaDat = () => {
  const location = useLocation();
  const [favoriteTours, setFavoriteTours] = useState([]);
  const [boughtTours,setBoughtTours] = useState([]);
  const [viewMode, setViewMode] = useState("info"); // "info" hoặc "favorites"
  const [showConfirmPopup, setShowConfirmPopup] = useState(false); // Quản lý popup xác nhận
  const [selectedTourId, setSelectedTourId] = useState(null); // Lưu id của tour được chọn
  const navigate = useNavigate();

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
            <h4>Quản lý thông tin của bạn</h4>
            <div className="tabOptions">
              <button
                className={viewMode === "info" ? "activeTab" : ""}
                onClick={() => setViewMode("info")}
              >
                Thông tin tour đã đặt
              </button>
              <button
                className={viewMode === "favorites" ? "activeTab" : ""}
                onClick={() => setViewMode("favorites")}
              >
                Tour yêu thích của bạn
              </button>
            </div>
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
                      <img
                        src={tour.image2 || "https://via.placeholder.com/150"}
                        alt={`Tour ${tour.maTour}`}
                      />
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
                  <div className="popupOverlay" onClick={handleCancelDelete}></div>
                  <div className="confirmPopup">
                    <div className="popupContent">
                      <h1>Xóa mục yêu thích</h1>
                      <p>Nếu bạn xóa mục yêu thích này, nó sẽ xóa khỏi danh sách yêu thích đã lưu. Bạn có muốn làm vậy?</p>
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
      <Footer />
    </div>
  );
};

export default TourDaDat;