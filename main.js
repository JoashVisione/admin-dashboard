const menuBtn = document.querySelector('#menu-btn');
const sideMenu = document.querySelector('aside');
const closeBtn = document.querySelector('.close-btn');
const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

Orders.forEach(order => {
  const tr = document.createElement('tr');
  const prodStatus =
    order.shipping == 'Declined' ? 'danger' : order.shipping == 'Pending' ? 'warning' : 'success';
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${prodStatus}">${order.shipping}</td>
    <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});
