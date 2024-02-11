const mainbody = document.querySelector('.main')
const login = document.querySelector('.login');
const register = document.querySelector('.registerlink');
const loginPage = document.querySelector('.loginPage');
const hideLoginPage = document.querySelector('.hideLoginPage');
const registrationPage = document.querySelector('.registrationPage');
const loginButton = document.querySelector('.loginButton');
const close = document.querySelector('.close');





register.addEventListener('click', () => {
    console.log('reg clicked');
    mainbody.classList.add('active');
});

login.addEventListener('click', () => {
    console.log('log clicked');
    mainbody.classList.remove('active')
});

loginButton.addEventListener('click', () => {
    console.log('log clicked');
    mainbody.classList.add('ActiveLoginButtun')
});

close.addEventListener('click', () => {
    console.log('log clicked');
    mainbody.classList.remove('ActiveLoginButtun')
});