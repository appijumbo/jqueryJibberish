
// Select the article list 4
// output the mouse postion inside the another div as text

var mouse = {
  x : 0,
  y : 0,
  getX: function(x){
    return Math.round(this.x);
  },
  getY: function(y){
    return Math.round(this.y);
  }
};

var theInput = $("input");

var mouseArea = $("article ul > li:nth-child(4)");

var h2Inner = $("span.innerChild");

var h3Inner = $("span.innerChild").siblings("h3");

var p4Inner = $("span.innerChild").siblings("p:last");


// remember - always -pointing - to the -next one-
// and -prev- 'bumps' back the selction by one
var first3List = $("article > ul >li").nextUntil("button").prev()
//.css({"color":"white", "border":"5px solid #e2a"});

h2Inner.css({"color":"white", "background":"#111", "font-size":"20px"});

mouseArea.on( "mousemove", function(e){
  //console.log("the event" + JSON.stringify(e));
  //pageX  pageY

          mouse.x = e.pageX;
          mouse.y = e.pageY;
          console.log(`mouse position  =>  x ${mouse.getX()} y ${mouse.getY()}`);
          h2Inner.text(`mouse position  =>  x ${mouse.getX()} y ${mouse.getY()}`);
});


// Select h3 inner, make its background change when
// a capital letter is typed into the text input
var inputWords = $("textarea");

inputWords.on("keyup", function(e){
  e.preventDefault();
    //console.log(e.keyCode);
     if(e.keyCode === 13){
       h3Inner.addClass("textHighlite").toggle();
     }
});


/* select the first 3 list elements when the return key is pressed in the input */

theInput.on("keyup", function(e){
    //e.preventDefault();
    console.log(`input keyup ------> ${e.keyCode}`);
  if(e.keyCode === 32){
       first3List.addClass("first3Highlite").toggle();
     }
});

// when the first button is clicked add a list element to the top

//jQuery method
//$(".container").children().children().closest("article").children().children().closest("button").on("click", function(){

// but can use moder javascript --> querySelector and addEventListener instead
var container = document.querySelector(".container");
var listBlock = document.querySelector(".listBlock");

var prependButton = container.childNodes[1].childNodes[3].childNodes[1].childNodes[9];

prependButton.addEventListener("click", function(){
   console.clear();
   $(".listBlock").parent().prepend(`<li class="listBlock">${inputWords.val()}</li>`);
});


// when  clear button is clicked clear the text area and h3 inner
var removeButton = container.childNodes[1].childNodes[3].childNodes[1].childNodes[11];
removeButton.addEventListener("click", function(){

  listBlock.parentElement.childNodes[1].remove();

   console.clear();
   console.log("d===============");
});
