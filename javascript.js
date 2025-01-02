const ulMenu =document.querySelectorAll('.ulMenu');
const aLink =[...document.querySelectorAll('.a-link')];
const divSubMenu = document.querySelectorAll('.divSubMenu')

aLink.forEach((item) => {
    item.addEventListener('click', navFunction);

    function navFunction(e){
        e.stopPropagation();
        let event = e.target;
        event.classList.toggle('show');
        elInterno();
    }

    function elInterno(){
      if()
    }
});



/* elementoSite.forEach((item) => {
  item.addEventListener('click', clicando);

  function clicando(e){
    e.stopPropagation();
    e.target.classList.toggle('show')
  }
}) */
