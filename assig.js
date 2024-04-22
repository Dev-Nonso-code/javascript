let score = document.getElementById("score")
let scor = document.getElementById("scor")
let audio = document.getElementById("audio")
let aud = document.getElementById("aud")
let got = document.getElementById("got")
let video = document.getElementById("vido")
function checkGrade() {
    if (got.value == nonso.user && score.value >= 49 && score.value <= 100) {
        res.innerHTML = "your name is recongenzie"
        alert("username correct")
        video.play()

    }
    else if (got.value != nonso.user && score.value >= 101 || score.value <= 49) {
        res.innerHTML = "please check your username"
        alert("please cheack your username or Scores")
        video.pause()
        aud.play()
    }
    if (score.value <= 49 && got.value == nonso.user && scor.value == code.tel) {
        res.innerHTML = "olodo you fail"
        alert("you dont meet up the score, please try again later")
        aud.play()
    }
    else if (score.value >= 49 && got.value == nonso.user) {
        res.innerHTML = "you pass your Test"
        alert("all field are complete")
        audio.play()
        video.play()

    }
    if (score.value >= 101 && got.value == nonso.user) {
        res.innerHTML = "you are a scammer"
        alert("you can't score morethan 100")
        aud.play()
        video.pause()
    }

    if (scor.value != code.tel && score.value >= 101 && got.value != nonso.user) {
        res.innerHTML = "please check your student code and other input"
        alert("you can't login without complete student code")

    } else if (scor.value == code.tel && score.value >= 49 && score.value <= 100) {
        res.innerHTML = ""
        alert("your accout still processing")
    }
    if (score.value >= 101 || got.value !== nonso.user && score.value <= 49) {
        alert("you can't score morethan 100 or check your username and try again")
        aud.play()
        video.pause()
    }
}

var nonso = {
    user: "nonso"
}

var code = {
    tel: "090"
}

console.log(document.getElementById("scor").value);
console.log(code);
