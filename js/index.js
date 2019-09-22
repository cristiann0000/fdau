$( document ).ready(function() {

  // Introduction
	$( "#see_more" ).click(function() {
  	$( "#see_more_detail" ).addClass( "show-details" );
  	$( "#see_more_preview" ).addClass( "open" );

    $("#introduction").addClass("collapse-open");
	});

  $( "#close_see_more_detail" ).click(function() {
    $( "#see_more_detail" ).removeClass( "show-details" );
    $( "#see_more_preview" ).removeClass( "open" );
    $("#introduction").removeClass("collapse-open");

  });

  $('#introduction_slider').slick({
    infinite: false,
    prevArrow: $('#prev_introduction'),
    nextArrow: $('#next_introduction'),
    slidesToShow: 1,
  });

  setTimeout(function(){
    $('#introduction_slider').slick("refresh");
  }, 3000);


  // Programs
  $( "#see_more_program1" ).click(function() {
    $( "#see_more_program1_wrapper").addClass( "open" );
    $(this).addClass("hide");
    $( "#no_see_more_program1" ).removeClass( "hide" );
  });

  $( "#no_see_more_program1" ).click(function() {
    $( "#see_more_program1_wrapper").removeClass( "open" );
    $(this).addClass("hide");
    $( "#see_more_program1" ).removeClass( "hide" );
  });

  $( "#see_more_program2" ).click(function() {
    $( "#see_more_program2_wrapper").addClass( "open" );
    $(this).addClass("hide");
    $( "#no_see_more_program2" ).removeClass( "hide" );
  });

  $( "#no_see_more_program2" ).click(function() {
    $( "#see_more_program2_wrapper").removeClass( "open" );
    $(this).addClass("hide");
    $( "#see_more_program2" ).removeClass( "hide" );
  });

  $('#program1_slider').slick({
    infinite: false,
    prevArrow: $('#prev_p1'),
    nextArrow: $('#next_p1'),
    slidesToShow: 1,
  });


  $('#program2_slider').slick({
    infinite: false,
    prevArrow: $('#prev_p2'),
    nextArrow: $('#next_p2'),
    slidesToShow: 1,
  });


  //History 1
	$( ".see-story" ).click(function() {
		  const what_support_width = $( "#what_support" ).width();

  		let wrapper = $( this ).parent().parent().parent();
  		let data = $( this ).parent().parent();
  		
      $('.box').removeClass( "active" );
      $('.data').css("width","auto");

      $( "#clicked_images" ).removeClass( "second-active" );
      $( "#clicked_images" ).removeClass( "third-active" );

      $( "#clicked_images" ).addClass( "first-active" );

  		wrapper.addClass( "active" );
  		data.css("width",what_support_width+"px");

      $('#full_text_1').css("width",(what_support_width-430)+"px");

      $('#history_slider').slick("refresh");
	});

	$( "#close_history_1" ).click(function() {
		let wrapper = $( this ).parent().parent().parent();
  		wrapper.removeClass( "active" );
  		
  		$( "#clicked_images" ).removeClass( "first-active" );

  		let data = $( this ).parent().parent();
  		data.css("width","auto");
	})

  $('#history_slider').slick({
    infinite: false,
    prevArrow: $('#prev_h1'),
    nextArrow: $('#next_h1'),
    slidesToShow: 1,
  });


  //History 1
  $( ".see-story2" ).click(function() {
      const what_support_width = $( "#what_support" ).width();

      let wrapper = $( this ).parent().parent().parent();
      let data = $( this ).parent().parent();
      
      $('.box').removeClass( "active" );
      $('.data').css("width","auto");

      $( "#clicked_images" ).removeClass( "first-active" );
      $( "#clicked_images" ).removeClass( "third-active" );

      $( "#clicked_images" ).addClass( "second-active" );

      wrapper.addClass( "active" );
      data.css("width",what_support_width+"px");

      $('#full_text_2').css("width",(what_support_width-430)+"px");

      $('#history2_slider').slick("refresh");
  });

  $( "#close_history_2" ).click(function() {
    let wrapper = $( this ).parent().parent().parent();
      wrapper.removeClass( "active" );
      
      $( "#clicked_images" ).removeClass( "second-active" );

      let data = $( this ).parent().parent();
      data.css("width","auto");
  })

  $('#history2_slider').slick({
    infinite: false,
    prevArrow: $('#prev_h2'),
    nextArrow: $('#next_h2'),
    slidesToShow: 1,
  });


  //History 3
  $( ".see-story3" ).click(function() {
      const what_support_width = $( "#what_support" ).width();

      let wrapper = $( this ).parent().parent().parent();
      let data = $( this ).parent().parent();

      $('.box').removeClass( "active" );
      $('.data').css("width","auto");

      $( "#clicked_images" ).removeClass( "first-active" );
      $( "#clicked_images" ).removeClass( "second-active" );
      
      $( "#clicked_images" ).addClass( "third-active" );

      wrapper.addClass( "active" );
      data.css("width",what_support_width+"px");

      $('#full_text_3').css("width",(what_support_width-430)+"px");
      $('#history3_slider').slick("refresh");
  });

  $( "#close_history_3" ).click(function() {
    let wrapper = $( this ).parent().parent().parent();
      wrapper.removeClass( "active" );
      
      $( "#clicked_images" ).removeClass( "third-active" );

      let data = $( this ).parent().parent();
      data.css("width","auto");
  })

  $('#history3_slider').slick({
    infinite: false,
    prevArrow: $('#prev_h3'),
    nextArrow: $('#next_h3'),
    slidesToShow: 1,
  });

  $('#slides').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  [1,2,3,4,5,6,7].forEach(function (type) {
    $( ".slide-box"+type).click(function() {

      $('.slide-box').removeClass("clicked");

      $(this).addClass('clicked');

      $(".hide-box").hide();

      $( "#slide" + type + "_detail" ).toggle();

      const what_support_width = $( "#what_support" ).width();

      if (what_support_width > 600) {
        $('.details-box').css("width",(what_support_width-360)+"px");
      } else {
        $('.details-box').css("width",(what_support_width)+"px");
      }

      $("#slide_box" + type + "_slider").slick("refresh");
    });

    $( "#close_slide-box" + type).click(function() {
      $( "#slide"+ type + "_detail" ).toggle();
      $('#slides').slick("refresh");
      $('.slide-box').removeClass("clicked");
    });

    $("#slide_box" + type + "_slider").slick({
      infinite: false,
      prevArrow: $("#prev_sl" + type),
      nextArrow: $("#next_sl" + type),
    });
  });



  // Scroll
  // Cache selectors
  var lastId,
      topMenu = $("#top-menu"),
      topMenuHeight = topMenu.outerHeight()-300,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop
    }, 1500);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;
     console.log()
     console.log($("#introduction").offset().top)

    if ($(this).scrollTop() > $("#introduction").offset().top) {
      $(".menu-scroll").removeClass("hide")
    } else {
      $(".menu-scroll").addClass("hide")
    }
     
     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";
     
     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href='#"+id+"']").parent().addClass("active");
     }                   
  });


});