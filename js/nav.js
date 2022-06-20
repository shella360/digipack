const user = document.querySelector('.fa-circle-user');
    const login = document.querySelector('#login')
    // user.addEventListener('click',function (e) {
    //   login.style.display='block'
    //   e.stopPropagation();
    // })
    // document.addEventListener('click',function(e){
    //   login.style.display='none'
    // })
    user.onclick = function (e) {
      login.style.display = 'block'
      e.stopPropagation();
    }
    document.onclick = function (e) {
      login.style.display = 'none'
    }