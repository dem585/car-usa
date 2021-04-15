$(function(){

	$('.slider').slick({
		dots:true,
    autoplay:1000,
		arrows: false, 
		slidesToShow: 3,
  	centerMode: true,
		centerPadding: '0px',		
  		slidesToScroll: 1,
  		 responsive: [

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
	});

});


