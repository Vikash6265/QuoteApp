
let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let quotebox = document.querySelector("quote-box"); 
let herosection = document.querySelector("hero-section");

const newApp = async () =>{

    const fetchdata = await fetch("https://www.quotable.io/random");
    const dataconvert = await fetchdata.json();
    
    const quotes = dataconvert.content;
    const author = dataconvert.author;

    h1.innerText = quotes;
    p.innerText = "~" + " " + author;

    quotebox.appendChild(h1);
    quotebox.appendChild(p);
    herosection.appendChild(button);

}
button.addEventListener("click",newApp);