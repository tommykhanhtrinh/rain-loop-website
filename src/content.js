export const site = {
  name: 'RainLoop', team: 'The Creative Creature',
  slogan: 'Học từ tự nhiên. Thiết kế cho cuộc sống.',
  description: 'Hệ thống thu gom nước mưa, lọc sơ bộ, trữ tạm và tưới vùng rễ.',
  school: 'Trường Đinh Thiện Lý', course: 'Thiết kế & Công nghệ · Lớp 12',
  logo: 'assets/rainloop-logo.png', contact: null,
  // Local, licensed assets only. Leave null until supplied and recorded in docs/SOURCES.md.
  heroVideo: null, heroPoster: null,
};

export const pages = [
  { id: 'index', title: 'Trang chủ', short: 'Trang chủ' },
  { id: 'nghien-cuu', title: 'Nghiên cứu', short: 'Nghiên cứu' },
  { id: 'nhat-ky', title: 'Nhật ký thiết kế', short: 'Nhật ký' },
  { id: 'thiet-ke', title: 'Thiết kế', short: 'Thiết kế' },
  { id: 'vat-lieu', title: 'Vật liệu & Mô hình', short: 'Vật liệu & Mô hình' },
  { id: 'doi-ngu', title: 'Đội ngũ', short: 'Đội ngũ' },
];

export const research = [{
  id: 'dat-ngap-nuoc', name: 'Đất ngập nước', category: 'Hệ sinh thái', status: 'selected',
  statusLabel: 'Được chọn', eyebrow: 'Cảm hứng chính', image: 'assets/rainloop-card-wetland.webp',
  original: 'assets/originals/rainloop-card-wetland.png',
  imageAlt: 'Minh họa AI: đất ngập nước với cây, vùng rễ và vòng nước trên nền xanh rừng',
  accent: 'forest', implementation: 'Đã chuyển hóa vào concept',
  facts: [
    ['Cấu trúc & cơ chế', 'Vùng trũng, nền đất và thảm thực vật giữ nước, cản dòng; dòng chậm tạo điều kiện cho cặn lắng.'],
    ['Chức năng', 'Giữ tạm nước và làm chậm dòng chảy trong hệ sinh thái.'],
    ['Cấp độ phỏng sinh học', 'Hệ sinh thái: học cách kết nối nhiều chức năng trong một hệ thống.'],
    ['Ứng dụng RainLoop', 'Ba hộp ngầm: thu nước, lọc sơ bộ, trữ tạm; van và ống tưới đưa nước tới vùng rễ.']
  ],
  summary: 'Học cách giữ nước, làm chậm dòng chảy và kết nối nước với vùng rễ.',
  identity: 'Một hệ sinh thái có điều kiện ngập nước thường xuyên hoặc theo mùa; không phải một loài sinh vật.',
  structure: 'Nước, nền đất hoặc trầm tích và thảm thực vật tương tác trong cùng một hệ thống.',
  function: 'Khả năng lưu giữ nước và làm biến đổi chất lượng nước phụ thuộc cấu trúc, điều kiện môi trường và thời gian lưu.',
  mechanism: 'Dòng chảy chậm có thể tạo điều kiện cho hạt lơ lửng lắng xuống. Tương tác với nền đất, rễ và vi sinh vật là các quá trình khác nhau, cần tài liệu chuyên môn để mô tả định lượng.',
  principle: 'Tách việc thu, giữ tạm và phân phối nước thành các chức năng liên kết; dùng lớp vật liệu để lọc sơ bộ trước khi cấp tới vùng rễ.',
  application: 'Các hộp ngầm có lớp lọc, khoang nước và đường ống tới bồn cây. Đây là chuyển hóa ý tưởng, không tái tạo đầy đủ một hệ sinh thái đất ngập nước.',
  decision: 'Được chọn làm cảm hứng chính; đã chuyển hóa vào concept và RL-001. Các cảm hứng cũ khác còn cần đối chiếu tài liệu nhóm.',
  source: 'Tư liệu nhóm: PowerPoint UPDATE KTTX lần 2 và RL-001. Bổ sung nguồn nền tảng EPA để đối chiếu; không thay cho liên kết AskNature và bài nghiên cứu riêng của nhóm.',
  sourceLinks: [{ label: 'EPA · Chức năng và giá trị đất ngập nước', url: 'https://www.epa.gov/sites/default/files/2021-01/documents/functions_values_of_wetlands.pdf' }],
  drawingId: 'concept', hotspotId: 'lop-loc'
}, {
  id: 'mao-dan', name: 'Mao dẫn', category: 'Cơ chế / Quy trình', status: 'selected',
  statusLabel: 'Được chọn', eyebrow: 'Hướng phát triển', image: 'assets/rainloop-card-capillary.webp',
  original: 'assets/originals/rainloop-card-capillary.png',
  imageAlt: 'Minh họa AI: sợi vật liệu thấm nước, giọt nước và vùng rễ trên nền xanh nước',
  accent: 'water', implementation: 'Chưa tích hợp vào blueprint',
  summary: 'Gợi mở cách dẫn nước từ bồn chứa tới vùng rễ bằng vật liệu thấm nước.',
  identity: 'Mao dẫn là cơ chế vật lý; không phải tên một loài. Thẻ dùng sợi thấm nước để minh họa hướng ứng dụng đã được nhóm chọn.',
  structure: 'Khe nhỏ trong vật liệu xốp hoặc giữa các sợi tạo đường tiếp xúc cho nước.',
  function: 'Di chuyển nước trong các khe nhỏ, có thể ngược chiều trọng lực trong giới hạn nhất định.',
  mechanism: 'Bám dính, liên kết giữa các phân tử nước và sức căng bề mặt cùng tham gia. Độ cao và lượng nước chuyển phụ thuộc vật liệu, kích thước khe và trọng lực.',
  principle: 'Chọn vật liệu thấm nước liên tục, nối vùng chứa nước với nơi cần giữ ẩm; kiểm tra chiều cao nâng nước và lượng nước chuyển trước khi ứng dụng.',
  application: 'Dự kiến dùng dây hoặc vật liệu dẫn nước từ khoang chứa tới vùng rễ. Chưa có chi tiết này trong concept hoặc bản RL-001, chưa có dữ liệu thử nghiệm.',
  decision: 'Được chọn về định hướng theo xác nhận của nhóm trong trao đổi. Cần bổ sung vật liệu, chi tiết bản vẽ và thử nghiệm trước khi ghi là đã triển khai.',
  source: 'Định hướng ứng dụng theo xác nhận của nhóm; cơ chế nền tảng đối chiếu USGS. Liên kết AskNature và bài nghiên cứu của nhóm vẫn cần bổ sung.',
  sourceLinks: [{ label: 'USGS · Mao dẫn và nước', url: 'https://www.usgs.gov/water-science-school/science/capillary-action-and-water' }],
  facts: [
    ['Cấu trúc & cơ chế', 'Khe nhỏ giữa các sợi thấm nước; bám dính, liên kết nước và sức căng bề mặt cùng tham gia.'],
    ['Chức năng', 'Dẫn nước trong vật liệu xốp, có giới hạn chiều cao và lượng nước chuyển.'],
    ['Cấp độ phỏng sinh học', 'Quy trình: học nguyên lý vận chuyển nước; không bắt chước hình dáng sinh vật.'],
    ['Ứng dụng RainLoop', 'Dây hoặc vật liệu nối bồn chứa với vùng rễ; đang chờ bản vẽ chi tiết và thử nghiệm.']
  ]
}];

