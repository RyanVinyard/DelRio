function alignImageLeft() {
  let section_1 = jQuery('.section_1').width();
  let container = jQuery('.container').width();

  if (section_1 && container) {
    let left_image = (parseFloat(section_1) - parseFloat(container)) / 2 - 15.5;
    // let left_image = parseFloat(section_1) - parseFloat(container) - 15.5;
    if (jQuery('.header_img img').length > 0) {
      jQuery('.header_img img').css('left', left_image);
    }
  }
}
jQuery(window).resize(function () {
  if (jQuery(window).width() < 1700 && jQuery(window).width() > 767)
    alignImageLeft();
  else
    jQuery('.header_img img').css('left', 'unset');

});  

if (jQuery(window).width() < 1700 && jQuery(window).width() > 767)
  alignImageLeft();

$(document).ready(function () {
  $('#carousel_1').owlCarousel({
    item: 1,
    loop: true,
    nav: true,
    navText: [
      "<span class='navtext'>&#x2190</span>",
      "<span class='navtext'>&#x2192</span>"
    ],
    autoplay: true,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  $('#carousel_mb').owlCarousel({
    item: 1,
    loop: true,
    nav: true,
    navText: [
      "<span class='navtext'>&#x2190</span>",
      "<span class='navtext'>&#x2192</span>"
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })



  //  home mobile 
  $('#home_mobile').owlCarousel({
    item: 1,
    loop: true,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    dots: false,
    margin: 27,
    responsive: {
      0: {
        items: 1.4
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })


  //  home mobile 
  $('#home_mobile1').owlCarousel({
    item: 1,
    loop: true,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    dots: false,
    margin: 27,
    responsive: {
      0: {
        items: 1.4
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  //     jolee page carousel game day
  $('#game_day').owlCarousel({
    item: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  jQuery("#carousel_2").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    center: true,
    items: 5,
    margin: 10,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: [
      "<span class='navtext'>&#x2190</span>",
      "<span class='navtext'>&#x2192</span>"
    ],
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 3.33,
        center: false,
      },

      600: {
        items: 3
      },

      1024: {
        items: 6
      },

      1366: {
        items: 5
      }
    }
  });

  jQuery("#best_wine").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    center: true,
    items: 1,
    margin: 10,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    nav: true,
    navText: [
      "<span class='navtext posi_ab1 posib_ab1'><i class='fa fa-angle-left'></i></span>",
      "<span class='navtext posi_ab1'><i class='fa fa-angle-right'></i></span>"
    ],
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 1
      },

      1024: {
        items: 1
      },

      1366: {
        items: 1
      }
    }
  });


  jQuery('#carousel_rockpoint').owlCarousel({
    item: 1,
    loop: true,
    nav: true,
    navText: [
      "<span class='navtext owl_rp'>&#x2190</span>",
      "<span class='navtext owl_rp1'>&#x2192</span>"
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  jQuery("#best_wine_gift_card").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    center: true,
    items: 1,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    nav: true,
    navText: [
      "<span class='navtext_gift_card posi_ab1_gift_card posib_ab1_gift_card'><i class='fa fa-angle-left'></i></span>",
      "<span class='navtext_gift_card posi_ab1_gift_card'><i class='fa fa-angle-right'></i></span>"
    ],
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 1
      },

      1024: {
        items: 1
      },

      1366: {
        items: 1
      }
    }
  });

});

$(document).ready(function () {


  //OPEN RIGHT NAVBAR
  jQuery("#carousel_3").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    center: true,
    items: 3,
    margin: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: false,
    nav: true,
    navText: [
      "<span class='navtext d-none';'>&#x2190</span>",
      "<span class='navtext posi_ab'><i class='fa fa-angle-right'></i></span>"
    ],
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 2
      },

      600: {
        items: 2
      },

      1024: {
        items: 3
      },

      1366: {
        items: 3
      }
    }
  });

  document.getElementById("already-have-an-id_acc").addEventListener("click", function () {
    $('.close').click();
  });

  document.getElementById("modal_lf33").addEventListener("click", function () {
    $('.close').click();
  });

