function Board(){
this.topLeft = 'a';
this.topCenter = 'b';
this.topRight = 'c';
this.centerLeft = 'd';
this.centerCenter = 'f';
this.centerRight = 'g';
this.bottomLeft = 'h';
this.bottomCenter = 'j';
this.bottomRight = 'l';
}
Board.prototype.checkForWinner = function (){
  if(this.topLeft === this.topCenter && this.topLeft === this.topRight) {
    return true
  } else if (this.centerLeft === this.centerCenter && this.centerLeft === this.centerRight) {
    return true
  } else if (this.bottomLeft === this.bottomCenter && this.bottomLeft === this.bottomRight) {
    return true
  } else if (this.topLeft === this.centerLeft && this.centerLeft === this.bottomLeft) {
    return true
  } else if (this.topLeft === this.centerLeft && this.centerLeft === this.bottomLeft) {
    return true
  } else if (this.topCenter === this.centerCenter && this.centerCenter === this.bottomCenter) {
    return true
  } else if (this.topRight === this.centerCenter && this.centerCenter === this.bottomLeft) {
    return true
  }  else if (this.topLeft === this.centerCenter && this.centerCenter === this.bottomRight) {
    return true
  } 
  else return false
}

Board.prototype.checkForTie = function(game){
  var valArray = Object.values(game)
  var regEx = /[a-z]/g
  if(valArray.some(e => regEx.test(e))){
    return false
  } else {
    return true
  }
}

function Player(name){
  this.name = name;
  this.gamesWon;
}
function khaledFunctio(winner){
  $("body").empty()
  $("body").addClass('allBlack')
  $('body').text(winner)
}

function spacesAreClickable(game){
  var counter = 1
  $("#board").on('click', '.box', function(event){
    var id = event.target.id;
  if(counter%2 !== 0){
    var turn = "X"
  }else{
    var turn = "O"
  } 
  $(`#${id}`).text(turn)
  game[id] = turn 
  counter++
  if(game.checkForWinner()){
    console.log(turn+ " WINS!!")
    return khaledFunctio(turn+" Wins!")
  };
  if(game.checkForTie(game)){
    console.log("tie")
    return khaledFunctio("tie !!!")
  }
})
}


$(document).ready(function(){
 var game = new Board()
  $('#form').submit(function(event){
    var player1 =  $("#player1").val()
    var player2 =  $("#player2").val()
    $("#players").html(`<strong>Player 1:</strong> ${player1} X | <strong>Player 2:</strong> ${player2} O`)
    event.preventDefault()
    spacesAreClickable(game,1)

  })
  


})
