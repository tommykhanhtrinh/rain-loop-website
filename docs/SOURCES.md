# Kiểm kê tư liệu và nguồn

| Tư liệu | Trạng thái | Cách sử dụng / nguồn |
| --- | --- | --- |
| `BRIEF.md` | Đã đọc | Bản yêu cầu người dùng gửi trong phiên xây dựng. Nguồn cho tên nhóm, slogan, màu, cấu tạo dự kiến và phân công. |
| `.agents/skills/cinematic-desktop-build/SKILL.md` | Đã đọc | Skill do người dùng cung cấp; hướng dẫn bố cục và quy trình. |
| `.agents/skills/cinematic-mobile-refinement/SKILL.md` | Đã đọc | Skill do người dùng cung cấp; hướng dẫn mobile. Yêu cầu RainLoop cụ thể được ưu tiên. |
| Logo RainLoop | Đã nhận | PNG nền trong suốt do người dùng cung cấp từ phiên tạo ảnh; dùng ở header, footer và trang nhận diện. |
| PowerPoint của nhóm | Đã đọc | `UPDATE KTTX Lần 2 CNCN - The Creative Creature (1).pptx`; đối chiếu cấu tạo, quy cách vật liệu và trạng thái thiết kế. Không suy ra kết quả thử nghiệm. |
| `image.png` | Đã nhận | Phác thảo minh họa ý tưởng; thư viện, thẻ nghiên cứu và so sánh. |
| `image(1).png` | Đã nhận | Concept mô-đun; bản vẽ tương tác, thư viện và Journal. |
| `image(2).png` | Đã nhận | Sketch tay; thư viện và Journal. |
| `image(3).png` | Đã nhận | Render tổng thể; thư viện và bảng cảm hứng hình dáng. |
| `image(4).png` | Đã nhận | Blueprint RL-001, mặt cắt và bảng vật liệu; thư viện và phần vật liệu. |
| Ảnh khảo sát / mô hình vật lý / ảnh nhóm | Chưa nhận | Hiện thông báo hoặc avatar chữ mẫu; không dùng chân dung AI. |
| Video thiên nhiên thật | Chưa nhận | Dùng nền SVG minh họa có nhãn. Mã hỗ trợ video có poster, tạm dừng, lazy load, giảm chuyển động và xử lý lỗi. |
| AskNature / bài nghiên cứu | Chưa có liên kết | Chỉ trình bày mức khái quát từ brief; yêu cầu đối chiếu nguồn trước khi tăng mức khẳng định. |
| `public/assets/wetland-illustration.svg` | Được tạo cho website | Minh họa vector viết bằng mã trong `scripts/art.mjs`. Không phải ảnh thật, ảnh AI, ảnh khảo sát hoặc bằng chứng nghiên cứu. |
| Hotspot và hoạt ảnh trên concept | Được tạo cho website | Lớp tương tác phủ lên concept đã cung cấp, đặt theo bộ phận trong ảnh. Dòng chuyển động chỉ minh họa, không xác nhận lưu lượng hoặc hiệu suất. |
| Be Vietnam Pro | Phụ thuộc có khóa phiên bản | Gói `@fontsource/be-vietnam-pro`; phân phối tự lưu trữ, không gọi Google Fonts. Giấy phép SIL OFL ở `FONT-LICENSE.txt`. |

Bộ thẻ mới được tạo bằng ImageGen của ChatGPT theo yêu cầu trực tiếp của người dùng. Không dùng ảnh stock hoặc video từ URL chưa kiểm chứng. Không sử dụng ảnh AI làm bằng chứng khảo sát hoặc kết quả thử nghiệm.

Khi nhận tư liệu mới, ghi tác giả, nguồn gốc, quyền sử dụng, ngày tham khảo và vị trí sử dụng. Giữ tệp gốc ngoài bộ asset tối ưu; chỉ đưa tài liệu được phép công bố vào repository công khai. Chỉ thêm link thật đã kiểm tra. Dữ liệu thiếu giữ `null`, không thay bằng số 0.

## Bản gốc và bản tối ưu

