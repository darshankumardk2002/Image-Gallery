
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrpic=['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']

/* Declaring the alternative text for each image file */
const objalt={
    1:"Samsung Galaxy S24 Ultra",
    2:"iPhone 15 Pro Max",
    3:"Google Pixel 8 Pro",
    4:"Xiaomi 14 Ultra",
    5:"Oneplus 12"
}

/* Looping through images */
for(let i=0;i<5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', arrpic[i]);
    newImage.setAttribute('alt', Object.values(objalt)[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () =>{
        displayedImage.setAttribute('src',arrpic[i])
        displayedImage.setAttribute('alt',Object.values(objalt)[i])
    })
}

/* Wiring up the Darken/Lighten button */
let btnstatus
btn.addEventListener('click',() =>{
    btnstatus=btn.getAttribute("class")
    if(btnstatus==="dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