//   document.getElementById("close_button_empty_cart_home").addEventListener("click", function () {
//     $('.closebtn').click();
//   });
  jQuery('#close_button_empty_cart_home').on('click',function(){
    $('.closebtn').click();
  });

  document.getElementById("menubtn1").addEventListener("click", function () {
    document.getElementById("mySideNav").style.width = "39%";
    document.getElementById("mySideNav").style.marginRight = "0px";
    jQuery('#make_padding, #footer_right_menu').css({
      paddingRight: "25px",
      paddingLeft: "25px"
    });
    document.getElementById("mySideNav").style.visibility = 'visible';
    $("#mySideNav").removeClass('new');
  });

  document.getElementById("menubtn").addEventListener("click", function () {
    document.getElementById("mySideNav").style.width = "39%";
    document.getElementById("mySideNav").style.marginRight = "0px";
    jQuery('#make_padding, #footer_right_menu').css({
      paddingRight: "25px",
      paddingLeft: "25px"
    });
   $('#site-main').addClass('blur');
   $('#shopify-section-footer').addClass('blur');
    
    document.getElementById("mySideNav").style.visibility = 'visible';
    $("#mySideNav").removeClass('new');
  });
  

  // CLOSE RIGHT NAVBAR
  jQuery(document).on('click', '#closebutton', function (event) {
    document.getElementById("mySideNav").style.marginRight = "-800px";
    $('#site-main').removeClass('blur');
     jQuery('body').removeClass('body-overflow');
    $('#shopify-section-footer').removeClass('blur');
    document.getElementById("mySideNav").style.visibility = 'hidden';
    
  });


  //CLOSE RIGHT NAVBAR
  jQuery(document).on('click', '#closebutton2', function (event) {
    document.getElementById("mySideNav2").style.marginLeft = "-800px";
    document.getElementById("mySideNav2").style.visibility = 'hidden';
    document.getElementById("mySideNav2").style.width = "0";
  });


  //OPEN RIGHT NAVBAR
  document.getElementById("menubtn2").addEventListener("click", function () {
    document.getElementById("mySideNav2").style.width = "100%";
    document.getElementById("mySideNav2").style.marginLeft = "0px";
    document.getElementById("mySideNav2").style.visibility = 'visible';
    document.getElementsByClassName("navbar-collapse.show").style.display = "none";
    $("#mySideNav").removeClass('new');
  });

  jQuery('.sidenav').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
    jQuery("#carousel_3").trigger('refresh.owl.carousel');
  });



});

// number button incerase and decrease

