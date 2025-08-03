import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import "./Header.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Breakpoint mobile nên khớp với CSS của bạn
  const MOBILE_BREAKPOINT = 992;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT
  );

  // Lắng nghe resize để cập nhật chế độ mobile/desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

      // Reset dropdown và mobile menu khi chuyển qua desktop (hover sẽ lo)
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpenDropdown(null);
        setIsMenuOpen(false); // Đóng mobile menu nếu nó đang mở
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle menu mobile (hamburger icon)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Khi mở/đóng menu chính, đóng tất cả dropdown con
    setOpenDropdown(null);
  };

  // Toggle dropdown mobile (chỉ dùng cho mobile)
  const handleDropdownClick = (menuName: string, event: React.MouseEvent) => {
    if (isMobile) {
      event.preventDefault(); // Ngăn chặn link điều hướng trên mobile khi click vào dropdown cha
      setOpenDropdown(openDropdown === menuName ? null : menuName);
    }
    // Đối với desktop, chúng ta không cần handle click ở đây,
    // CSS :hover sẽ xử lý việc mở/đóng dropdown.
  };

  // Xử lý hover cho desktop (không cần cho mobile)
  const handleMouseEnter = (menuName: string) => {
    if (!isMobile) {
      setOpenDropdown(menuName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  return (
    <header className="main-header">
      {/* Row 1 */}
      <div className="header-row-1">
        <div className="row-content container">
          <div className="social-icons">
            <a href="#" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" className="social-icon youtube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-icon vk">
              <i className="fab fa-vk"></i>
            </a>
          </div>
          <div className="contact-info-header">
            <span className="contact-item phone">
              <i className="fas fa-phone-alt"></i> 0912396747
            </span>
            <span className="contact-item email">
              <i className="fas fa-envelope"></i> dinhvatthanht@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="header-row-2">
        <div className="row-content container">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Vệ Sinh Công Nghiệp 5S" />
            </a>
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>

          {/* Navigation */}
          <nav className={`main-navigation ${isMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="/">TRANG CHỦ</a>
              </li>

              {/* Dropdown Vệ sinh */}
              <li
                className={`dropdown ${
                  isMobile && openDropdown === "ve-sinh" ? "open" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("ve-sinh")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/my-cleanpro/dich-vu-ve-sinh"
                  onClick={(e) => handleDropdownClick("ve-sinh", e)}
                >
                  DỊCH VỤ VỆ SINH <i className="fas fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/my-cleanpro/ve-sinh-cong-nghiep">
                      Vệ sinh công nghiệp
                    </a>
                  </li>
                  <li>
                    <a href="/my-cleanpro/ve-sinh-nha-o">Vệ sinh nhà ở</a>
                  </li>
                  <li>
                    <a href="/my-cleanpro/ve-sinh-sau-xay-dung">
                      Vệ sinh sau xây dựng
                    </a>
                  </li>
                  <li>
                    <a href="/my-cleanpro/ve-sinh-kinh">Vệ sinh kính</a>
                  </li>
                  <li>
                    <a href="/my-cleanpro/ve-sinh-cong-nghiep-dinh-ki">
                      Vệ sinh công nghiệp định kỳ
                    </a>
                  </li>
                </ul>
              </li>

              {/* Dropdown Giặt ủi */}
              <li
                className={`dropdown ${
                  isMobile && openDropdown === "giat-ui" ? "open" : ""
                }`}
                onMouseEnter={() => handleMouseEnter("giat-ui")}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="/my-cleanpro/dich-vu-giat-ui"
                  onClick={(e) => handleDropdownClick("giat-ui", e)}
                >
                  DỊCH VỤ GIẶT ỦI <i className="fas fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/my-cleanpro/ve-sinh-rem">Giặt thảm</a>
                  </li>
                  <li>
                    <a href="/my-cleanpro/giat-ghe-sofa">Giặt ghế sofa</a>
                  </li>
                  <li>
                    <a href="/my-cleanpro/ve-sinh-rem">Giặt nệm</a>
                  </li>
                  <li>
                    <a href="/my-cleanpro/ve-sinh-rem">Giặt rèm</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/my-cleanpro/du-an">DỰ ÁN</a>
              </li>
              <li>
                <a href="/my-cleanpro/tin-tuc">TIN TỨC</a>
              </li>
              <li>
                <a href="/my-cleanpro/lien-he" className="contact-button">
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Row 3 */}
      <div className="header-row-3">
        <div className="row-content container">
          Dịch vụ vệ sinh công nghiệp Clean Dragon
        </div>
      </div>
    </header>
  );
};

export default Header;
