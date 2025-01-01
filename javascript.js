const btnLink = document.querySelectorAll('ulMenuBtn-link');


btnLink.forEach((btn) =>
    btn.addEventListener('click', (event) => {
     btnLink.classList.toggle('show')
    })
  );
