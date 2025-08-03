import { Link } from "react-router-dom";
import home3 from "../assets/file/cauthangnha.jpg"; // Import hình ảnh đã được tải lên
import home13 from "../assets/home-2.jpg";
import home12 from "../assets/home-3.jpg";
import "./AfterconstructionCleaning.css";
const AfterconstructionCleaning = () => {
  return (
    <div>
      <div className="breadcrumb-section-after">
        <div className="breadcrumb-content-after">
          <h2>Dịch Vụ Vệ Sinh Sau Xây Dựng</h2>
          <p>
            <span className="home-icon">🏠</span>
            <Link to="/">Trang chủ</Link> / Dịch Vụ Vệ Sinh Sau Xây Dựng
          </p>
        </div>
      </div>
      <div className="after-construction-cleaning-container">
        <p>
          Sau khi công trình xây dựng hoàn tất, dù là nhà ở, căn hộ, văn phòng
          hay nhà xưởng, đều để lại một khối lượng lớn bụi bẩn, vết sơn, vôi
          vữa, xi măng, rác thải và mùi vật liệu xây dựng. Không gian lúc này
          chưa thể đưa vào sử dụng ngay mà cần được làm sạch toàn diện. Dịch vụ
          vệ sinh sau xây dựng ra đời như một giải pháp chuyên nghiệp, giúp “lột
          xác” công trình mới thành không gian sạch sẽ, khang trang, sẵn sàng
          bàn giao hoặc đưa vào sử dụng.
        </p>

        <h1>Vệ sinh sau xây dựng là gì?</h1>

        <p>
          Vệ sinh sau xây dựng là quy trình làm sạch tổng thể toàn bộ công trình
          sau quá trình thi công hoặc cải tạo. Dịch vụ này đòi hỏi phải xử lý
          nhiều loại bụi bẩn đặc thù như bụi mịn, xi măng khô bám trên sàn, vết
          sơn dính trên kính, keo dán, dầu mỡ kỹ thuật,... Do đó, cần có trang
          thiết bị chuyên dụng, hóa chất phù hợp, cùng đội ngũ nhân sự có kinh
          nghiệm thực tế.
        </p>

        <p>
          Khác với vệ sinh thông thường, đây là công đoạn có tính kỹ thuật cao,
          yêu cầu đảm bảo an toàn cho bề mặt vật liệu (kính, gỗ, inox, đá, sơn
          tường) và làm sạch trong thời gian ngắn để kịp tiến độ bàn giao.
        </p>

        {/* Hiển thị hình ảnh từ file đã upload */}
        <div className="image-container">
          <img src={home3} alt="Vệ sinh sau xây dựng chuyên nghiệp" />
        </div>

        {/* Thêm nội dung mới từ hình ảnh thứ hai */}
        <h2 className="section-title">
          Tại sao cần dịch vụ vệ sinh sau xây dựng chuyên nghiệp?
        </h2>
        <div className="content-columns">
          <div className="column-item">
            <h3>1. Làm sạch sâu, toàn diện và triệt để</h3>
            <p>
              Công trình sau xây dựng chứa rất nhiều bụi mịn – loại bụi mà
              thường khó thấy và khó làm sạch bằng phương pháp thông thường.
              Ngoài ra, những vết bẩn cứng đầu như keo silicone, sơn, xi măng
              bám bẩn cần hóa chất chuyên dụng để xử lý mà không làm hư hỏng bề
              mặt.
            </p>
          </div>
          {/* Thêm các mục khác vào đây nếu có */}
          <div className="column-item">
            <h3>2. Tiết kiệm thời gian và công sức</h3>
            <p>
              Với đội ngũ chuyên nghiệp, quy trình làm sạch được thực hiện nhanh
              chóng, hiệu quả, giúp bạn tiết kiệm thời gian và công sức đáng kể.
            </p>
          </div>
          <div className="column-item">
            <h3>3. Đảm bảo an toàn</h3>
            <p>
              Các chuyên gia vệ sinh được trang bị đầy đủ dụng cụ bảo hộ và hóa
              chất an toàn, đảm bảo không gây hại cho sức khỏe và môi trường.
            </p>
          </div>
          <div className="column-item">
            <h3>4. Tăng tuổi thọ công trình</h3>
            <p>
              Việc làm sạch đúng cách giúp bảo vệ bề mặt vật liệu, tăng độ bền
              và tuổi thọ cho công trình.
            </p>
          </div>
          <div className="column-item">
            <h3>5. Đưa vào sử dụng nhanh chóng</h3>
            <p>
              Sau khi được vệ sinh, công trình sẽ sẵn sàng để bàn giao và đưa
              vào sử dụng ngay lập tức mà không cần chờ đợi.
            </p>
          </div>
        </div>
        <h2 className="section-title">Các hạng mục vệ sinh sau xây dựng</h2>
        <p>Tùy vào đặc điểm từng công trình, dịch vụ sẽ bao gồm:</p>

        {/* Hiển thị hình ảnh mới */}
        <div className="image-container">
          <img src={home12} alt="Các hạng mục vệ sinh sau xây dựng" />
        </div>

        <ul className="cleaning-list">
          <li>
            Vệ sinh trần, tường, góc khuất: xử lý mạng nhện, bụi bẩn, vết sơn
          </li>
          <li>Lau chùi hệ thống cửa, kính, khung nhôm, tay vịn cầu thang</li>
          <li>Chà sàn, làm sạch vết xi măng, sơn rơi rớt trên nền nhà</li>
          <li>Lau bụi hệ thống đèn, quạt, điều hòa, tủ điện</li>
          <li>Vệ sinh nhà vệ sinh, lavabo, bồn cầu, gạch men</li>
          <li>Lau dọn thiết bị nội thất, tủ bếp, bàn ghế (nếu có)</li>
          <li>Thu gom rác thải, phế liệu xây dựng</li>
          <li>Hút bụi tổng thể, lau sạch mọi bề mặt</li>
        </ul>
        <h2 className="section-title">
          Quy trình vệ sinh sau xây dựng chuyên nghiệp
        </h2>
        <ul className="cleaning-list">
          <li>
            <b>1. Khảo sát công trình thực tế:</b> Đo đạc diện tích, đánh giá
            mức độ bụi bẩn, xác định các vị trí cần xử lý kỹ.
          </li>
          <li>
            <b>2. Tư vấn phương án làm sạch và báo giá:</b> Tối ưu hóa nhân lực,
            thiết bị và thời gian thực hiện.
          </li>
          <li>
            <b>3. Ký hợp đồng và lên lịch thi công:</b> Đảm bảo tiến độ phù hợp
            với lịch trình bàn giao công trình.
          </li>
          <li>
            <b>4. Triển khai vệ sinh đúng quy trình kỹ thuật:</b> Sử dụng máy
            hút bụi công nghiệp, hóa chất chuyên dụng, dụng cụ bảo hộ đầy đủ.
          </li>
          <li>
            <b>5. Nghiệm thu và bàn giao kết quả:</b> Đảm bảo không gian sạch
            sẽ, không còn bụi bẩn, rác thải, không hôi mùi hóa chất.
          </li>
        </ul>

        <h2 className="section-title">Trang thiết bị và hóa chất sử dụng</h2>
        <ul className="cleaning-list">
          <li>Máy hút bụi công nghiệp: Xử lý bụi mịn trong diện tích lớn</li>
          <li>Máy chà sàn liên hợp: Làm sạch sàn gạch, đá, bê tông</li>
          <li>Cần gạt kính, hóa chất tẩy sơn, keo, xi măng chuyên dụng</li>
          <li>Giàn giáo, thang nhôm để tiếp cận trần cao, góc khuất</li>
          <li>Khăn lau microfiber, bao tay cao su, khẩu trang y tế</li>
        </ul>

        {/* Hiển thị hình ảnh mới nhất */}
        <div className="image-container">
          <img src={home13} alt="Quy trình vệ sinh và trang thiết bị" />
        </div>
        <h2 className="section-title">
          Khi nào nên gọi dịch vụ vệ sinh sau xây dựng?
        </h2>
        <ul className="cleaning-list">
          <li>Ngay sau khi công trình thi công xong phần hoàn thiện</li>
          <li>Trước khi bàn giao cho khách hàng, người thuê, chủ đầu tư</li>
          <li>Trước khi chuyển vào ở hoặc đưa vào sử dụng</li>
          <li>Khi không có đủ nhân sự và dụng cụ để tự làm sạch</li>
        </ul>

        <h2 className="section-title">Lựa chọn đơn vị vệ sinh uy tín</h2>
        <p>Để đảm bảo chất lượng, bạn nên lựa chọn các đơn vị:</p>
        <ul className="cleaning-list">
          <li>Có kinh nghiệm thi công nhiều công trình sau xây dựng</li>
          <li>
            Đội ngũ nhân viên được đào tạo bài bản, có kỹ năng xử lý vật liệu
          </li>
          <li>Trang thiết bị hiện đại, hóa chất được cấp phép sử dụng</li>
          <li>Báo giá minh bạch, hợp đồng rõ ràng, thi công đúng tiến độ</li>
          <li>Chính sách bảo hành và hỗ trợ sau dịch vụ</li>
        </ul>

        <h2 className="section-title">Kết luận</h2>
        <p>
          Dịch vụ vệ sinh sau xây dựng là bước hoàn thiện không thể thiếu để đưa
          công trình vào sử dụng đúng nghĩa. Việc lựa chọn đơn vị uy tín sẽ giúp
          bạn tiết kiệm thời gian, chi phí và đảm bảo chất lượng vệ sinh tối ưu
          mà không làm ảnh hưởng đến kết cấu, nội thất hay bề mặt vật liệu. Hãy
          đầu tư đúng lúc để công trình của bạn thật sự hoàn hảo ngay từ những
          chi tiết đầu tiên.
        </p>
      </div>
    </div>
  );
};

export default AfterconstructionCleaning;