function increaseValue(currentElement = null) {

  var numberObject = jQuery(currentElement).prev('#number');
  var numberValue = numberObject.val();
  var value = parseInt(numberValue, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  numberObject.val(value);
  numberObject.trigger('change');
}

function decreaseValue(currentElement = null) {
  var numberObject = jQuery(currentElement).next('#number');
  var numberValue = numberObject.val();
  var value = parseInt(numberValue, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  numberObject.val(value);
  numberObject.trigger('change');
}


// for trigger owlCarousel

if ($('.owl-carousel-top').length > 0) {

  mainOwlCarousel(); // does the carousel loading

  $(window).resize(function () {
    $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();

    mainOwlCarousel();
  });
}


// Accordion Action
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);

//jolee js



$(".radio-button21").click(function () {
  document.getElementById("mySideNav21").style.color = 'white';
  document.getElementById("mySideNav22").style.color = '#f07769';
  document.getElementById("mySideNav23").style.color = '#f07769';
});
$(".radio-button22 ").click(function () {
  document.getElementById("mySideNav21").style.color = '#f07769';
  document.getElementById("mySideNav22").style.color = 'white';
  document.getElementById("mySideNav23").style.color = '#f07769';
});
$(".radio-button23").click(function () {
  document.getElementById("mySideNav21").style.color = '#f07769';
  document.getElementById("mySideNav22").style.color = '#f07769';
  document.getElementById("mySideNav23").style.color = 'white';
});
$("#checkmark1").click(function () {
  document.getElementById("mySide24").style.backgroundColor = '#f07769';
  document.getElementById("mySide26").style.backgroundColor = '#faf0dc';
  document.getElementById("once_month").style.color = 'white';
  document.getElementById("twice_month").style.color = '#b86141';
  //  #faf0dc
});
$("#checkmark2").click(function () {
  document.getElementById("mySide26").style.backgroundColor = '#f07769';
  document.getElementById("mySide24").style.backgroundColor = '#faf0dc';
  document.getElementById("once_month").style.color = '#b86141';
  document.getElementById("twice_month").style.color = 'white';
});

// product detail del rio page 

$(".radio-button24").click(function () {
  document.getElementById("mySideNav24").style.color = 'white';
  document.getElementById("mySideNav25").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav26").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav27").style.color = 'rgba(23, 31, 21, 0.6)';
});
$(".radio-button25").click(function () {
  document.getElementById("mySideNav24").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav25").style.color = 'white';
  document.getElementById("mySideNav26").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav27").style.color = 'rgba(23, 31, 21, 0.6)';
});
$(".radio-button26").click(function () {
  document.getElementById("mySideNav24").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav25").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav26").style.color = 'white';
  document.getElementById("mySideNav27").style.color = 'rgba(23, 31, 21, 0.6)';
});
$(".radio-button27").click(function () {
  document.getElementById("mySideNav24").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav25").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav26").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav27").style.color = 'white';
});


$(".radio-button28").click(function () {
  document.getElementById("mySideNav28").style.color = 'white';
  document.getElementById("mySideNav29").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav30").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav31").style.color = 'rgba(23, 31, 21, 0.6)';
});
$(".radio-button29").click(function () {
  document.getElementById("mySideNav28").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav29").style.color = 'white';
  document.getElementById("mySideNav30").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav31").style.color = 'rgba(23, 31, 21, 0.6)';
});
$(".radio-button30").click(function () {
  document.getElementById("mySideNav28").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav29").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav30").style.color = 'white';
  document.getElementById("mySideNav31").style.color = 'rgba(23, 31, 21, 0.6)';
});
$(".radio-button31").click(function () {
  document.getElementById("mySideNav28").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav29").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav30").style.color = 'rgba(23, 31, 21, 0.6)';
  document.getElementById("mySideNav31").style.color = 'white';
});


// product detail page del rio js



'use strict';

var numberOfItems = $('#page_del_rios .list-group_pro_del_88').length;
var limitPerPage = 4;
$('#page_del_rios .list-group_pro_del_88:gt(' + (limitPerPage - 1) + ')').hide();
var totalPages = Math.round(numberOfItems / limitPerPage);
$(".pagination_del_rio_product").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i = 2; i <= totalPages; i++) {
  $(".pagination_del_rio_product").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination_del_rio_product").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>Next</span></a></li>");

$(".pagination_del_rio_product li.current-page").on("click", function () {
  if ($(this).hasClass('active')) {
    return false;
  } else {
    var currentPage = $(this).index();
    $(".pagination_del_rio_product li").removeClass('active');
    $(this).addClass('active');
    $("#page_del_rios .list-group_pro_del_88").hide();
    var grandTotal = limitPerPage * currentPage;

    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page_del_rios .list-group_pro_del_88:eq(" + i + ")").show();
    }
  }

});

