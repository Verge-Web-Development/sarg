function addCSS(url) {
      var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      head.appendChild(link);
 }
 window.addEventListener('DOMContentLoaded', function(){
      var menu = document.getElementsByTagName('menu')[0];
      menu.style.visibility = 'hidden';
      addCSS('/menu/menu.css');
 });

function menu()
{
      var nav = document.getElementsByTagName('nav')[0];
      var navHeight = nav.offsetHeight;
      var navTopCords = nav.offsetTop;
      var navBottomCords = nav.offsetTop + nav.offsetHeight;

      var menu = document.getElementsByTagName('menu')[0];
      var menuTop = menu.offsetTop;
      var menuHeight = menu.offsetHeight;
      var menuBottomCords = menu.offsetTop+menu.offsetHeight;
      var menuIcon = menu.children[0];
      var menuUl = menu.children[1];

      var phone = document.getElementsByTagName('phone')[0];
      var phoneIcon = document.getElementById('phoneIcon');

      function checkTop ()
      {
            var windowTop = window.pageYOffset;
            var buffer = 30;
            var windowTopPlusMenuHeight = windowTop+menuHeight;

            if (window.innerWidth > 875)
            {
                  if ( windowTopPlusMenuHeight+10 >= navBottomCords && menu.classList[0] != 'active' && menu.classList[1] != 'detach' )
                  {
                        menu.style.height = navHeight + 'px';
                        menu.classList.toggle('active');
                        menu.classList.toggle('detach');
                        phone.classList.toggle('activePhone');
                  }
                  else if ( windowTopPlusMenuHeight+10 <= navBottomCords && menu.classList[0] === 'active' && menu.classList[1] === 'detach' )
                  {
                        menu.classList.toggle('active');
                        menu.classList.toggle('detach');
                        phone.classList.toggle('activePhone');
                  }

                  nav.style.height = menuHeight + 'px';
            }
            else if (window.innerWidth <= 875)
            {
                  if (menu.classList[0] != 'active')
                  {
                        menu.classList.toggle('active');
                        menu.style.height = '65px';
                        nav.style.height = '65px';
                  }


                  if ( windowTop > navTopCords && menu.classList[1] != 'detach' )
                  {
                        // Attach to top of page
                        menu.classList.toggle('detach');
                  }
                  else if ( windowTop < navTopCords && menu.classList[1] === 'detach')
                  {
                        //Detach from page
                        menu.classList.toggle('detach');
                  }

                  if (window.innerWidth <= 400)
                  {
                        phoneIcon.style.display = "none";
                  }
            }

            //Move the menu ul up above and hide
            menuUl.style.top = - menuUl.offsetHeight + 'px';
      }
      window.addEventListener('scroll', checkTop);
      checkTop();

      menu.style.visibility = 'visible';
}
window.addEventListener('load', menu);
window.addEventListener('resize', menu);