Năm ảnh thiết kế được lưu WebP để hiển thị; PNG gốc ở `public/assets/originals/` để đọc chi tiết và tải xuống. Không sửa chữ hoặc cấu trúc sản phẩm trong ảnh. Các tệp `image(5)`, `(7)`, `(8)`, `(9)` trùng các bản đã nhận; `image(6)` là bản chụp sketch có độ phân giải thấp hơn, ưu tiên bản `(2)`. Chữ nằm trong ảnh là nội dung gốc, không phải font HTML của website.

## Bộ thẻ tương tác (11/10/2026)

- Đã đọc ba tài liệu bài giảng buổi 2, buổi 3 và tuần 4 để đối chiếu cấu trúc nghiên cứu; ảnh yêu cầu tuần 9 xác nhận flipcard, grid và lightbox. Chỉ dùng các tài liệu làm nguồn nội dung, không công khai tệp bài giảng.
- Hai ảnh thẻ do công cụ ImageGen tích hợp ChatGPT tạo mới theo yêu cầu người dùng. Ảnh không chứa chữ, không phải ảnh thiên nhiên thật hoặc sơ đồ định lượng. Nhãn và thông tin là HTML có thể chỉnh sửa.
- `rainloop-card-wetland.webp` / PNG gốc: minh họa nghệ thuật đất ngập nước, thảm thực vật, vùng rễ và vòng nước. `rainloop-card-capillary.webp` / PNG gốc: minh họa sợi thấm nước, giọt nước và rễ. Được hiển thị trong mục Nghiên cứu và lightbox.
- Bản gốc ở `public/assets/originals/`; prompt đầy đủ ở `docs/CARD-ART-PROMPTS.json`. Cả hai ảnh 1086×1448 px; WebP chất lượng 90 chỉ đổi định dạng, không sửa đối tượng.
- Trạng thái đất ngập nước và mao dẫn đều do nhóm đã xác nhận lựa chọn. Mao dẫn chưa có chi tiết trong RL-001 nên vẫn ghi rõ chưa tích hợp; không đổi kết quả thử nghiệm.
- Nguồn nền tảng bổ sung được kiểm tra ngày 11/10/2026: USGS, “Capillary Action and Water”, https://www.usgs.gov/water-science-school/science/capillary-action-and-water; EPA, “Functions & Values of Wetlands”, https://www.epa.gov/sites/default/files/2021-01/documents/functions_values_of_wetlands.pdf. Các nguồn này bổ sung đối chiếu, không được gán là link AskNature/bài nghiên cứu do nhóm đã gửi.

## Giao diện theo hai ảnh tham chiếu — 11/10/2026

Hai ảnh tham chiếu do người dùng gửi (Haven và Verdro) định hướng thanh điều hướng dạng viên thuốc, phần mở đầu toàn cảnh thiên nhiên và các khối sáng bo tròn. Không dùng ảnh chụp giao diện làm ảnh nền hoặc sao chép thương hiệu, số liệu marketing từ mẫu.

- `assets/rainloop-wetland-panorama.webp`: phong cảnh minh họa bằng công cụ tạo ảnh tích hợp của ChatGPT; 1672 × 941, nguồn PNG trong `assets/originals/rainloop-wetland-panorama.png`.
- `assets/rainloop-wetland-island.webp`: khối thiên nhiên nổi minh họa ý tưởng bằng AI; 1536 × 1024, giữ alpha trong suốt; PNG trong `assets/originals/rainloop-wetland-island.png`.
- Prompt đầy đủ và công cụ: `docs/REFERENCE-REDESIGN-PROMPTS.json`.

Các ảnh trên phục vụ nhận diện thị giác, không phải ảnh khảo sát hay bằng chứng nghiên cứu. Website vẫn chưa có video thiên nhiên thật. Màu xanh rừng và xanh nước giữ vai trò nhận diện; xanh lá nhạt #D7EB8C và nền #FAFBF7 bổ sung cho giao diện mới. Logo, bản vẽ và thông tin khoa học của nhóm giữ nguyên.
