import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TrangTimKiem from "../src/pages/trangtimkiem/TrangTimKiem";
import ChiTietTour from "../src/pages/chiTietTour/ChiTietTour";
import TrangDatTour from "./pages/trangDatTour/TrangDatTour";
import TrangDatTour2 from "./pages/trangDatTour/TrangDatTour2";
import TrangDatTour3 from "./pages/trangDatTour/TrangDatTour3";
import TrangDatTour4 from "./pages/trangDatTour/TrangDatTour4";
import QuenMatKhau from "./pages/quenMatKhau/QuenMatKhau";
import QuenMatKhau2 from "./pages/quenMatKhau/QuenMatKhau2";
import QuenMatKhau3 from "./pages/quenMatKhau/QuenMatKhau3";
import TourDaDat from "./pages/tourDaDat/TourDaDat";
import { TotalAmountProvider } from "./components/tongGiaTien/TongGiaTien";

function App() {
  return (
    <BrowserRouter>
      <TotalAmountProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quenMatKhau" element={<QuenMatKhau />} />
          <Route path="/quenMatKhau2" element={<QuenMatKhau2 />} />
          <Route path="/quenMatKhau3" element={<QuenMatKhau3 />} />
          <Route path="/trangtimkiem" element={<TrangTimKiem />} />
          <Route path="/chiTietTour" element={<ChiTietTour />} />
          <Route path="/trangDatTour" element={<TrangDatTour />} />
          <Route path="/trangDatTour2" element={<TrangDatTour2 />} />
          <Route path="/trangDatTour3" element={<TrangDatTour3 />} />
          <Route path="/trangDatTour4" element={<TrangDatTour4 />} />
          <Route path="/tourDaDat" element={<TourDaDat />} />
        </Routes>
      </TotalAmountProvider>
    </BrowserRouter>
  );
}

export default App;
