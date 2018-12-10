function computeQuiz() {
	var qOne = document.getElementsByName('question1');
	var qTwo = document.getElementsByName('question2');
	var qThree = document.getElementsByName('question3');
    var qFour = document.getElementsByName('question4');
    var qFive = document.getElementsByName('question5');
    var qSix = document.getElementsByName('question6');
    var qSeven = document.getElementsByName('question7');
    var qEight = document.getElementsByName('question8');
    var qNine = document.getElementsByName('question9');
    var qTen = document.getElementsByName('question10');
	var score = 0;

	for (var i = 0, length = qOne.length; i < length; i++) {
		if (qOne[i].checked) {
			var ans1 = qOne[i].value
			if (qOne[i].value === 'c') {
				score +=10
			}
		}
	}
	for (var i = 0, length = qTwo.length; i < length; i++) {
		if (qTwo[i].checked) {
			var ans2 = qTwo[i].value
			if (qTwo[i].value === 'd') {
				score +=10
			}
		}
	}
	for (var i = 0, length = qThree.length; i < length; i++) {
		if (qThree[i].checked) {
			var ans3 = qThree[i].value;
			if (qThree[i].value === 'a') {
				score +=10
			}
		}
	}
	for (var i = 0, length = qFour.length; i < length; i++) {
		if (qFour[i].checked) {
			var ans4 = qFour[i].value
			if (qFour[i].value === 'd') {
				score +=10
			}
		}
    }
    for (var i = 0, length = qFive.length; i < length; i++) {
		if (qFive[i].checked) {
			var ans5 = qFive[i].value
			if (qFive[i].value === 'd') {
				score +=10
			}
		}
    }
    for (var i = 0, length = qSix.length; i < length; i++) {
		if (qSix[i].checked) {
			var ans6 = qSix[i].value
			if (qSix[i].value === 'b') {
				score +=10
			}
		}
    }
    for (var i = 0, length = qSeven.length; i < length; i++) {
		if (qSeven[i].checked) {
			var ans7 = qSeven[i].value
			if (qSeven[i].value === 'b') {
				score +=10
			}
		}
    }
    for (var i = 0, length = qEight.length; i < length; i++) {
		if (qEight[i].checked) {
			var ans8 = qEight[i].value
			if (qEight[i].value === 'a') {
				score +=10
			}
		}
    }
    for (var i = 0, length = qNine.length; i < length; i++) {
		if (qNine[i].checked) {
			var ans9 = qNine[i].value
			if (qNine[i].value === 'b') {
				score +=10
			}
		}
    }
    for (var i = 0, length = qTen.length; i < length; i++) {
		if (qTen[i].checked) {
			var ans10 = qTen[i].value
			if (qTen[i].value === 'c') {
				score +=10
			}
		}
	}
	if (ans1 == undefined || ans2 == undefined || ans3 == undefined || ans4 == undefined || ans5 == undefined || ans6 == undefined || ans7 == undefined || ans8 == undefined || ans9 == undefined || ans10 == undefined) {
alert('Please select all answers');
	} else {

	 if (score === 0){
		document.getElementById('message').value = 'Try again, you scored : ' + score;
	}
	 else if (score <= 25)  {
		document.getElementById('message').value = 'You can do better , you scored : ' + score;
	}
	else if (score === 50){
		document.getElementById('message').value = 'There is room for improvement, you scored : ' + score;
	}
	else if (score > 50){
		document.getElementById('message').value = 'congratulations! , you scored :' + score;

	}
	else {
		document.getElementById('message').value = 'Please select an answer'
	}

		event.preventDefault();

	//var fail = "Try again ";
	//var message = "congratulations!"; 


	//$(document).ready(function(){
	//	$("#bttn").click(function(){
	//		$("#ask").hide();
	//	});
	//});

}
} 