const btns = document.querySelectorAll('.btn'),
      password = '18011996';
let yanaBlank = document.querySelector('#yana'),
    peterBlank = document.querySelector('#peter'),
    resetBtn = document.querySelector('.btn-reset')  
    
if(localStorage.getItem('yana') && localStorage.getItem('peter')) {

} else {

    makeNewStorage();
}

function makeNewStorage() {
    localStorage.setItem('yana', 0);
    localStorage.setItem('peter', 0);
}


function plusZero(num) {
    if(num < 10) {
        return `0${num}`
    } else {
        return num
    }
}

function showNums() {
    yanaBlank.innerHTML = plusZero(localStorage.getItem('yana'));
    peterBlank.innerHTML = plusZero(localStorage.getItem('peter'));
}



btns.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.getAttribute('data') === 'peter') {
            localStorage.peter = +localStorage.peter + 1;
            peterBlank.innerHTML = plusZero(localStorage.getItem('peter'));
        } else {
            localStorage.yana = +localStorage.yana + 1;
            yanaBlank.innerHTML = plusZero(localStorage.getItem('yana'));
        }
    })
});

resetBtn.addEventListener('click', () => {
    let userPassword = prompt('Введите пароль для сброса: ');
    if(userPassword === password) {
        localStorage.clear();
        makeNewStorage();
        showNums();
    } else {
        alert('Пароль неверынй')
    }

});



showNums();

//Timer 

const deadline = 'January 31, 2021'

function timeRemaining(over) {
    let total = Date.parse(over) - Date.parse(new Date());
    let day = Math.floor(total / (1000 * 60 * 60 * 24));
    let hour = Math.floor(total / (1000 * 60 * 60) % 24);
    let minute = Math.floor(total / (1000 * 60) % 60);
    let second = Math.floor(total / 1000 % 60);

    return {
        'total': total,
        'day': day,
        'hour': hour,
        'minute': minute,
        'second': second
    }
}

function setTimer(over) {
    const day = document.querySelector('.day');
    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');

    let interval = setInterval(updateClock, 1000, over);

    function updateClock(over) {
        const time = timeRemaining(over);
        day.textContent = plusZero(time.day);
        hour.textContent = plusZero(time.hour);
        minute.textContent = plusZero(time.minute);
        second.textContent = plusZero(time.second);
    }
}
setTimer(deadline)


