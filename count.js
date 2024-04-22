console.log("hello word");
let first_num = document.getElementById('df')
let second_num = document.getElementById('dfs')
let ui = document.getElementById('ui')
let shownum = document.getElementById('show');

function down(){
    if(Number(second_num.value) < Number (first_num.value)){
        console.log(second_num.value)
        countDown();
    }else{
        alert('invalid input')
    }
   
}
function countDown(){
    let timer ;
    let sec = first_num.value
    let okay = second_num.value
    timer = setInterval(()=>{
        show.innerHTML = sec--;
        if(show.innerHTML == okay){
            clearinterval(timer);
           alert("stop now");
           
        }
    }, 1000);
}