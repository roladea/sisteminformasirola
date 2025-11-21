document.addEventListener('DOMContentLoaded', function() {
    // Seleksi elemen
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Fungsi klik tombol hamburger
    menuToggle.addEventListener('click', function() {
        // Toggle class 'active' untuk menampilkan/menyembunyikan menu
        navMenu.classList.toggle('active');
        
        // Ubah ikon bars menjadi times (X)
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Efek scroll sederhana pada header (opsional)
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });
});
