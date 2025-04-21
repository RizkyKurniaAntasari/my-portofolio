function loadComponent(id, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Gagal memuat " + file);
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
      
      //mobile
      if(id === 'header-placeholder') {
        const menuButton = document.getElementById('menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if(menuButton && mobileMenu) {
          menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
        }
      }
    })
    .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function() {
  loadComponent('header-placeholder', 'components/navbar.html');
  loadComponent('footer-placeholder','components/footer.html');
});