export const timeline = [
  { title: 'Bắt đầu từ một cơn mưa', stage: 'Quan sát vấn đề', status: 'Đang thực hiện', text: 'Nhóm nêu hiện tượng nước mưa đọng hoặc thoát chậm ở sân trường, cùng nhu cầu chăm sóc cây.', learned: 'Cần phân biệt quan sát ban đầu với số liệu đo tại hiện trường.', next: 'Bổ sung ảnh vị trí, thời điểm quan sát và thời gian nước rút.', evidence: 'Mô tả trong yêu cầu dự án; chưa có ảnh khảo sát.' },
  { title: 'Đặt đúng câu hỏi', stage: 'Xác định nhu cầu', status: 'Đang thực hiện', text: 'Làm thế nào để thu và giữ tạm nước mưa ở sân trường, rồi đưa nước tới vùng rễ theo cách có thể vệ sinh và kiểm chứng?', learned: 'Một giải pháp cần được đánh giá đồng thời ở nơi thu nước và nơi sử dụng nước.', next: 'Xác nhận vị trí dự kiến, nhu cầu tưới và điều kiện sân trường.', evidence: 'Câu hỏi thiết kế đề xuất từ mô tả dự án.' },
  { title: 'Lắng nghe cách tự nhiên vận hành', stage: 'Nghiên cứu sinh học', status: 'Đang thực hiện', text: 'Đất ngập nước là nguồn cảm hứng chính được nêu trong thiết kế hiện tại.', learned: 'Lắng, lọc, thấm và quá trình sinh học có cơ chế khác nhau.', next: 'Bổ sung tài liệu gốc, nguồn ảnh và các thẻ nghiên cứu thực tế.', evidence: 'PowerPoint KTTX lần 2: nguồn cảm hứng đất ngập nước; link AskNature và bài nghiên cứu của nhóm đang chờ bổ sung.' },
  { title: 'Từ hệ sinh thái đến nguyên lý', stage: 'Chọn nguyên lý thiết kế', status: 'Đang thực hiện', text: 'Tổ chức chuỗi chức năng thu nước, lọc sơ bộ, trữ tạm và cấp nước vùng rễ.', learned: 'Mô phỏng chức năng cần đi kèm điều kiện vận hành cụ thể.', next: 'Đối chiếu nguyên lý với bản vẽ và cao độ dự kiến.', evidence: 'Mô tả phương án trong yêu cầu dự án.' },
  { title: 'Ba hộp, một hướng phát triển', stage: 'Phác thảo & so sánh', image: 'assets/rainloop-hand-sketch.webp', imageTitle: 'Sketch tay ban đầu', status: 'Đã có bản vẽ', text: 'Phương án được mô tả có ba hộp ngầm, ống nối thấp và một van trước bồn cây.', learned: 'Sketch tay ban đầu đã được phát triển thành ba hộp ngầm, ống thẳng và hố kỹ thuật tiếp cận van.', next: 'Đối chiếu các góc nhìn, vị trí van và kích thước trước khi chế tạo.', evidence: 'Sketch tay, phác thảo minh họa, concept, bản RL-001 và render tổng thể đã được cung cấp.' },
  { title: 'Mỗi thay đổi cần một lý do', stage: 'Phản hồi & chỉnh sửa', status: 'Đã có bản vẽ', image: 'assets/rainloop-blueprint.webp', imageTitle: 'Blueprint RL-001 — Version 1', text: 'Bản RL-001 thể hiện hộp nằm dưới đất, nắp ngang mặt đất, ống nối thẳng thấp và một van trước bồn cây.', learned: 'Mặt bằng, mặt cắt và phối cảnh cần thống nhất về cấu tạo và cao độ.', next: 'Đối chiếu các thông số ghi trên bản vẽ và bổ sung phản hồi có nguồn khi nhận được.', evidence: 'Bản RL-001, Version 1; thiết kế: Khánh Trình, kiểm tra: Phúc Nguyên.' },
  { title: 'Đưa ý tưởng vào vật liệu', stage: 'Chuẩn bị & chế tạo', status: 'Đang chuẩn bị', text: 'Lập danh mục vật liệu, đối chiếu quy cách và chuẩn bị quy trình lắp ráp.', learned: 'Chi phí mô hình học tập khác chi phí triển khai thực tế.', next: 'Xác nhận bảng vật liệu, nguồn giá và ảnh chế tạo.', evidence: 'Đã có bảng vật liệu trong PowerPoint và RL-001; chưa có ảnh mô hình vật lý.' },
  { title: 'Đo lường để cải tiến', stage: 'Kiểm chứng & cải tiến', status: 'Dự kiến', text: 'Nhóm chưa thử nghiệm. Kế hoạch tập trung vào rò rỉ, đường nước, van, vùng rễ và thoát nước dư.', learned: 'Chỉ kết luận hiệu quả sau khi có phép đo và điều kiện thử rõ ràng.', next: 'Chốt cách đo và ngưỡng đánh giá trước khi thử.', evidence: 'Kế hoạch kiểm chứng; chưa có kết quả.' }
];

