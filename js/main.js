  
   var $Doc = document;
   var $log = console.log;

   $log("%c AvilSoft ", "font-size:32px; font-family:'Arial';color:#1dafb9;text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 3px 0 #888, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2)");

   var header = $Doc.getElementById("header-nav");
   var sticky = header.offsetTop;
   var up = $Doc.querySelectorAll('.btn-up')[0];
   window.onscroll = () => {
      if (window.pageYOffset > sticky) {
         header.classList.add("sticky--nav");
         up.classList.add('up--on')
      } else {
         up.classList.remove('up--on')
         header.classList.remove("sticky--nav");
      }
   };

   up.addEventListener('click', function () {
      $Doc.body.scrollTop = 0;
      $Doc.documentElement.scrollTop = 0;
   })

   var mask = document.getElementById('mask');
   var btnMenu = $Doc.getElementById('show-menu');
   var boxmenu = $Doc.querySelector('.box-menu');
   btnMenu.addEventListener("click", function () {
      toogleElemnts()
   })

   mask.addEventListener('click', function () {
      toogleElemnts()
   });

   $Doc.addEventListener('swipeleft', function (e) {
      if (!boxmenu.classList.contains('box-on-menu') && mobile.any() != null) toogleElemnts();
   });


   $Doc.addEventListener('swiperight', function (e) {
      if (boxmenu.classList.contains('box-on-menu')) {
         toogleElemnts();
      }
   });

   var mobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i);
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i);
      },
      any: function () {
         return (mobile.Android() || mobile.iOS() || mobile.Opera());
      }
   };


   function toogleElemnts() {
      btnMenu.children[0].children[0].classList.toggle('avil-icon-close-menu');
      boxmenu.classList.toggle("box-on-menu");
      mask.classList.toggle('behind--mask');
      $Doc.getElementsByTagName('body')[0].classList.toggle('openBody');
   }

particlesJS("particles", {
   "particles": {
      "number": {
         "value": 150,
         "density": {
            "enable": true,
            "value_area": 800
         }
      },
      "color": {
         "value": "#ffffff"
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000000"
         },
         "polygon": {
            "nb_sides": 5
         }
      },
      "opacity": {
         "value": 0.5,
         "random": false,
         "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 3,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 80,
            "size_min": 0.1,
            "sync": false
         }
      },
      "line_linked": {
         "enable": true,
         "distance": 150,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 1
      },
      "move": {
         "enable": true,
         "speed": 2,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "addEventListeners": {
         "onhover": {
            "enable": true,
            "mode": "grab"
         },
         "onclick": {
            "enable": true,
            "mode": "push"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 140,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
         },
         "repulse": {
            "distance": 200,
            "duration": 0.4
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         }
      }
   },
   "retina_detect": true
});
