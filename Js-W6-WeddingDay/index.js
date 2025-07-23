function weddingCountDown(){
    const weddingDate = new Date("Month Day, Year Hour:Minutes");
    const now = new Date();
    console.log(weddingDate, now);
    const diff = weddingDate - now;
    console.log(diff)

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;
    
    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff<=0){
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0; 
    
    clearInterval(timerID)
    getMarried();
    }
}
let timerID = setInterval(weddingCountDown, 1000);

function getMarried(){
    const heading = document.querySelector("h1");
    heading.textContent = "You got Married!!!";
    heading.classList.add("congrads");

    const flowerEmoji = ['🌸','❀','💮','🌺','💮'];
        const numberOfFlowers = 50;

        for (let i = 0; i < numberOfFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerText = flowerEmoji[Math.floor(Math.random() * flowerEmoji.length)];
      
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.fontSize = 12 + Math.random() * 24 + 'px';
        flower.style.animationDuration = 5 + Math.random() * 5 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';

        document.body.appendChild(flower);
        flower.classList.add("congrads");
    }
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function(){
document.querySelector("#myAudio").play();
})
