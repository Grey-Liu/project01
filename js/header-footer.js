const menuBtn  = document.querySelector('.menu-button');
const sidebar  = document.getElementById('sidebar');
const overlay  = document.getElementById('sidebarOverlay'); 

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    menuBtn.classList.toggle('active');         
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    menuBtn.classList.remove('active');         
});

document.querySelector('.btn-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滾動
    });
});