let months,days,now;
months=['january','February','March','April','May','June','July','August','September','Actober','November','December']
days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
now=new Date();

let nowDate,nowDay,nowMonths,nowYear;

nowDate=now.getDate();
nowday=days[now.getDay()];
nowMonths=months[now.getMonth()]
nowYear=now.getFullYear()

let toDayDate = document.getElementById('toDayDate');
toDayDate.insertAdjacentHTML(
    'beforeend','<div class="nowYear">${nowYear}</div>'
)