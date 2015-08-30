/*
      Example:
      <div>
            <img src="image.jpg" class="slide_1_image" alt=""/>
            <img src="image.jpg" class="slide_1_image" alt=""/>

            <img src="image.jpg" class="slide_2_image" alt=""/>
            <img src="image.jpg" class="slide_2_image" alt=""/>
      </div>
*/
function addCSS(url)
{
      var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      head.appendChild(link);
 }

function slideShow(className, delay)
{
      var slide_image = document.getElementsByClassName(className);
      var length = slide_image.length;
      var lastImage = length - 1;
      var currentImage = 0;
      var previousImage;
      var next;

      //Required for position: absolute on images
      slide_image[0].parentElement.style.position = 'relative';
      slide_image[0].parentElement.style.overflow = 'hidden';

      //Setup Style Properties
      slide_image[0].classList.add('ssi0');

      for ( i = 1; i < length; i++)
      {
            slide_image[i].classList.add('ssi');
            slide_image[i].onload = function() {
                  this.style.maxWidth =  this.width + 'px';
                  this.style.maxHeight = this.height + 'px';
            }
      }

      function changeImage()
      {
            if ( (currentImage >= 0) && (currentImage != lastImage) )
            {
                  slide_image[currentImage].style.opacity = '0';
                  slide_image[currentImage].style.zIndex = '0';

                  next = currentImage + 1;
                  slide_image[next].style.zIndex = '1';
                  slide_image[next].style.opacity = '1';

                  currentImage = currentImage + 1;
            }
            else if (currentImage === lastImage)
            {
                  slide_image[lastImage].style.opacity = '0';
                  slide_image[lastImage].style.zIndex = '0';

                  currentImage = 0;
                  slide_image[currentImage].style.zIndex = '1';
                  slide_image[currentImage].style.opacity = '1';
            }
            setTimeout( changeImage, 6000 );
      }
      //Delay change time
      setTimeout( changeImage, delay );
};

window.addEventListener('DOMContentLoaded', function()
{
      if (window.location.pathname === "/") {
            addCSS('/slideShow/slideShow.css');

            slideShow('slide_1_image', 3000);
            slideShow('slide_2_image', 6000);
      }
});
