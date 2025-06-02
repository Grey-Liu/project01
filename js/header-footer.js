        //開啟menu
        const menuBtn = document.querySelector('.menu-button');
        const sidebar = document.getElementById('sidebar');

        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
        //置頂
        document.querySelector('.btn-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        });