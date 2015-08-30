function load ()
{
      var flag = 0;

      var animation = function ()
      {
            var tl = new TimelineMax({ paused: true });

            tl.add(
                  TweenLite.to('#top', 0.5, {
                        y: 33.5,
                        rotation: 135,
                        transformOrigin:"center center"
                  }),
                  0
            )
            .add(
                  TweenLite.to('#middle', 0.5, {
                        rotation: 315,
                        transformOrigin:"center center",
                        opacity: 0
                  }),
                  0
            )
            .add(
                  TweenLite.to('#bottom', 0.5, {
                        y: -34,
                        rotation: -135,
                        transformOrigin:"center center"
                  }),
                  0
            );
            return tl;
      }
      var animate = animation();

      document.addEventListener('click', function()
      {
            if( flag === 0 )
            {
                  animate.play();
                  flag = 1;
            }
            else
            {
                  animate.reverse();
                  flag = 0;
            }

            //Open Menu
            var menu = window.parent.document.getElementsByTagName('menu')[0];

            var menuUl = menu.children[1];

            menuUl.classList.toggle('open');
            menu.style.height = 'initial';

            if (menuUl.classList[0] === 'open')
            {
                  window.parent.document.body.style.overflow = 'hidden';
            }
            else
            {
                  window.parent.document.body.style.overflow = 'visible';
            }
      });
}
window.addEventListener('load', load);
