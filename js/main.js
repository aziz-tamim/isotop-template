$(document) .ready(function(){
    
 var $grid = $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: 1
        }
      })

      $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

})