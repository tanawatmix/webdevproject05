let quiz = document.getElementById('quiz')
let midterm = document.getElementById('midterm')
let final = document.getElementById('final')

let btcalSumGrade = document.getElementById('bt-calSumGrade')
let btcancel = document.getElementById('bt-cancel')

function calSum(){
    let sum = parseInt(midterm.value) + parseInt(final.value)
    return sum
}

function calGrade(sum){
    if(sum >= 80){
        showSum.innerHTML = '<strong>ได้คะแนนรวม' + sum + 'คะแนน</strong>'
        showGrade.innerHTML = '<strong>ได้เกรด A</strong>'
    }else if (sum >= 50){
        showSum.innerHTML = '<strong>ได้คะแนนรวม' + sum + 'คะแนน</strong>'
        showGrade.innerHTML = '<strong>ได้เกรด B</strong>'
    }else {
        showSum.innerHTML = '<strong>ได้คะแนนรวม' + sum + 'คะแนน</strong>'
        showGrade.innerHTML = '<strong>ได้เกรด C</strong>'
    }
}

function varidateData(){
   
    if(quiz.value.length == 0){
        alert('ป้อน quiz ด้วย....')
        return false
    }else if ( isNaN(quiz.value)){
        alert('ป้อน quiz เป็นตัวเลขเท่านั้น')
        return false
    }if(midterm.value.length == 0){
        alert('ป้อน midterm ด้วย....')
        return false
    }else if ( isNaN(midterm.value)){
        alert('ป้อน idterm เป็นตัวเลขเท่านั้น')
        return false
    }if(final.value.length == 0){
        alert('ป้อน final ด้วย....')
        return false
    }else if ( isNaN(final.value)){
        alert('ป้อน final เป็นตัวเลขเท่านั้น')
        return false
    }
}

btcalSumGrade.addEventListener("click", () =>{
    varidateData (calGrade( calSum()))
    
    
})
