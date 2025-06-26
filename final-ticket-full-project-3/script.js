
let startTime = null;

document.addEventListener("DOMContentLoaded", () => {
  const triggerBtn = document.querySelector(".primary");
  const ticketInfo = document.getElementById("ticket-info");
  const purchaseStatus = document.getElementById("purchase-status");
  const timerDisplay = document.getElementById("clock");

  if (triggerBtn) {
    triggerBtn.addEventListener("click", () => {
      ticketInfo.classList.remove("active");

      setTimeout(() => {
        ticketInfo.classList.add("active");

        const timeText = timerDisplay.innerText;
        const [hour, minute, second] = timeText.split("：").map(Number);

        const isAfter120001 =
          hour > 12 || (hour === 12 && (minute > 0 || second > 0));

        if (isAfter120001) {
          purchaseStatus.innerHTML = '<button class="buy-btn" onclick="goToPurchase()">立即購買</button>';
        } else {
          purchaseStatus.innerText = "即將開賣";
        }
      }, 400);
    });
  }
});

function startCountdown() {
  let currentHour = 11;
  let currentMinute = 59;
  let currentSecond = 55;

  const timerDisplay = document.getElementById("clock");

  function updateDisplay() {
    let h = String(currentHour).padStart(2, "0");
    let m = String(currentMinute).padStart(2, "0");
    let s = String(currentSecond).padStart(2, "0");
    timerDisplay.innerText = `${h}：${m}：${s}`;
  }

  updateDisplay();
  let steps = 6;

  const interval = setInterval(() => {
    currentSecond++;
    if (currentSecond === 60) {
      currentSecond = 0;
      currentMinute++;
      if (currentMinute === 60) {
        currentMinute = 0;
        currentHour++;
      }
    }

    updateDisplay();
    steps--;

    if (steps <= 0) {
      clearInterval(interval);
      const now = Date.now();
      startTime = new Date(now);
      localStorage.setItem("startTime", now); // 儲存計時起點
    }
  }, 1000);
}

function goToPurchase() {
  localStorage.setItem("flowStartTime", Date.now()); // ✅ 紀錄搶票流程起點時間
  window.location.href = "question.html";
}