export const hotspots = [
  { id: 'nap-thu', name: 'Nắp thu nước', n: '01', x: 19, y: 26, text: 'Nắp đục lỗ ngang mặt đất theo mô tả dự án. Cần kiểm tra nước đi qua và khả năng vệ sinh rác trên bề mặt.' },
  { id: 'lop-loc', name: 'Lớp lọc', n: '02', x: 35, y: 35, text: 'Sỏi lớn, sỏi nhỏ, cát thô và vải lọc phục vụ lọc sơ bộ. Thứ tự, chiều dày và hiệu quả cần đối chiếu bản vẽ và thử nghiệm.' },
  { id: 'khoang-chua', name: 'Khoang chứa', n: '03', x: 19, y: 46, text: 'Khoang nước bên dưới lớp lọc dùng để trữ tạm. Bản RL-001 thể hiện khoang chứa bên dưới lớp lọc. Dung tích hữu dụng cần đối chiếu kích thước trong và thể tích chiếm chỗ trước khi tính.' },
  { id: 'ong-noi', name: 'Ống nối', n: '04', x: 43, y: 43, text: 'Ống nối ở vị trí thấp giữa các hộp. Dòng chảy phụ thuộc chênh lệch mực nước và tổn thất, không mặc định phân phối theo thứ tự.' },
  { id: 'van', name: 'Van điều tiết', n: '05', x: 64, y: 41, text: 'Một van ở đoạn chuyển từ hộp cuối tới bồn cây, trong hố kỹ thuật có nắp tiếp cận. Mở van không tự bảo đảm nước tới vùng rễ.' },
  { id: 'vung-tuoi', name: 'Vùng tưới', n: '06', x: 82, y: 43, text: 'Ống đục lỗ cấp nước dưới bồn cây. Cần kiểm tra độ ẩm vùng rễ và lối thoát nước dư khi bồn đầy.' }
];

