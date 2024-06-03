$(document).ready(function(){
    $('#homepage').show();

    $('.nav-link').click(function(event){
        event.preventDefault();

        $('section').hide();

        var targetsection =  $(this).attr('href');

        $(targetsection).show();
        switch(targetsection){
            case '#CustomerManage' :
                $('.navbar').text('Customer Manage');
                document.title = "Customer Manage";
                break;
            case '#ItemManage' :
                $('.navbar').text('Item Manage');
                document.title = "Item Manage";
                break;
            case '#OrderManage' :
                $('.navbar').text('Order Manage');
                document.title = "Order Manage";
                break;
            default:
                $('.navbar').text('Home Page');
                document.title = "Home Page";
        }
    })
});


{


    let currentSlide = 0;
    const slideInterval = 3000; // Change slide every 3 seconds
    let autoSlide;

    function showSlide(index) {
        const $slides = $('.carousel-item');
        const totalSlides = $slides.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        $('.carousel-inner').css('transform', 'translateX(' + offset + '%)');

        $slides.each(function(i) {
            $(this).toggleClass('active', i === currentSlide);
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, slideInterval);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    showSlide(currentSlide);
    startAutoSlide();

    $('.carousel').mouseenter(stopAutoSlide).mouseleave(startAutoSlide);

    $('.prev').click(function() {
        prevSlide();
    });

    $('.next').click(function() {
        nextSlide();
    });
  }