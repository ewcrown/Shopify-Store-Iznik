const openBtn = document.getElementById('ew-iznik-open-btn');
const closeBtn = document.getElementById('ew-iznik-close-btn');
const overlay = document.getElementById('ew-iznik-overlay');

openBtn?.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

closeBtn?.addEventListener('click', () => {
  overlay.style.display = 'none';
});

window?.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});

// Currency Chnage

const moneyInterval = setInterval(() => {
  const money = document.querySelectorAll('.money');
  money.forEach((div) => {
    const moneyText = div.innerText;
    div.innerText = moneyText.replace('Rs.', 'PKR ');
  });
}, 50);

// setTimeout(() => {
//   clearInterval(moneyInterval);
// }, 5000);