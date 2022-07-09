player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

answer_turn = "player1";
question_turn = "player2";

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send() {
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("word to lower case" + word);
    charAt1 = word.charAt(1);
    console.log("charAt1 :" + charAt1);
    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divide_2);
    console.log("charAt2 :" + charAt2);
    charAt3 = word.charAt(word.length - 1);
    console.log("charAt3 :" + charAt3);
    replace_charAt1 = word.replace(charAt1, "_");
    replace_charAt2 = replace_charAt1.replace(charAt2, "_");
    replace_charAt3 = replace_charAt2.replace(charAt3, "_");

    question_word = "<center><h4 id='display_word'> Q. " + replace_charAt3 + "</h4>";
    answer_word = "<br><input id='answer_input' type='text'>";
    chech_btn = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button></center>";
    document.getElementById("output").innerHTML = question_word + answer_word + chech_btn;
    document.getElementById("word").value = '';
}

function check() {
    get_answer = document.getElementById("answer_input").value;
    get_answer = get_answer.toLowerCase();
    console.log("get_answer" + get_answer);

    if (word == get_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn :" + player1_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn :" + player2_name;
    } else {
        answer_turn = "player1";
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn :" + player2_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn :" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}