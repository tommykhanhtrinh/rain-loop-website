# Kết quả kiểm tra

Kiểm tra trên máy cloud của dự án, bằng Node.js 24.19.0 và Chromium 154. Kiểm thử dùng đầu ra `npm run build` được phục vụ tại base path `/rain-loop-website/`, không chỉ kiểm tra mã nguồn dev.

## Đã xác minh

- Production build thành công, tạo sáu trang, trang 404 và mẫu nhận diện.
- Sáu trang mở trực tiếp và tải lại; liên kết nội bộ, hash và asset trả về thành công.
- Không có lỗi JavaScript hoặc tràn ngang trong các trang được kiểm tra ở 1440×1000, 820×1180, 430×932 và 360×780.
- Thẻ lật, lọc trạng thái, trạng thái bộ lọc rỗng, cửa sổ nghiên cứu và liên kết tới đúng hotspot.
- Timeline, tab vật liệu bằng bàn phím, các mục kế hoạch kiểm chứng.
- Trình diễn qua cả sáu bước, khóa nút Tiếp tại bước cuối, thoát và khôi phục trang/vị trí cuộn.
- Menu mobile: giữ focus trong modal, Escape, trả focus, đóng khi chọn link; header vẫn hiện sau khi cuộn xuống cuối.
- Giảm chuyển động, tạm dừng chuyển động và ảnh minh họa thay thế đang dùng.
- Viewer ảnh: zoom, di chuyển bằng bàn phím, ảnh kế tiếp, reset zoom, Escape và trả focus; năm ảnh thiết kế tải được, liên kết tải PNG gốc đúng.
- Thanh so sánh ảnh, tư liệu Journal và blueprint ở mục vật liệu.
- Font Be Vietnam Pro tự lưu trữ có bộ ký tự tiếng Việt và chữ nghiêng thật; kiểm tra font đã tải.
- Con trỏ động, tắt/bật chuyển động toàn trang, ghi nhớ lựa chọn và chế độ giảm chuyển động trên desktop/mobile.
- Đã quan sát ảnh chụp trình duyệt desktop/mobile và kiểm tra cuộn qua các phần.

Bộ kiểm thử sau cập nhật gồm 52 trường hợp: 50 đạt, 2 trường hợp menu mobile không áp dụng trên desktop/tablet được bỏ qua. Production build thành công. Quan sát thêm giao diện 1440×1000 và 390×844 bằng ảnh chụp trình duyệt.

## Chưa kiểm chứng

- Video thật, lỗi tải video và việc xin quyền sử dụng: chưa có video được cung cấp. Không tạo request video giả; mã hỗ trợ được chuẩn bị nhưng chưa kiểm chứng bằng media thật.
- Ảnh mô hình thật và độ chính xác kỹ thuật của kích thước blueprint chưa được nhóm xác nhận. Hotspot đã đối chiếu với concept; PNG gốc mở được.
- Thao tác kéo ảnh trên thiết bị cảm ứng vật lý và trình đọc màn hình: chưa thử trên thiết bị thật. Kiểm thử trình duyệt chạy môi trường mô phỏng viewport/cảm ứng.
- Safari/Firefox: chưa chạy.
- Tốc độ trên mạng di động thật: chưa đo. Kích thước file không được xem như phép đo tốc độ.
- GitHub Pages công khai: cấu hình workflow có sẵn; trạng thái công khai chỉ được xác nhận sau khi truy cập và kiểm tra được deployment.

Không có kết quả thử nghiệm mô hình vật lý. Các phép kiểm tra trên đây là kiểm tra website.

## Kiểm tra bộ thẻ mới

- Hai thẻ và bốn mục thông tin riêng cho mỗi thẻ; lật thật bằng CSS 3D, trạng thái `inert`/`aria-hidden` và focus đúng; Esc quay lại mặt trước.
- Lưới lớn/gọn ghi nhớ sau reload, bộ lọc và số thẻ hiển thị hoạt động; phần mao dẫn không tạo link hotspot giả.
- Lightbox ảnh AI: tải PNG gốc, ảnh trước/tiếp, thumbnail giữ focus, zoom, vuốt qua pointer events, đóng và trả focus. Kiểm thử mô phỏng không thay kiểm tra cảm ứng trên thiết bị vật lý.
- Quan sát ảnh chụp ở 1440×1000 và 390×844; không tràn ngang. Lightbox trên điện thoại bố trí nút Đóng ở góc trên, ảnh theo tỷ lệ gốc.
