//main.js
console.log('hello');

//시간표시 함수
// function showDate(){
//     let d = new Date();
//     // 년도 year, 월 month, 일 date
//     let year = d.getFullYear();
//     console.log(year)
//     let month = d.getMonth() + 1;
//     let date = d.getDate();
//     document.getElementById('year').innerHTML = year;
//     document.getElementById('month').innerHTML = month;
//     document.getElementById('date').innerHTML = date;
// }

// showDate();

function changeBG(){
    //배경 바꾸기 함수 
    let arr = [
        'images/title-bg1.jpg',
        'images/title-bg2.jpg',
        'images/title-bg3.jpg',
        'images/title-bg4.jpg',
        'images/title-bg5.jpg',
        'images/title-bg6.jpg',
        'images/title-bg7.jpg',
        'images/title-bg8.jpg',
        'images/title-bg9.jpg',
        'images/title-bg10.jpg',
        'images/title-bg11.jpg',
        'images/title-bg12.jpg',
        'images/title-bg13.jpg',
        'images/title-bg14.jpg',
        'images/title-bg15.jpg',
        'images/title-bg16.jpg',
        'images/title-bg17.jpg',
        'images/title-bg18.jpg',
        
     ]

     // 랜덤값 생성
     let arrnum = Math.floor(Math.random() * arr.length);

     //  배경 변경
     document.body.style.backgroundImage = "url(" + arr[arrnum] +")";

}

// changeBG();
//일정 시간마다 자동으로 배경 바꾸기
setInterval(changeBG, 4000);