const darkMode = document.querySelector('.__dark-mode');
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('__dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('__active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('__active');
});

menuBtn.addEventListener('click', () => {
    sideMenu.style.transform = 'translateX(calc(-1 * var(--padding-1)))';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.transform = 'translateX(calc(-100% - var(--padding-1)))';
});

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === 'Declined' ? '__danger' : order.status === 'Pending' ? '__warning' : '__primary'}">${order.status}</td>
    <td class="__primary">Details</td>
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

checkWindowSize();
window.addEventListener('resize', checkWindowSize);

function checkWindowSize(){
  if (window.innerWidth >= 768) {
    sideMenu.style.transform = 'translateX(calc(-1 * var(--padding-1)))';
  } else {
    sideMenu.style.transform = 'translateX(calc(-100% - var(--padding-1)))';
  }
}