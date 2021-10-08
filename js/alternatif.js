const showTime = () => {
    const date = new Date();
    let [hour, minute, second, day] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getDay()];
    let dayName = date.getDay();
    switch (dayName) {
        case 1:
            dayName = 'Pazartesi';
            break;
        case 2:
            dayName = 'Salı';
            break;
        case 3:
            dayName = 'Çarşamba';
            break;
        case 4:
            dayName = 'Perşembe';
            break;
        case 5:
            dayName = 'Cuma';
            break;
        case 6:
            dayName = 'Cumartesi';
            break;
        case 0:
        case 7:
            dayName = 'Pazar';
            break;
    }

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;

    const timer = `${hour}:${minute}:${second} ${dayName}`;
    document.querySelector('#myClock').innerText = timer;
    

    setTimeout(showTime, 1000);
}
showTime();