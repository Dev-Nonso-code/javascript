let cbtQue = [
    {
        que: "What is your fav food",
        opt: ['Eba', 'Amala', 'Iyan', 'Fufu'],
        corrAns: 'Iyan'
    },
    {
        que: "What is your fav color",
        opt: ['Red', 'Pink', 'White', 'Yellow'],
        corrAns: 'Red'
    },
    {
        que: "What is your fav Car",
        opt: ['Jeep', '501', 'VoVo', 'Benz'],
        corrAns: '501'
    },
    {
        que: "What is your fav school",
        opt: ['OIL', 'APC', 'NMP', 'SQI'],
        corrAns: 'SQI'
    },
    {
        que: "What is your fav city",
        opt: ['Abuja', 'Aba', 'Ibadan', 'New York'],
        corrAns: 'New York'
    },
];
let sel_ans = [];
let index = 0;
let screen = document.getElementById("screen");
Array.push ('')

function showQue() {
    screen.innerHTML = `
    <h1>${index}. ${cbtQue[index].que}</h1>
    `
    cbtQue[index].opt.forEach((el) => {
        let opts = sel_ans
        if (sel_ans[index] == opts) {
            screen.innerHTML += `
           <input checked onclick="selected('${el}')" name='ans' type='radio' />
            <label>${el}</label> <br>
            `
        } else {
            screen.innerHTML += `
            <input onclick="selected('${el}')" name='ans' type='radio' />
             <label>${el}</label> <br>
             `
        }
    })
}
showQue()
function next() {
    index++;
    showQue()
    if (index == 4){
        index = 0;
    }
}
function prev() {
    if (index == 0){
        index = 4;
    }
    index--;
    showQue()
}
function selected(element){
  //  console.log(element);
    console.log(sel_ans);
}