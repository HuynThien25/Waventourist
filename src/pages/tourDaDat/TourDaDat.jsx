import "./tourDaDat.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TourDaDat = () => {
  const location = useLocation();
  const [favoriteTours, setFavoriteTours] = useState([]);
  const [viewMode, setViewMode] = useState("info"); // "info" hoặc "favorites"

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
  };

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const tours = [
    {
      id: 1,
      maTour: "SN34545",
      ngayDi: "27/09/2024",
      ngayVe: "30/09/2024",
      diaDiem: "Phú Quốc",
      soNguoi: 1,
      gia: "3.159.000 VND",
    },
    {
      id: 2,
      maTour: "SD13842",
      ngayDi: "27/10/2024",
      ngayVe: "30/10/2024",
      diaDiem: "Đà Nẵng",
      soNguoi: 2,
      gia: "4.109.000 VND",
    },
    {
      id: 3,
      maTour: "SF48532",
      ngayDi: "27/11/2024",
      ngayVe: "30/11/2024",
      diaDiem: "Hà Nội",
      soNguoi: 2,
      gia: "7.359.000 VND",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="tourDaDatContain">
        <div className="tourDaDat">
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
                <div>Số người</div>
                <div>Giá</div>
              </div>
              {tours.map((tour, index) => (
                <div className="tourRow" key={tour.id}>
                  <div>{index + 1}</div>
                  <div>{tour.maTour}</div>
                  <div>{tour.ngayDi}</div>
                  <div>{tour.ngayVe}</div>
                  <div>{tour.diaDiem}</div>
                  <div>{tour.soNguoi}</div>
                  <div>{tour.gia}</div>
                </div>
              ))}
            </div>
          )}

          {viewMode === "favorites" && (
            <div className="cardContainer">
              {favoriteTours.length > 0 ? (
                favoriteTours.map((tour, index) => (
                  <div className="tourCard" key={tour.id}>
                    {/* Hình ảnh bên trái */}
                    <div className="cardImage">
                      <img
                        src={tour.image || "https://via.placeholder.com/150"}
                        alt={`Tour ${tour.maTour}`}
                      />
                    </div>
                    {/* Nội dung bên phải */}
                    <div className="cardContent">
                      <div className="cardHeader">
                        <h3>{tour.diaDiem}</h3>
                        <span>ID:{index + 1}</span>
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
                        onClick={() => handleRemoveFavorite(tour.id)}
                      >
                        Xóa khỏi yêu thích
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Chưa có tour yêu thích nào.</p>
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
      <Footer />
    </div>
  );
};

export default TourDaDat;
