
document.addEventListener("DOMContentLoaded", () => {
  const multipleChoiceQuestions = [
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
      options: ["ASTERUM: The Shape of Things to Come", "ASTERUM: 134-1", "Caligo Pt.1 "],
      answer: "3"
    },
    {
      question: "PLAVE 第一次獲得音樂節目一位的歌曲是？",
      options: ["Way 4 Luve", "Wait For You", "DASH "],
      answer: "1"
    },
    {
      question: "PLAVE 哪一張專輯的主打歌是〈Way 4 Luv〉？",
      options: ["ASTERUM", "ASTERUM: 134-1", "Caligo Pt.1 "],
      answer: "2"
    },
    {
      question: "PLAVE 的出道曲是哪一首？",
      options: ["DASH", "Way 4 Luv", "Wait For You "],
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
      options: ["M Countdown", "Music Bank", "Show! MusicCore"],
      answer: "3"
    },
    {
      question: "《Caligo Pt.1》專輯發行僅多久就在專輯串流播放次數突破 100 萬次？",
      options: ["1小時30分鐘", "9小時40分鐘", "2小時20分鐘"],
      answer: "3"
    },
    {
      question: "單曲《Pump Up The Volume!》分別空降於20日晚間7點的韓國Melon TOP100榜、HOT100榜及Bugs音源榜第幾名？",
      options: ["1,1,2", "10,1,1", "2,10,1"],
      answer: "2"
    },
    {
      question: "銀虎的代表動物是什麼？",
      options: ["狐狸", "狼", "黑豹"],
      answer: "2"
    },
    {
      question: "藝俊最常做的習慣是什麼？",
      options: ["哼歌", "擦護唇膏", "看書"],
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
      answer: "2"
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
      question: "成員加入PLAVE的順序為何？(1)諾亞 (2)藝俊 (3)銀虎 (4)哈民 (5)班比",
      options: ["24531", "34125", "21354"],
      answer: "3"
    },
   {
      question: "PLAVE首次團體直播日期為何？",
      options: ["2023年5月1日", "2023年12月3日", "2023年4月29日"],
      answer: "1"
    },
    {
      question: "PLAVE 第一支達到 YouTube 破千萬觀看的 MV 是哪一首？",
      options: ["Way 4 Luv", "Wait For You", "The 6th Summer"],
      answer: "2"
    }
  ];

  const specialQuestions = [
    {
      question: "PLAVE 成員斑比的生日（年/月/日）和銀虎的生日（年/月/日）加總是多少？",
      answer: "4056"
    },
    {
      question: "PLAVE 成員哈民的生日（年/月/日）和藝俊的生日（年/月/日）加總是多少？",
      answer: "2034"
    },
    {
      question: "PLAVE 成員諾亞的生日（年/月/日）和銀虎的生日（年/月/日）加總是多少？",
      answer: "4045"
    },
	{
      question: "各台(Mnet, KBS, MBC, SBS, MBC M, SBS M)冠軍歌曲獎座統計加總是多少？",
      answer: "5"
    },
    {
      question: "《왜요 왜요 왜? (Why?)》、《Merry PLLIstmas》、《Pump Up The Volume!》發行日期（年/月/日）加總是多少？",
      answer: "6152"
    },
    {
      question: "《ASTERUM : The Shape of Things to Come》、《ASTERUM : Asterum: 134-1》、《Caligo Pt.1》三張迷你專輯發行日期（年/月/日）加總是多少？",
      answer: "6137"
    }
  ];

  const isSpecial = Math.random() < 0.5;
  const questionList = document.getElementById("question-list");
  const singleQuestion = document.getElementById("single-question");
  const answerInput = document.getElementById("user-answer");
  const submitBtn = document.getElementById("submit-btn");
  const instruction = document.getElementById("answer-instruction");

  if (isSpecial) {
    instruction.innerHTML = "請輸入最終加總的數字（例如：1234）";
    questionList.style.display = "none";
    singleQuestion.style.display = "block";

    const selectedSpecial = specialQuestions[Math.floor(Math.random() * specialQuestions.length)];
    singleQuestion.innerHTML = `<p>Q. ${selectedSpecial.question}</p>`;

    submitBtn.onclick = () => {
      const ans = answerInput.value.trim();
      if (ans === selectedSpecial.answer) {
        alert("答對了！即將進入下一個頁面");
        window.location.href = "progress_header.html";
      } else {
        alert("答錯了，請再試一次！");
      }
    };

  } else {
    instruction.innerHTML = "依照題目順序答題，並將答案以半型英文(阿拉伯數字)，於答題格合併作答（中間不需空格）<br>ex.963";
    const selected = shuffle([...multipleChoiceQuestions]).slice(0, 3);
    questionList.style.display = "block";
    singleQuestion.style.display = "none";
    questionList.innerHTML = "";

    selected.forEach((q, idx) => {
      const block = document.createElement("div");
      block.className = "question-block";
      let html = `<p>Q${idx + 1}. ${q.question}</p>`;
      q.options.forEach((opt, i) => {
        html += `<p>(${i + 1}) ${opt}</p>`;
      });
      block.innerHTML = html;
      questionList.appendChild(block);
    });

    submitBtn.onclick = () => {
      const ans = answerInput.value.trim();
      const correct = selected.map(q => q.answer).join("");
      if (ans === correct) {
        alert("答對了！即將進入下一個頁面");
        window.location.href = "progress_header.html";
      } else {
        alert("答錯了，請再試一次！");
      }
    };
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
});
