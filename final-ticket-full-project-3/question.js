const questionBank = [
  {
    question: "PLAVE出道日期為？",
    options: ["2022/12/24", "2023/3/12", "2023/5/1"],
    answer: "2"
  },
	
  {
    question: "以下哪一首是 PLAVE 的校園概念歌曲？",
    options: ["DASH", "The 6th Summer", "Pixel World"],
    answer: "2"
  },
	
  {
    question: "PLAVE 的日本出道曲是？",
    options: ["Hide and Seek", "Flower Rain", "Crystal"],
    answer: "1"
  },
	
  {
    question: "PLAVE 的官方應援棒叫什麼？",
    options: ["PLIGHT", "PLAVESTICK", "WAVE"],
    answer: "2"
  },
	
  {
    question: "PLAVE 首張突破百萬銷量的專輯是？",
    options: ["ASTERUM: The Shape of Things to Come", "ASTERUM: 134-1", "Caligo Pt.1"],
    answer: "3"
  },
	
	{
    question: "PLAVE 第一次獲得音樂節目一位的歌曲是？",
    options: ["Way 4 Luve", "Wait For You", "DASH"],
    answer: "1"
  },
	
	{
    question: "PLAVE 哪一張專輯的主打歌是〈Way 4 Luv〉？",
    options: ["ASTERUM", "ASTERUM: 134-1", "Caligo Pt.1"],
    answer: "2"
  },
	
	{
    question: "PLAVE 的出道曲是哪一首？",
    options: ["DASH", "Way 4 Luv", "Wait For You"],
    answer: "3"
  },
	
	{
    question: "哪位成員的代表色是紅色？",
    options: ["斑比", "河玟", "銀虎", "藝俊", "諾亞"],
    answer: "3"
  },
	
	{
    question: "生日在 2 月 10 日的成員是？",
    options: ["斑比", "河玟", "銀虎", "藝俊", "諾亞"],
    answer: "5"
  },
	
	{
    question: "成員斑比的代表動物是？",
    options: ["狗", "狼", "鹿", "海豚", "羊駝"],
    answer: "3"
  },
	
	{
    question: "以下哪位是 PLAVE 的隊長？",
    options: ["斑比", "河玟", "銀虎", "藝俊", "諾亞"],
    answer: "4"
  },
	
	{
    question: "PLAVE 的粉絲名是什麼？",
    options: ["DREAM", "PLIVER", "PLLI"],
    answer: "3"
  },
	
	{
    question: "PLAVE 是由哪家公司推出的虛擬男團？",
    options: ["VLAST", "HYBE", "CJ ENM"],
    answer: "1"
  },
	
  {
    question: "PLAVE 在虛擬形象背後由什麼技術支撐？",
    options: ["AI 語音模擬", "3D 動態捕捉", "動畫繪製合成"],
    answer: "2"
  },
  {
    question: "PLAVE 是在哪個節目中首次表演《Wait For You》？",
    options: ["M Countdown", "Music Bank", "Show Champion"],
    answer: "3"
  },
  {
    question: "銀虎的代表動物是什麼？",
    options: ["狐狸", "狼", "黑豹"],
    answer: "2"
  },
  {
    question: "藝俊最常在直播中提到的興趣是？",
    options: ["運動", "打電動", "看書"],
    answer: "2"
  },
  {
    question: "斑比在團內負責什麼角色？",
    options: ["主唱 + 編舞", "Rap 擔當", "隊長"],
    answer: "1"
  },
  {
    question: "PLAVE 迷你二輯《ASTERUM: The Shape of Things to Come》收錄了幾首歌曲？",
    options: ["3 首", "4 首", "5 首"],
    answer: "3"
  },
  {
    question: "在 PLAVE 的世界觀中，他們來自哪個虛構空間？",
    options: ["PLAVENIA", "PIXEL WORLD", "ASTERUM"],
    answer: "3"
  },
  {
    question: "河玟的生日是哪一天？",
    options: ["11 月 1 日", "10 月 13 日", "12 月 3 日"],
    answer: "1"
  },
  {
    question: "PLAVE 在哪個年份登上 Billboard Global 200？",
    options: ["2023 年", "2024 年", "2025 年"],
    answer: "3"
  },
  {
    question: "PLAVE 第一支達到 YouTube 破千萬觀看的 MV 是哪一首？",
    options: ["Way 4 Luv", "Wait For You", "The 6th Summer"],
    answer: "2"
  }
];


const questionListEl = document.getElementById("question-list");

// 隨機抽出三題
const randomQuestions = questionBank.sort(() => 0.5 - Math.random()).slice(0, 3);

// 顯示每一題
randomQuestions.forEach((q, index) => {
  const qHTML = `
    <p><strong>Q${index + 1}. ${q.question}</strong></p>
    <p>(1) ${q.options[0]}</p>
    <p>(2) ${q.options[1]}</p>
    <p>(3) ${q.options[2]}</p>
    <br/>
  `;
  questionListEl.innerHTML += qHTML;
});

document.getElementById("submit-btn").addEventListener("click", () => {
  const userInput = document.getElementById("user-answer").value.trim();
  const correct = randomQuestions.map(q => q.answer).join(" ");
  if (userInput === correct) {
    alert("答對了！即將進入選位...");
    window.location.href = "seat.html";
  } else {
    alert("答錯了！請再試一次");
  }
});
