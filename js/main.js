$(function(){

    $(".menu a, .logo").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          $('.header__top').addClass("scroll");
        } else {
          $('.header__top').removeClass("scroll");
        }
      });

    $('.burger, .menu__list a').on('click', function(){
        $('.header__top').toggleClass('header__top--active');
        
        

        
       
    });

    var mixer = mixitup('.portfolio__content');
});

    