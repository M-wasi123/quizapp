import {quest} from "./config.js";
console.log(quest)

let time = document.getElementById('time')
let num = document.getElementById('num')
let question = document.getElementById('h3')
let option1 = document.getElementById('answ1')
let option2 = document.getElementById('answ2')
let option3 = document.getElementById('answ3')
let option4 = document.getElementById('answ4')
let previousBtn = document.getElementById('previous')
let nextBtn = document.getElementById('next')
let skip = document.getElementById('skip')
let radio = document.querySelectorAll('.ans')

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

// const checked = ()=>{
//     radio.forEach((curElement)=>{
//         curElement.checked = false
//         const answe = curElement.checked.id
        
//     })
// }
const CheckAnswer = () => {
    let answer;

    radio.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }

    });
    return answer
}

const deselectAll = () => {
    radio.forEach((currAnsElem) => currAnsElem.checked = false)
}
