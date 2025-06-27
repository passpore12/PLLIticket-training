const counterEl = document.getElementById("visitor-count");
const visitRef = db.collection("visits").doc("counter");

visitRef.get().then((doc) => {
  if (doc.exists) {
    const current = doc.data().count || 0;
    counterEl.textContent = current + 1;
    visitRef.update({ count: current + 1 });
  } else {
    visitRef.set({ count: 1 });
    counterEl.textContent = 1;
  }
});