export const drawings = [
  { id: 'sketch', title: 'Sketch tay ban đầu', sourceName: 'image(2).png', kind: 'Phác thảo', src: 'assets/rainloop-hand-sketch.webp', original: 'assets/originals/rainloop-hand-sketch.png' },
  { id: 'illustration', title: 'Phác thảo minh họa ý tưởng', sourceName: 'image.png', kind: 'Minh họa', src: 'assets/rainloop-sketch-illustration.webp', original: 'assets/originals/rainloop-sketch-illustration.png' },
  { id: 'concept', title: 'Concept & cấu tạo mô-đun', sourceName: 'image(1).png', kind: 'Concept', src: 'assets/rainloop-concept.webp', original: 'assets/originals/rainloop-concept.png' },
  { id: 'blueprint', title: 'Blueprint & mặt cắt kỹ thuật', sourceName: 'image(4).png', kind: 'Bản vẽ kỹ thuật', src: 'assets/rainloop-blueprint.webp', original: 'assets/originals/rainloop-blueprint.png' },
  { id: 'render', title: 'Render tổng thể nhiều góc nhìn', sourceName: 'image(3).png', kind: 'Render 3D', src: 'assets/rainloop-render-3d.webp', original: 'assets/originals/rainloop-render-3d.png' }
];

export const materials = [
  { name: 'Hộp thu & trữ nước', quantity: 3, unit: 'hộp', spec: 'Nhựa PP tái sử dụng', price: null, note: 'Theo PowerPoint KTTX lần 2. Kích thước BOM và mặt cắt RL-001 cần đối chiếu trước khi mua.' },
  { name: 'Nắp đục lỗ', quantity: 3, unit: 'cái', spec: 'Nhựa PP; lỗ Ø5 mm', price: null, note: 'Thu nước bề mặt, có thể tiếp cận vệ sinh.' },
  { name: 'Sỏi lớn, sỏi nhỏ', quantity: null, unit: 'kg', spec: null, price: null, note: 'Vật liệu lớp lọc sơ bộ.' },
  { name: 'Cát thô & vải lọc', quantity: null, unit: null, spec: null, price: null, note: 'Quy cách và chiều dày cần đối chiếu blueprint.' },
  { name: 'Ống nối & khớp nối', quantity: null, unit: 'bộ', spec: 'PVC Ø21; đầu nối xuyên vách và gioăng', price: null, note: 'Kết nối thấp giữa các hộp; cần kiểm tra kín nước.' },
  { name: 'Van & hố kỹ thuật', quantity: 1, unit: 'bộ', spec: 'Van DN15; hố kỹ thuật có nắp', price: null, note: 'Một van trước bồn cây theo mô tả.' },
  { name: 'Ống tưới đục lỗ', quantity: null, unit: 'm', spec: 'PVC Ø21, đục lỗ', price: null, note: 'Bố trí dưới vùng rễ; cần phương án thoát nước dư.' }
];

// Real deployment quantities and prices are independent from the learning model.
export const realMaterials = materials.map(item => ({ ...item, quantity: null, price: null }));

