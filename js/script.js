$(document).ready(function(){
    
    media()
    function media(){
        let windowWidth = $(window).width();
        if(windowWidth > 1300){
            new Swiper ('.mySwiper',{
                direction: 'vertical',
                slidesPerview: 'auto',
                speed: 1500,
                loop: true,
                autoplay:{
                    delay: 1500,
                    disableOnInteraction: false,
                }

            });
        }else{

        };


        $('.menu-area li').mouseenter(function(){
            let result = $(this).attr('data-alt');
            $('.sub-menu').removeClass('active');

            $(`#${result}`).addClass('active');

            $('.sub-menu-box').addClass('active');

            $('.logo svg').addClass('active');
            $('.header-area').addClass('active');
            $('.menu-area li').addClass('active');
        });

        $('.sub-menu-box').mouseleave(function(){
            $(this).removeClass('active');
            $('.logo svg').removeClass('active');
            $('.header-area').removeClass('active');
            $('.menu-area li').removeClass('active');
        });

        $('#hamburger').click(function(){
            $(this).toggleClass('active');
            $('.sub-menu-box').css('display','block');
        });

        $(window).scroll(function(){
        const sct = $(window).scrollTop();
        const sct4 = $('.supreme-bg').offset();
            if(sct >= 1080){
                $('.logo svg').addClass('scroll');
                $('.menu-area li').addClass('scroll');
                $('#hamburger span').addClass('scroll')
            }else if(sct == sct4){
                $('.header-area').addClass('active');
            }
        };    
        // if(sct >= 1080){
        //     $('.logo svg').addClass('scroll');
        //     $('.menu-area li').addClass('scroll');
        //     $('#hamburger span').addClass('scroll')
        // }else{
        //     $('.logo svg').removeClass('scroll');
        //     $('.menu-area li').removeClass('scroll');
        //     $('#hamburger span').removeClass('scroll')
        // }
        // });

    };
    $(window).resize(function(){
        windowWidth = $(window).width();
        media();
    });



});/* --end-- */