let name = prompt("Enter username of facebook account")


let main = () => {

    let text1 = document.getElementById("first-text");
    let text2 = document.getElementById("second-text");
    let text3 = document.getElementById("third-text");
    let text4 = document.getElementById("fourth-text");
    let text5 = document.getElementById("fifth-text");
    let text6 = document.getElementById("sixth-text");
    let text7 = document.getElementById("seventh-text");
    let text8 = document.getElementById("eighth-text");
    

    setInterval(() => {
        text1.innerHTML = "<span>$</span> Innitializing Hack Program...";
    }, 2000);

    setInterval(() => {
        text2.innerHTML = `<span>$</span> Hacking <span class="username">"${name}"</span> username...`;
    }, 5000);

    setInterval(() => {
        text3.innerHTML = `<span>$</span> Username found <span class="username">"${name}"</span>...`;
    }, 8000);

    setInterval(() => {
        text4.innerHTML = `<span>$</span> Connecting to Facebook...`;
    }, 9.5 * 1000);

    setInterval(() => {
        text5.innerHTML = `<span>$</span> Decrypting password...`;
    }, 11 * 1000);

    setInterval(() => {
        text6.innerHTML = `<span>$</span> Password found! Logging in...`;
    }, 14 * 1000);

    setInterval(() => {
        text7.innerHTML = `<span>$</span> Successfully <span class="username">logged in! Logging out from 2 other devices...</span>`;
    }, 16 * 1000);

    setInterval(() => {
        text8.innerHTML = `<span>$</span> Successfull....`;
    }, 17 * 1000);
}

main();