
              new WOW().init();
          
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel();
    });
  
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})

    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    function changeTab(tabId) {
        document.getElementById('burgers').style.display = 'none';
        document.getElementById('snacks').style.display = 'none';
        document.getElementById('beverages').style.display = 'none';
        document.getElementById(tabId).style.display = 'block';
        
        document.getElementById('burgerNav').classList.remove("active");
        document.getElementById('snacksNav').classList.remove("active");
        document.getElementById('beveragesNav').classList.remove("active");

        
        document.getElementById(tabId).classList.add("active");
    }

	$(window).scroll(function(){

        if ($(window).scrollTop() >=100) {

           $('.menu-sec').addClass('fixed-header');

        }

        else {

           $('.menu-sec').removeClass('fixed-header');

        }

    });