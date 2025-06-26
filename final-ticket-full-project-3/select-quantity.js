document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const zone = params.get("zone") || "未指定";
  const zoneParts = zone.split(" ");
  const zoneName = zoneParts.slice(0, -1).join(" ");
  const price = parseInt(zoneParts[zoneParts.length - 1]);

  document.getElementById("selected-zone").textContent = zoneName;
  const ticketName = price === 2400 ? `身心障礙席 ${price}` : `全票 ${price}`;
  document.getElementById("ticket-name").innerHTML = `<a href="#">${ticketName}</a>`;

  const priceColors = {
    6000: "#e91e63",
    4800: "#3f51b5",
    3500: "#009688",
    2400: "#000000"
  };
  const zoneColor = priceColors[price] || "#999";
  document.getElementById("zone-color").style.backgroundColor = zoneColor;

  // 驗證碼繪製
  const canvas = document.getElementById("captcha-canvas");
  const ctx = canvas.getContext("2d");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let currentCode = "";

  function drawCaptcha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentCode = "";
    ctx.fillStyle = "#0074e8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 4; i++) {
      const char = letters[Math.floor(Math.random() * letters.length)];
      currentCode += char;

      const fontSize = 32 + Math.floor(Math.random() * 6); // 32~38px
      const x = 20 + i * 30;
      const y = 40 + Math.random() * 10;
      const angle = (Math.random() - 0.5) * 0.6;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = "#fff";
      ctx.font = `${fontSize}px Arial`;
      ctx.fillText(char, 0, 0);
      ctx.restore();
    }

    // 加干擾線
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.6)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
  }

  drawCaptcha();
  canvas.addEventListener("click", drawCaptcha);

  window.goBack = function () {
    history.back();
  };

  window.submit = function () {
  const input = document.getElementById("captcha-input").value.trim().toUpperCase();
  const agreed = document.getElementById("agree").checked;

  if (!agreed) {
    alert("請勾選同意服務條款！");
    return;
  }

  if (input !== currentCode) {
    alert("驗證碼錯誤，請重新輸入！");
    drawCaptcha();
    return;
  }

  // ✅ 1秒後再進入 loading 頁面
  setTimeout(() => {
    window.location.href = "loading.html";
  }, 1000);
};
});
