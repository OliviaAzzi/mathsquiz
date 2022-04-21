name1=localStorage.getItem("name1");
name2=localStorage.getItem("name2");
score1=0;
score2=0;
document.getElementById("player1_name").innerHTML=name1+"-";
document.getElementById("player2_name").innerHTML=name2+"-";
document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_score").innerHTML=score2;
document.getElementById("question_turn").innerHTML="question turn-"+name1;
document.getElementById("answer_turn").innerHTML="answer turn-"+name2;
function function2(){
    number1=document.getElementById("no1").value;
    number2=document.getElementById("no2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    
    question_statement="<h4>"+ number1 +" X "+ number2 +"</h4>";
    answer_statement="<br> answer- <input id='answer'>";
    button_statement="<br><br><button id='check_btn' onclick='check()'>check</button>";
    row=question_statement+answer_statement+button_statement;
    document.getElementById("output").innerHTML=row;
    document.getElementById("no1").value="";
    document.getElementById("no2").value="";
}  
question_turn="player1";
answer_turn="player2"
function check(){
    get_answer=document.getElementById("answer").value;
    if (get_answer==actual_answer) {
        if (answer_turn=="player1") {
           score1=score1+1; 
           document.getElementById("player1_score").innerHTML=score1;
        } else {
            score2=score2+1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("question_turn").innerHTML="question turn-"+name2;
    }else{
        question_turn="player1"
        document.getElementById("question_turn").innerHTML="question turn-"+name1;
    }
    if(answer_turn=="player1"){
        answer_turn="player2"
        document.getElementById("answer_turn").innerHTML="answer turn-"+name2;
    }else{
        answer_turn="player1"
        document.getElementById("answer_turn").innerHTML="answer turn-"+name1;
    }
    document.getElementById("output").innerHTML="";
}