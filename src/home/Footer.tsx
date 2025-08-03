import "../home/footer.css";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-column">
          <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <p>
            <strong>DỊCH VỤ VỆ SINH CÔNG NGHIỆP CLEAN PRO</strong>
          </p>
          <p>
            <strong>Địa chỉ:</strong> 1158 trường chinh
          </p>
          <p>
            <strong>Điện Thoại:</strong> 0799.1403.55 (Ms.Như)
          </p>
          <p>
            <strong>Email:</strong> Mail.lemynhu2606@gmail.com
          </p>
          <p>
            <strong>Kết nối với chúng tôi:</strong>
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-column">
          <h3>DỊCH VỤ GIẶT ỦI</h3>
          <p>Giặt ghế sofa tại Đà Nẵng</p>
          <p>Giặt thảm tại Đà Nẵng</p>
          <p>Giặt màn rèm tại Đà Nẵng</p>
          <p>Giặt nệm tại Đà Nẵng</p>
        </div>

        <div className="footer-column">
          <h3>DỊCH VỤ VỆ SINH</h3>
          <p>Vệ sinh sau xây dựng</p>
          <p>Dịch vụ vệ sinh nhà ở</p>
          <p>Lau kính toà nhà</p>
          <p>Vệ sinh nhà xưởng</p>

          <p>Vệ sinh bảng hiệu</p>
          <p>Đánh bóng sàn bê tông</p>
          <p>Đánh bóng phục hồi sàn đá</p>
        </div>
      </footer>
      <footer id="sp-footer">
        <div className="container">
          <div className="row">
            <div id="sp-footer1" className="col-lg-12 ">
              <div className="sp-column ">
                <span className="sp-copyright">
                  ©2025 Vệ Sinh Công Nghiệp Đà Nẵng Clear Pro. Thiết kế bởi:{" "}
                  <a
                    href="https://designwebdanang.com/"
                    title="Sinh viên năm nhất PTIT"
                  >
                    Sinh viên năm nhất PTIT
                  </a>{" "}
                  - WEBBRO
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};
export default Footer;
