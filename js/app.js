// 'use strict'
var w=document.querySelector(".slide").clientWidth;
var g=document.querySelector(".slide");
var h=document.querySelectorAll(".slide")
var first=$(".slider .slide")[0].cloneNode(true)
var second=$(".slider .slide")[1].cloneNode(true)
var third=$(".slider .slide")[2].cloneNode(true)
var fourth=$(".slider .slide")[3].cloneNode(true)

$(".slider").append(first)
$(".slider").append(second)
$(".slider").append(third)
$(".slider").append(fourth)
var c=0
document.addEventListener("transitionend",function(){
      if(c==$(".slide").length-4){
      c=(c+1+($(".slide").length-3))%($(".slide").length-3);
      $(".slide").stop().css("left",c*(-w));
      $(".slide").css("transition","none")
      }
    })

$(".next").click(function(){
    $(".slide").css("transition",".3s")
            c=(c+1+($(".slide").length-3))%($(".slide").length-3);
            $(".slide").stop().css("left",c*(-w));
})
$(".prev").click(function(){
      $(".slide").css("transition",".3s")

    c=(c-1+($(".slide").length-3))%($(".slide").length-3);
    $(".slide").css("left",c*(-w));
})
$(".rec-menu-img").eq(0).show();
$(".rec-menu-button button").eq(0).css("color","#c82323");
$(".rec-menu-button button").eq(0).css("border-bottom","2px solid red");

$(".rec-menu-button button").click(function(){
$(".rec-menu-button button").css("color","#a08b8b")
      $(this).css("color","#c82323")
$(".rec-menu-button button").css("border","none");

      $(this).css("border-bottom","2px solid red")

    var c=$(this).index();
    $(".rec-menu-img").hide( 1000 );
    $(".rec-menu-img").eq(c-1).show( 1000 );
})
var one=$(".test-footer ul li")[0].cloneNode(true);
$(".test-footer ul").append(one);
var liw=document.querySelector(".test-footer").clientWidth;
var lil=document.querySelectorAll(".test-footer ul li").length;
$(".test-footer ul").css("width",liw*lil);
a=0;




setInterval(function(){
      $(".test-footer ul").css("transition",".4s")
      a=(a+1+lil)%lil;
      $(".test-footer ul").css("left",-a*liw)
},3000)

document.addEventListener("transitionend",function(){
      if(a==lil-1){
            a=(a+1+lil)%lil;
            $(".test-footer ul").css("left",-a*liw)
            console.log("bitdi");
      $(".test-footer ul").css("transition","none")
      }
})