$("#next-page").on("click", function () {
  var currentPage = $(".pagination_del_rio_product li.active").index();
  if (currentPage === totalPages) {
    return false;
  } else {
    currentPage++;
    $(".pagination_del_rio_product li").removeClass('active');
    $("#page_del_rios .list-group_pro_del_88").hide();
    var grandTotal = limitPerPage * currentPage;
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page_del_rios .list-group_pro_del_88:eq(" + i + ")").show();
    }

    $(".pagination_del_rio_product li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});

$("#previous-page").on("click", function () {
  var currentPage = $(".pagination_del_rio_product li.active").index();
  if (currentPage === 1) {
    return false;
  } else {
    currentPage--; // Decrement page by one
    $(".pagination_del_rio_product li").removeClass('active');
    $("#page_del_rios .list-group_pro_del_88").hide();
    var grandTotal = limitPerPage * currentPage;
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#page_del_rios .list-group_pro_del_88:eq(" + i + ")").show();
    }

    $(".pagination_del_rio_product li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});


// contact us accordion js 

$(function () {
  $('.accordian_contact_us li').on('click', function () {
    if ($(this).find('ul').hasClass('open')) {
      $('ul.open').slideToggle().removeClass('open');
      $('.accordian_contact_us h3 span').removeClass('closed');
      $('.accordian_contact_us h3').removeClass('closed');
    } else {
      $('ul.open').slideToggle().removeClass('open');
      $(this).find('ul').slideToggle().addClass('open');
      $('.accordian_contact_us h3, .accordian_contact_us h3 span').removeClass('closed');
      $(this).find('h3, h3 span').addClass('closed')
    }
  });
  // Active class starts one open
  $('.accordian_contact_us li.active ul').slideDown().addClass('open');
});


// newsletter pagination


'use strict';

var numberOfItems = $('#page_newsletter_1 .list-group_pro_del_newsletter').length;
var limitPerPage2 = 15;
$('#page_newsletter_1 .list-group_pro_del_newsletter:gt(' + (limitPerPage2 - 1) + ')').hide();
var totalPages2 = Math.round(numberOfItems / limitPerPage2);
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i = 1; i <= totalPages2; i++) {
  $(".pagination_newsletter").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination_newsletter").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>Next</span></a></li>");

$(".pagination_newsletter li.current-page").on("click", function () {
  if ($(this).hasClass('active')) {
    return false;
  } else {
    var currentPage = $(this).index();
    $(".pagination_newsletter li").removeClass('active');
    $(this).addClass('active');
    $("#page_newsletter_1 .list-group_pro_del_newsletter").hide();
    var grandTotal = limitPerPage2 * currentPage;

    for (var i = grandTotal - limitPerPage2; i < grandTotal; i++) {
      $("#page_newsletter_1 .list-group_pro_del_newsletter:eq(" + i + ")").show();
    }
  }

});

$("#next-page").on("click", function () {
  var currentPage = $(".pagination_newsletter li.active").index();
  if (currentPage === totalPages2) {
    return false;
  } else {
    currentPage++;
    $(".pagination_newsletter li").removeClass('active');
    $("#page_newsletter_1 .list-group_pro_del_newsletter").hide();
    var grandTotal = limitPerPage2 * currentPage;
    for (var i = grandTotal - limitPerPage2; i < grandTotal; i++) {
      $("#page_newsletter_1 .list-group_pro_del_newsletter:eq(" + i + ")").show();
    }

    $(".pagination_newsletter li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});

$("#previous-pages").on("click", function () {
  var currentPage = $(".pagination_newsletter li.active").index();
  if (currentPage === 1) {
    return false;
  } else {
    currentPage--; // Decrement page by one
    $(".pagination_newsletter li").removeClass('active');
    $("#page_newsletter_1 .list-group_pro_del_newsletter").hide();
    var grandTotal = limitPerPage2 * currentPage;
    for (var i = grandTotal - limitPerPage2; i < grandTotal; i++) {
      $("#page_newsletter_1 .list-group_pro_del_newsletter:eq(" + i + ")").show();
    }

    $(".pagination_newsletter li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});


// blog category pagination


'use strict';

var numberOfItems = $('#page_blog_category .list-group_pro_del_blog_category').length;
var limitPerPage3 = 10;
$('#page_blog_category .list-group_pro_del_blog_category:gt(' + (limitPerPage3 - 1) + ')').hide();
var totalPages3 = Math.round(numberOfItems / limitPerPage3);
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i = 1; i <= totalPages3; i++) {
  $(".pagination_blog_category").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination_blog_category").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>Next</span></a></li>");

$(".pagination_blog_category li.current-page").on("click", function () {
  if ($(this).hasClass('active')) {
    return false;
  } else {
    var currentPage = $(this).index();
    $(".pagination_blog_category li").removeClass('active');
    $(this).addClass('active');
    $("#page_blog_category .list-group_pro_del_blog_category").hide();
    var grandTotal = limitPerPage3 * currentPage;

    for (var i = grandTotal - limitPerPage3; i < grandTotal; i++) {
      $("#page_blog_category .list-group_pro_del_blog_category:eq(" + i + ")").show();
    }
  }

});

$("#next-page").on("click", function () {
  var currentPage = $(".pagination_blog_category li.active").index();
  if (currentPage === totalPages3) {
    return false;
  } else {
    currentPage++;
    $(".pagination_blog_category li").removeClass('active');
    $("#page_blog_category .list-group_pro_del_blog_category").hide();
    var grandTotal = limitPerPage3 * currentPage;
    for (var i = grandTotal - limitPerPage3; i < grandTotal; i++) {
      $("#page_blog_category .list-group_pro_del_blog_category:eq(" + i + ")").show();
    }

    $(".pagination_blog_category li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});

$("#previous-pages").on("click", function () {
  var currentPage = $(".pagination_blog_category li.active").index();
  if (currentPage === 1) {
    return false;
  } else {
    currentPage--; // Decrement page by one
    $(".pagination_blog_category li").removeClass('active');
    $("#page_blog_category .list-group_pro_del_blog_category").hide();
    var grandTotal = limitPerPage3 * currentPage;
    for (var i = grandTotal - limitPerPage3; i < grandTotal; i++) {
      $("#page_blog_category .list-group_pro_del_blog_category:eq(" + i + ")").show();
    }

    $(".pagination_blog_category li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});


// click js event page

// document.getElementById("list_style_font_icon_event_calender_1").addEventListener("click", function () {
jQuery(document).on('click', '#list_style_font_icon_event_calender_1', function () {  
  $(".fc-dayGridMonth-button").click();
  $(".fc-header-toolbar").css("border","1px solid #bcc3bd");
});

jQuery(document).on('click', '#list_style_font_icon_event_calender_2', function () {
 $(".fc-listMonth-button").click();
 $(".fc-header-toolbar").css("border","0px");
 $(".fc-header-toolbar").css("border-bottom","1px solid #bcc3bd");
});

// tab js for shop all

function openCategoryShopAll(shopCategoryAll) {
        var ssm, tabcontent;
        tabcontent_shop_all_tabs = document.getElementsByClassName("tabcontent_shop_all_tabs");
        for (ssm = 0; ssm < tabcontent_shop_all_tabs.length; ssm++) {
        tabcontent_shop_all_tabs[ssm].style.display = "none";
        }
        document.getElementById(shopCategoryAll).style.display = "flex";
     }
	    jQuery('#defaultOpen_shop_all_cate').click();

function removeHash () { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;
        loc.hash = "";
        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}
jQuery(document).ready(function () {
  
  var hellotop = jQuery(".container_bg_announcemnet_bar").hasClass("hide8800");   
  if (hellotop) {
    jQuery("#site-main").css('padding-top', '0px');    
  }
  else {
    jQuery("#site-main").css('padding-top', '50px');    
  }  
  jQuery('img').addClass('lazyload');
  jQuery('video').addClass('lazyload');
  jQuery('iframe').addClass('lazyload');  
});