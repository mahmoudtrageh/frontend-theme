// start jquery 

$(document).ready(function () {

//  navbar height start

var h = window.innerHeight;

$('nav').css('height', h);

// navbar height end

// scroll up start

$('#up').click(function () {

    $('html, body').animate({ scrollTop: '0' }, 1000)

});

// scroll up end

    
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
                        url: "send-comment.php",
                        data: 'comment=' + $("#validationTooltip01").val() + '&name=' +
                            $("#validationTooltip02").val() + '&email=' +
                            $("#validationTooltip03").val() + '&website=' +
                            $('#website').val(),
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

// start navbar mobile start

    $('.navbar-toggler-icon').click(function () {

        $('#nav-overlay').css('transform', 'scale(1)');
    })


    $('.close').click(function () {

        $('#nav-overlay').css('transform', 'scale(0)');
    })

    $('#navbarText a').click(function () {

        $('#nav-overlay').css('transform', 'scale(0)');

    })

// End navbar mobile end 

// start loading page 

    $("#loading-spinner .spin-icon").fadeOut(2000, function () {

        $("#loading-spinner").fadeOut(2000, function () {

            $("body").css("overflow", "auto")
        })
    })

// End loading page

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

// left sidebar start

    $("#menu-toggle").click(function (e) {
        e.preventDefault();

        $("#wrapper").toggleClass("toggled");
        $("#menu-toggle").toggleClass("toggled");
        $("#content").toggleClass("wide");
        $("#toggleIcon").toggleClass("fa-caret-left fa-caret-right")

    });

// left sidebar end


});


// end jquery