//repeate with the interval of 2 secs
let timeId = setInterval(() => alert('tick'), 2000);

//after 5 sec stop
setInterval(() => {clearInterval(timeId); alert('stop');}, 5000);