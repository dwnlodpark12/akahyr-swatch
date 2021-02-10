$(document).ready(function () {
  //변수 ht에 브라우저의 높이값 저장 
  var ht = $(window).height();
  //브라우저의 높이 값을 section의 높이 값으로 지정
  $("section").height(ht);

  //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값 갱신
  $(window).on("resize", function () {
    //변수 ht에 브라우저의 높이값 저장 
    var ht = $(window).height();
    //브라우저의 높이 값을 section의 높이 값으로 지정
    $("section").height(ht);
  });

  $("section").on("mousemove", function (e) {
    //변수 posX에 마우스커서의 x축 위치를 저장
    var posX = e.pageX;
    //변수 posY에 마우스커서의 y축 위치를 저장
    var posY = e.pageY;

    //첫번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
    $(".p11").css({
      right: 20 - (posX / 30),
      bottom: 20 - (posY / 30)
    });
    $(".p12").css({
      right: 130 - (posX / 20),
      bottom: -40 - (posY / 20)
    });
    $(".p13").css({
      right: 60 - (posX / 10),
      bottom: 180 - (posY / 10)
    });
    $(".p21").css({
      right: -180 - (posX / 30),
      bottom: -480 - (posY / 30)
    });
    $(".p22").css({
      right: 130 - (posX / 20),
      bottom: -40 - (posY / 20)
    });
    $(".p31").css({
      right: 180 - (posX / 30),
      bottom: 30 - (posY / 30)
    });
    $(".p32").css({
      right: 110 - (posX / 20),
      bottom: -270 - (posY / 20)
    });
    $(".p33").css({
      right: -70 - (posX / 10),
      bottom: -130 - (posY / 10)
    });
    $(".p41").css({
      right: 20 - (posX / 30),
      bottom: -120 - (posY / 30)
    });
    $(".p42").css({
      right: 0 - (posX / 20),
      bottom: -180 - (posY / 20)
    });

  });
  //메뉴 버튼 클릭시 
  $("#menu li").click(function (e) {
    e.preventDefault();

    //변수 ht 의 브라우저 높이값을 저장
    var ht = $(window).height();

    //변수 i에 현재 클릭한 li의 인덱스값을 저장
    var i = $(this).index();

    //브라우저의 높이값 *박스의 인덱스값 = 현재 박스의 스크롤 위치값과 동일

    var nowTop = i * ht;

    //해당 스크롤의 위치값으로 이동
    $("html,body").stop().animate({
      "scrollTop": nowTop
    }, 1400);
  });
  $(window).scroll(function () {
    //변수 ht에 현재 브라우저의 높이값 저장
    var ht = $(window).height();
    //변수 scroll에 현재 문서가 스크롤된 거리 저장
    var scroll = $(window).scrollTop();

    if (scroll >= ht * 0 && scroll < ht * 1) {
      $("#menu li").removeClass();
      $("#menu li").eq(0).addClass("on");
    }
    if (scroll >= ht * 1 && scroll < ht * 2) {
      $("#menu li").removeClass();
      $("#menu li").eq(1).addClass("on");
    }
    if (scroll >= ht * 2 && scroll < ht * 3) {
      $("#menu li").removeClass();
      $("#menu li").eq(2).addClass("on");
    }
    if (scroll >= ht * 3 && scroll < ht * 4) {
      $("#menu li").removeClass();
      $("#menu li").eq(3).addClass("on");
    }
  });

  /*section 위에서 마우스 휠을 움직이면*/
  $("section").on("mousewheel", function (event, delta) {

    if (delta > 0) { //마우스 휠을 올렸을 때
      //변수 prev에 휠을 움직였을 때 section에서 이전 section의 offset().top위치 저장
      var prev = $(this).prev().offset().top;
      $("html,body").stop().animate({
        "scrollTop": prev
      }, 1400, "easeOutBounce");
    } else if (delta < 0) { //마우스 휠을 내렸을 때
      var next = $(this).next().offset().top;
      $("html,body").stop().animate({
        "scrollTop": next
      }, 1400, "easeOutBounce");
    }

  });









}); //ready end