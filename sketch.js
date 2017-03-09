var txt;
var riStr = [];
var words = [];
var fullWords = [];
function preload() {
  txt = loadStrings("curation.txt");

}

function setup() {
  song = loadSound('music.m4a');
  for(var i = 0; i < txt.length; i++){
    riStr[i]  = new RiString(txt[i]);
    words[i]  = riStr[i].words();
  }

  for(var i = 0; i < words.length; i++){
    for(var j = 0; j< words[i].length;j++){
      fullWords += words[i][j];
      fullWords += " ";
    }
  }

  fullWords = fullWords.split(/(\W+)/);


  for(var i = 0; i < fullWords.length; i++){
    var span1 = createSpan(fullWords[i]);
    span1.parent(output);
    /*
    var span2 = createSpan(" ");
    span2.parent(output);
    */
    if(!/\W+/.test(fullWords[i])){
      //span1.style('background-color',color(255,0,0));
      span1.mousePressed(highlight);
    }
  }

  createCanvas();
  fullscreen();
  background(51);

  //createP(fullWords);
}
//output.style('font-size',24);
function highlight() {
  console.log(this.html());
  var c = color(random(255),random(255),random(255));
  this.style('background-color',c);
  this.style('color',c);

}

function keyPressed() {
    if(keyCode == UP_ARROW) {
        song.play();
    } else if (keyCode == DOWN_ARROW) {
        song.stop();
    }
}