export const testPlan = [
  ['Độ kín của hệ thống', 'Rò rỉ hộp và khớp nối', 'Nạp nước trong điều kiện có kiểm soát, đánh dấu mực ban đầu, quan sát các mối ghép.', 'Mức nước thay đổi, vị trí rò, thời gian quan sát.'],
  ['Từ mặt đất tới khoang', 'Nước qua nắp và lớp lọc', 'Cấp lượng nước biết trước, ghi thời gian đi qua và quan sát tích tụ ở mặt nắp.', 'Lượng nước đầu vào/thu được, thời gian, hiện tượng tắc.'],
  ['Ba hộp liên kết', 'Mực nước và phân phối', 'Đặt hộp theo cao độ được xác nhận, quan sát mực nước khi cấp nước vào một hộp.', 'Cao độ, mực nước từng hộp, thời gian cân bằng.'],
  ['Điều tiết dòng nước', 'Van và đường tưới ngầm', 'Thử các trạng thái đóng/mở van với cùng điều kiện mực nước.', 'Trạng thái van, lượng nước qua đầu ra, rò rỉ.'],
  ['Đến đúng nơi cần', 'Nước đến vùng rễ', 'Ghi độ ẩm ở các vị trí và độ sâu trước/sau tưới.', 'Độ ẩm, vị trí đo, thời gian và lượng nước cấp.'],
  ['Khi bồn đầy', 'Thoát nước dư', 'Tăng lượng cấp có kiểm soát, theo dõi đường thoát và hiện tượng dâng ngược.', 'Mực nước lớn nhất, thời gian rút và vị trí tràn.'],
  ['Dễ chăm sóc lâu dài', 'Vệ sinh & bảo trì', 'Tiếp cận nắp, lớp lọc và van; thử tháo, vệ sinh và lắp lại.', 'Thời gian, thao tác khó, chi tiết cần thay.'],
  ['Phương án mở rộng', 'Mao dẫn — cần xác nhận', 'Chỉ thực hiện khi nhóm chốt vật liệu và bổ sung phương án mao dẫn.', 'Chiều cao nâng nước, lượng nước chuyển và thời gian.']
];

export const members = [
  { name: 'Khánh Trình', initials: 'KT', role: 'Quản lý dự án & Trưởng nhóm phát triển website', task: 'Điều phối tiến độ, tổng hợp nội dung và phụ trách trải nghiệm website.', planned: false, image: null },
  { name: 'Anh Kiệt', initials: 'AK', role: 'Phát triển website', task: 'Xây dựng giao diện, tương tác và hỗ trợ kiểm tra các trang.', planned: false, image: null },
  { name: 'Phúc Nguyên', initials: 'PN', role: 'Phụ trách chế tạo mô hình & Nguyên vật liệu', task: 'Chuẩn bị danh mục vật liệu và tổ chức công việc chế tạo.', planned: false, image: null },
  { name: 'Đức Tùng', initials: 'ĐT', role: 'Chế tạo mô hình', task: 'Dự kiến hỗ trợ gia công các bộ phận theo bản vẽ được xác nhận.', planned: true, image: null },
  { name: 'Gia Huy', initials: 'GH', role: 'Lắp ráp & Thử nghiệm', task: 'Dự kiến lắp ráp hệ thống và ghi nhận các phép thử.', planned: true, image: null },
  { name: 'Hiển Minh', initials: 'HM', role: 'Hỗ trợ lắp ráp', task: 'Dự kiến hỗ trợ lắp ráp và chuẩn bị khu vực kiểm chứng.', planned: true, image: null }
];

export const faq = [
  ['RainLoop học điều gì từ tự nhiên?', 'Dự án lấy cảm hứng từ đất ngập nước ở cấp độ hệ sinh thái: giữ nước, làm chậm dòng chảy và kết nối các chức năng. Các hộp lọc không tái tạo đầy đủ quá trình sinh học của đất ngập nước.'],
  ['Khác gì với thoát nước thông thường?', 'Phương án hướng tới giữ tạm và sử dụng một phần nước cho vùng rễ, bên cạnh việc thu nước. Hiệu quả thực tế chưa được thử nghiệm.'],
  ['Vì sao van nằm trước bồn cây?', 'Theo mô tả hiện tại, van đặt giữa hộp cuối và bồn cây để tiếp cận điều tiết, trong hố kỹ thuật có nắp. Cần xác nhận cao độ và điều kiện dòng chảy.'],
  ['Điều gì xảy ra khi bồn đầy?', 'Thiết kế cần đường thoát nước dư. Vị trí, cao độ và khả năng thoát phải được xác nhận qua bản vẽ và thử nghiệm tình huống đầy.'],
  ['Hệ thống được bảo trì thế nào?', 'Cần tiếp cận nắp thu, lớp lọc và van để lấy rác, vệ sinh hoặc thay vật liệu. Tần suất bảo trì chưa được xác định.'],
  ['Nước sau lọc có uống được không?', 'Không có cơ sở để kết luận nước uống được. RainLoop mới đề xuất lọc sơ bộ và cấp nước vùng rễ; chưa có kết quả kiểm tra chất lượng nước.']
];
