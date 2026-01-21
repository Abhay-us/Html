// document.getElementsByTagName("p").text("")
$(document).ready(function () {
    // $("p").text("Paragraph");

    // $("#btn").click(()=>{
    //     $("p").text("Paragraph");
    // });

    $("#btn").click(() => {
        $("p").text("Paragraph").show();
    });

    $("#btn1").click(() => {
        $("p").text("Paragraph").hide();
    });

    $("#btn-2").click(() => {
        $("ul").find("li ul").css("background-color", "red");
    })

    $("#has-btn").click(() => {
        $("li").has("ul").css("background-color", "yellow");
    })


    $("#has-btn").click(() => {
        $("li").filter(":even").fadeToggle("slow");
    })

    $("#filter-btn").click(() => {
        $("li").filter(":odd").fadeToggle("slow");
    })
    $("#eq-btn").click(() => {
        $("#fruits li").eq(4).fadeToggle("slow");
    })


    $(".owl-carousel").owlCarousel();


    /////// Isotope Method 1
    // var $grid = $('.menu-grid').isotope({
    //     itemSelector: '.menu-item',
    //     layoutMode: 'fitRows'
    // });

    // $('.menu').on( 'click', 'button', function() {
    // var filterValue = $( this ).attr('data-filter');
    //     $grid.isotope({ filter: filterValue });
    // });

/////// Isotope Method 2
    // $('.menu').on( 'click', 'button', function() {
    //     var filterValue = $( this ).attr('data-filter');

    //     $('.menu-grid').isotope({
    //         itemSelector: '.menu-item',
    //         layoutMode: 'fitRows',
    //         filter: filterValue
    //     });
    // });

    /////// Isotope Method 3
    $('.menu').on( 'click', 'button', function() {
        $('.menu-grid').isotope({
            itemSelector: '.menu-item',
            layoutMode: 'fitRows',
            filter: $( this ).attr('data-filter')
        });
    });
});