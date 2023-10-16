console.log('page is working');

// variables
let title = document.querySelector('#title');
let enter = document.querySelector('#enterBut');
let reset = document.querySelector('#resetBut');
// let resetBut = document.querySelector('#resetBut');
// let resetGame = document.querySelector('#resetGame');
// let password = document.querySelector('#password');
// let passwordBox = document.querySelector('#passwordBox');
// let mirror = document.querySelector('#mirror');
// let failVid = document.querySelector('#fail');
let magicVid = document.querySelector('#magic');
// let hint = document.querySelector('#hint');
// let correctPassword = 'mitochondria';


// ------------------------------------------------------------
// password submission
enter.addEventListener('click', () => {
    console.log("clicked");
    // console.log(password.value);

    // let newPass = password.value.toLowerCase();

    // if (newPass == correctPassword) {
    //     console.log('right');
    playMagic();
    // } else {
    //     console.log('wrong');
    //     playFail();
    // }
});

reset.addEventListener('click', () => {
    console.log('reset works');
    // failVid.style.visibility = "hidden";
    magicVid.style.visibility = "hidden";
    reset.style.visibility = "hidden";
    enter.style.visibility = "visible";
    // resetBut.style.visibility = "hidden";
    // resetGame.style.visibility = "hidden";
    // title.style.visibility = "visible";
    // hint.style.visibility = "hidden";
    // failVid.pause();
    // failVid.currentTime = 0;
    magicVid.pause();
    magicVid.currentTime = 0;
    // password.value = "";
    // passwordBox.style.visibility = "visible";
    title.innerHTML = "Winner!";
})

// function playFail() {
//     failVid.style.visibility = "visible";
//     reset.style.visibility = "visible";
//     resetGame.style.visibility = "hidden";
// resetBut.style.visibility = "visible";
//     title.style.visibility = "hidden";
//     hint.style.visibility = "visible";
//     failVid.play();
//     password.value = "";
//     passwordBox.style.visibility = "hidden";
// }

function playMagic() {
    magicVid.style.visibility = "visible";
    // resetBut.style.visibility = "visible";
    // resetGame.style.visibility = "visible";
    reset.style.visibility = "visible";
    enter.style.visibility = "hidden";
    magicVid.play();
    magicVid.loop = 'true';
    // password.value = "";
    // passwordBox.style.visibility = "hidden";
    title.innerHTML = "You've won... <br> A FREE CRUMBL COOKIE!";

}


