import {quest} from "./config.js";
console.log(quest)

let time = document.getElementById('time')
let num = document.getElementById('num')
let question = document.getElementById('h3')
let option1 = document.getElementById('answ1')
let option2 = document.getElementById('answ2')
let option3 = document.getElementById('answ3')
let option4 = document.getElementById('answ4')
let nextBtn = document.getElementById('next')
let skip = document.getElementById('skip')
let rad = document.querySelectorAll('.ans')
let start = document.getElementById('st-quiz')
let percentage = document.getElementById('per')
let winner = document.getElementById('win')
let restart = document.getElementById('restart')

let score = 0;
let count = 0;
let cout = 1;


const check = () => {
    let answer;
    const rad = document.querySelectorAll('input[name="ans"]');
    
    rad.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id
        }
    });
    return answer
};
const questionLoad = () => {
    count++;
const questionList = quest[count]
question.innerText = questionList.que

option1.innerText  = questionList.ans1
option2.innerText = questionList.ans2
option3.innerText = questionList.ans3
option4.innerText = questionList.ans4

}

nextBtn.addEventListener('click',() => {
    cout++
    const chec = check()
    if (chec == quest[count].ans) {
       score++
    }
    questionLoad()
    if (count == 25) {
        num.innerHTML = 25
    }else{
        num.innerHTML = cout
    }
    deselectAll()
    if (cout > 25) {
        document.getElementById('score').classList.add('block')
        percentage.innerText = `${score*'4'.toString().padStart(2 , 0)}%`
        clearInterval(tim)
        if (score > 79) {
            document.getElementById('per').style.color = 'green'
         winner.innerHTML = 'you are genious'
        } else {
             document.getElementById('per').style.color = 'red'
         winner.innerHTML = 'you are loser'
        }
    }
    if (cout > 25) {
        document.getElementById('score').classList.add('block')
        percentage.innerText = `${score*'4'.toString().padStart(2 , 0)}%`
        if (score > 79) {
            document.getElementById('per').style.color = 'green'
            winner.innerHTML = 'you are genious'
        } else {
            document.getElementById('per').style.color = 'red'
            document.getElementById('sco').style.border = '1px 1px 1px 1px '
            winner.innerHTML = 'you are loser'
        }
    }
})
skip.addEventListener('click',()=>{
    alert('One time chance to skip question are you agree to skip this question then press ok')
questionLoad()
skip.disabled = true
})
rad.forEach((currAnsElem)=>{
    currAnsElem.addEventListener('click',(currAnsElem)=>{
            nextBtn.disabled = false 
    })
})
console.log(score)
document.addEventListener('click', check);
const deselectAll = () => {
    rad.forEach((currAnsElem) => {
        currAnsElem.checked = false
        nextBtn.disabled = true
        
    })
}
let sec = 60
let min = 5
const timer = ()=>{
const tim = setInterval(()=>{
sec--
if (sec == 0) {
    sec = 59
    min--
}else if (min == 0) {
    sec = 0
    document.getElementById('score').classList.add('block')
    percentage.innerText = `${score*'4'.toString().padStart(2 , 0)}%`
    clearInterval(tim)
    if (score > 79) {
        document.getElementById('per').style.color = 'green'
        winner.innerHTML = 'you are genious'
    } else {
        document.getElementById('per').style.color = 'red'
        document.getElementById('sco').style.border = '1px 1px 1px 1px '
        winner.innerHTML = 'you are loser'
    }
}
time.innerText = `${min.toString().padStart(2 , 0)}.${sec.toString().padStart(2 , 0)}`
},1000)
return tim
}

start.addEventListener('click',()=>{
    document.getElementById('start').style.display = 'none'
    timer()
    num.innerText = 1
})

restart.addEventListener('click',()=>{
   window.location.reload()

})



