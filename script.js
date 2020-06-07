$(document).ready(function(){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "Yes  definitely", "As I see it", "yes", "Reply hazy", "Better not tell you now", "Cannot predict now", "My reply is no", "Outlook not so good", "Very doubtful"];
$("#answer").hide();

magic8Ball.askQuestion = function(question)
{
	$("#8ball").effect( "shake" );
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	$("#answer").fadeIn(4000);	
var randomNumber = Math.random(); 
var randomNumberForlistOfAnswers = randomNumber * this.listOfAnswers.length; 
var randomIndex = Math.floor(randomNumberForlistOfAnswers);
var answer = this.listOfAnswers[randomIndex];

	$("#answer").text( answer );

console.log(question);
console.log(answer);
};

var onClick = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	setTimeout( 
		function()  {
	var question = prompt("Ask a yes/no question");
	magic8Ball.askQuestion(question);
}, 500);

	
};

$("#questionButton").click( onClick );

});
