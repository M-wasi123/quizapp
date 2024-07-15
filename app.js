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

let score = 0;
let count = 0;
let cout = 1
const questionLoad = () => {
    count++;
const questionList = quest[count]
question.innerHTML = questionList.que

option1.innerHTML  = questionList.ans1
option2.innerHTML = questionList.ans2
option3.innerHTML = questionList.ans3
option4.innerHTML = questionList.ans4

}

nextBtn.addEventListener('click',() => {
    cout++
    questionLoad()
    num.innerText = cout
    deselectAll()
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

const check = ()=>{
    let answer;
    rad.forEach
}

const deselectAll = () => {
    rad.forEach((currAnsElem) => {
        currAnsElem.checked = false
        nextBtn.disabled = true
        
    })
}
let sec = 60
let min = 9
const timer = ()=>{
setInterval(()=>{
sec--
if (sec == 1) {
    min--
}else if (min == 0) {
   alert('score') 
}
time.innerText = `${min.toString().padStart(2 , 0)}.${sec.toString().padStart(2 , 0)}`
},1000)
}

start.addEventListener('click',()=>{
    document.getElementById('start').style.display = 'none'
    timer()
    num.innerText = 1
})





