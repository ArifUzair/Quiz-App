const questions = [{
    'que' : 'Which of the following keywords is used to define a variable in Javascript?',
     
    'a' : 'Var',
    'b' :  'Let',
    'c' : 'Both A and B',
    'd' : 'None of the above',
    'correct' : 'c'
    },

    {
        'que' : 'Which of the following methods can be used to display data in some form using Javascript?',
        'a': 'document.write()',
        'b' : 'console.log()',
        'c' : 'window.alert()',
        'd' : 'All of the above' ,
        'correct' : 'd'
    },

    {
        'que' :  'Can negative values be allowed in padding property?',
        'a': 'Yes',
        'b' : 'No',
        'c' : 'Depends on property',
        'd' :'None of the above',
        'correct': 'b'
    }
]

let index = 0;
let total  = questions.length;
let right = 0,
    wrong = 0;  
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const showScore = document.querySelector('#showScore');
const loadQuestion = () => {
    if(index=== total){
        return endQuiz()
    }
    reset();
    const data =  questions[index]
    console.log(data)
    quesBox.innerText =`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    }
        else{
            wrong++;
        }
        index++;
        loadQuestion();
        return;
    }

const getAnswer = () =>{
let answer;
 optionInputs.forEach(
    (input)=>{
        if(input.checked){
            answer=input.value;
        }
    })
    return answer;
}

 const reset = () =>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
 }
 const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
         <h3> Thanks for playing the quiz <h3>
        <h3> ${right}/${total} are correct </h3> 
        <button class="button2" onclick="location.reload()">Play Again</button>
    `;
 }

loadQuestion(); 