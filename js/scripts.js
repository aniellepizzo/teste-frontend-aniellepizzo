$(function(){
    //slide de videos
      $(".slide-videos").owlCarousel({
          singleItem: true,
          items : 1, 
          navigation : false, 
          pagination: true,
          slideSpeed : 300,
          paginationSpeed : 400

          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });

})