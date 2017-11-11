$(function() {
console.log('Ready');

//variables
var userSequence = [];
var simonSequence = [];
var id, color, level = 0;

//1) start sequence
$('#start').click(function(){
  startSequence();
})


//2) start user replicate sequence



//simon sequence

function startSequence() {
getRandomNumber();
var i = 0;
var myInterval = setInterval(function() {
  id = simonSequence[i];
  color = $('#'+id).attr('class').split(" ")[1];
  console.log(id+" "+color);
  addTempClass(id, color);
  i++;
    if(i == simonSequence.length) {
      clearInterval(myInterval);
    }
  }, 1000);
}


//generate random number
function getRandomNumber() {
  var random = Math.floor(Math.random() * 4);
  simonSequence.push(random);
}

//add temp class
function addTempClass(id, color) {
  $('#'+id).addClass(color+'.active');
  setTimeout(function() {
    $('#'+id).removeClass(color+'.active');
  }, 500);

}
});
