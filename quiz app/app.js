var questions = [{
    'que': 'Which of the following ia  a mark up language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JAVASCRIPT',
    'd': "PHP",
    'correct': 'a'
},
{
    'que': 'What year was JavaScript Language?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': "none of tha above  ",
    'correct': 'b'
},
{
    'que': 'What does Css Stand For?',
    'a': 'Hypertext Markup Languege',
    'b': 'Cascading Style Sheet',
    'c': 'Jason Object  Notation',
    'd': "Helicopter Terminals Motorboats Lamborginis",
    'correct': 'b'
}
]

var index = 0;
var total = questions.length
var right = 0, wrong = 0;
var quesbox = document.getElementById("quesbox")
var optionInputs = document.querySelectorAll('.options')
var loadQuestion = () => {
    if(index === total){
        return  endQuiz()
    }
    reset()
    var data = questions[index]
    quesbox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
var submitQuiz = () =>{
    var data = questions[index]
    var ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
var getAnswer = () =>{
    var answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}
var reset = () =>{
    optionInputs.forEach(
        (input) =>{
           input.checked = false;
        }
    )
}
var endQuiz = () =>{
    document.getElementById("box").innerHTML = `
        <h3> Thank you for plaing the Quiz </h3>
        <h2>${right} / ${total} are correct </h2>
    `
}

loadQuestion();


