const colors = ["green", "red", "rgba(133, 122, 200)", "#F15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){ 
    // the goal here is to get a random number between 0 - 3 colors[]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){ 
    return (Math.floor(Math.random() * colors.length));
}

