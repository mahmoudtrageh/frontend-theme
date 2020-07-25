// start jquery 

$(document).ready(function () {

//  navbar height start 

var h = window.innerHeight;

$('nav').css('height', h);
$('header').css('height', h);

// navbar height end 


// start navbar mobile 

$('.navbar-toggler-icon').click(function () {
    $('#nav-overlay').css('transform', 'scale(1)');
})

$('.close').click(function () {
    $('#nav-overlay').css('transform', 'scale(0)');
})

$('#navbarText a').click(function () {
    $('#nav-overlay').css('transform', 'scale(0)');

})

// End navbar mobile 

// left sidebar start 

$("#menu-toggle").click(function (e) {
    e.preventDefault();

    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle").toggleClass("toggled");
    $("#content").toggleClass("wide");
    $("#toggleIcon").toggleClass("fa-caret-left fa-caret-right")
    
});

// left sidebar end 

// search box start

    $("#search-box").click(function (e) {
        e.preventDefault();

        $(".s-form").addClass("click");

        $(document).mouseup(function (e) {

            var container = $(".s-form");

            if (!container.is(e.target) && container.has(e.target).length === 0) {

                container.removeClass('click');

            }
        }); 
    });

// search box end

// start loading page 

    $("#loading-spinner .spin-icon").fadeOut(1000, function () {

        $("#loading-spinner").fadeOut(1000, function () {

        })
    })

// End loading page


// scroll down start
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

// scroll down end

//  portfolio section start

    // init Isotope
    jQuery('.isotope_container').each(function (index) {
        var $container = jQuery(this);
        var layoutMode = ($container.hasClass('masonry-layout')) ? 'masonry' : 'fitRows';
        $container.isotope({
            percentPosition: true,
            layoutMode: layoutMode,
            masonry: {}
        });

        var $filters = jQuery(this).attr('data-filters') ? jQuery(jQuery(this).attr('data-filters')) : $container.prev().find('.filters');
        // bind filter click
        if ($filters.length) {
            $filters.on('click', 'a', function (e) {
                e.preventDefault();
                var filterValue = jQuery(this).attr('data-filter');
                $container.isotope({ filter: filterValue });
                jQuery(this).siblings().removeClass('selected active');
                jQuery(this).addClass('selected active');
            });
        }
    });

// portfolio section end

// clients carousel start

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        center:true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 3,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            }
        }
      
    });

// end clients carousel end

// submit form validation start

    (function () {
        'use strict';

        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();

                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();

                } else {


                    $.ajax({
                        url: "contact-form.php",
                        data: 'name=' + $("#validationTooltip01").val() + '&email=' +
                            $("#validationTooltip02").val() + '&subject=' +
                            $("#validationCustom03").val() + '&message=' +
                            $('#validationCustom04').val(),
                        type: "POST",
                        success: function (data) {
                            $("#server-results").html(data);
                        },
                        error: function () { }
                    });

                }

                form.classList.add('was-validated');


            });



        });


    })();
    
// submit form validation end

// count on load start

    var a = 0;
    $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;

// skills section start

            $(".skill-per").each(function () {
                var $this = $(this);
                var max = $this.attr("data-max");
                $this.css("width", max + "%");
                $({ animatedValue: 0 }).animate(
                    { animatedValue: max },
                    {
                        duration: 2000,
                        step: function () {
                            $this.attr("data-max", Math.floor(this.animatedValue) + "%");
                        },
                        complete: function () {
                            $this.attr("data-max", Math.floor(this.animatedValue) + "%");
                        }
                    }
                );
            });

// skills section end

        }

    });

// count on load end

// advantage image start

    /* Demo purposes only */
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

// advantage image end

});

// end jquery


// start javascript

// typewrite start

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = this.txt;

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

// typewrite end