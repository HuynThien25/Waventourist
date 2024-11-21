import "./propertyList.css";
import singapore11 from "../../assets/img/hinhAnh/singapore11.jpg";
import thailand11 from "../../assets/img/hinhAnh/thailand11.jpg";
import phuquoc11 from "../../assets/img/hinhAnh/phuquoc11.jpg";
import china from "../../assets/img/hinhAnh/china.jpg";
import korea2 from "../../assets/img/hinhAnh/korea2.jpg";
import favorite from "../../assets/img/logo/favorite.png";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const PropertyList = () => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/trangDatTour", { state: {} });
  };
  return (
    <div className="pList">
      <div className="plistCenter">
        <div className="pListCard" onClick={handleBuy}>
            <div className="pListItem">
          <LazyLoad>
              <div>
              <div className="tietkiem">Giảm giá 15%</div>
              <img src={favorite} alt="Tim" className="favorite" />
              <img src={china} alt="trung quốc" className="pListImg" />
              </div>
          </LazyLoad>
              <div className="pListTitles">
                <h1>Tour Trung Quốc</h1>
                <h2>Thượng Hải - Hàng Châu - Tô Châu - Ô Trấn (5N4Đ)</h2>
                <p>15.756.888 VND</p>
                <h2>
                  {" "}
                  <span>17.600.000 VND</span>
                </h2>
              </div>
              <button className="cardBtn" onClick={handleBuy}>
                Mua Tour
              </button>
            </div>
        </div>

        <div className="pListCard" onClick={handleBuy}>
            <div className="pListItem">
          <LazyLoad>
            <div>
              <div className="tietkiem">Giảm giá 10%</div>
              <img src={favorite} alt="Tim" className="favorite" />
              <img src={korea2} alt="hàn" className="pListImg" />
            </div>
          </LazyLoad>
              <div className="pListTitles">
                <h1>Tour Hàn Quốc</h1>
                <h2>Busan - Incheon - Seoul - Công viên everland (7N6Đ)</h2>
                <p>15.456.888 VND</p>
                <h2>
                  <span>16.204.000 VND</span>
                </h2>
              </div>
              <button className="cardBtn" onClick={handleBuy}>
                Mua Tour
              </button>
            </div>
        </div>

        <div className="pListCard" onClick={handleBuy}>
            <div className="pListItem">
          <LazyLoad>
            <div>
              <div className="tietkiem">Giảm giá 10%</div>
              <img src={favorite} alt="Tim" className="favorite" />
              <img src={thailand11} alt="thailand" className="pListImg" />
            </div>
          </LazyLoad>
              <div className="pListTitles">
                <h1>Tour Thái Lan</h1>
                <h2>Tour Thái Lan trọn gói - Bangkok -Pataya - (5N4Đ)</h2>
                <p>5.456.888 VND</p>
                <h2>
                  <span>6.139.000 VND</span>
                </h2>
              </div>
              <button className="cardBtn" onClick={handleBuy}>
                Mua Tour
              </button>
            </div>
        </div>

        <div className="pListCard" onClick={handleBuy}>
            <div className="pListItem">
          <LazyLoad>
              <div>
              <div className="tietkiem">Giảm giá 15%</div>
              <img src={favorite} alt="Tim" className="favorite" />
              <img src={singapore11} alt="sing" className="pListImg" />
              </div>
          </LazyLoad>
              <div className="pListTitles">
                <h1>Tour Singapore</h1>
                <h2>Tour trọn gói Singapore và Malaysia (4N3Đ)</h2>
                <p>8.456.888 VND</p>
                <h2>
                  <span>9.879.000 VND</span>
                </h2>
              </div>
              <button className="cardBtn" onClick={handleBuy}>
                Mua Tour
              </button>
            </div>
        </div>

        <div className="pListCard" onClick={handleBuy}>
            <div className="pListItem">
          <LazyLoad>
            <div>
              <div className="tietkiem">Giảm giá 10%</div>
              <img src={favorite} alt="Tim" className="favorite" />
              <img src={phuquoc11} alt="phú quốc" className="pListImg" />
            </div>
          </LazyLoad>
              <div className="pListTitles">
                <h1>Tour Việt Nam</h1>
                <h2>Tour Khám Phá Bắc Đảo - Safari - Vinwonder (3N2Đ)</h2>
                <p>5.456.888 VND</p>
                <h2>
                  <span>6.139.000 VND</span>
                </h2>
              </div>
              <button className="cardBtn" onClick={handleBuy}>
                Mua Tour
              </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PropertyList;
