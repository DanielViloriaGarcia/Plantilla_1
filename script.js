window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
              itemWidth: 100,
              duration: 0.5
            }
          },{
            breakpoint: 350,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              itemWidth: 75,
              duration: 0.5
            }
          }
        ]




    })
  })