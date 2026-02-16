// console.log("Hello Java Script");
// console.log();
// console.log("sohan is the boss");

const elements = document.getElementsByTagName("li");
for(let element of elements){
    // console.log(element.innerText);
    if(element.innerText === 'Java Script'){
        // console.log(element.innerText);
    }
}


const allList = document.getElementsByTagName('li');
for(const list of allList){
    console.log(list);
}

const allHeadings = document.getElementsByTagName("h2");
for(const tag of allHeadings){
    console.log(tag.innerText);
}


const foods = document.getElementById('food-title');

foods.innerText = 'Food I love more.'
console.log(foods);

const allClass = document.getElementsByClassName("desert");
console.log(allClass);
for(const food of allClass){
    if(food.innerText.toLowerCase() === 'honey'){
        food.innerText = 'Chana';
        
    }
}

for(const food of allClass){
    console.log(food.innerText);
}


//find any element like as css using querySelectorAll() or querySelector() fn.

const findElement = document.querySelectorAll("#content p span");
console.log(findElement);


// dynamic style add

const foodTitle = document.getElementById('food-title');
console.log(foodTitle);
foodTitle.style.margin = "0px"
foodTitle.style.backgroundColor = 'lightSkyBlue'
foodTitle.style.fontSize = '3em'
foodTitle.style.color = 'red'


//add/remove any class
 foodTitle.classList.add('new');
 foodTitle.classList.remove('bg-color');

 // get any attribute id or class
 console.log(foodTitle.getAttribute('id'));
 console.log(foodTitle.getAttribute('class'));
 
 //set any attribute
 foodTitle.setAttribute('title','sohan love foods.');

// Show full html 
 document.getElementById('players-container').innerHTML;

//  Show in htmlCollection 
 /*
 const sections = document.getElementsByTagName('section');
 console.log(sections);
 */


//  Show in Node list 
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.classList.add('section-style');
}

const properties =  document.querySelectorAll('section h2');
for(const property of properties){
    property.style.color = 'red';
}


//Create a new element and set innerText.
const newChild = document.createElement('li');
newChild.innerText = 'Embappe';
const newChild1 = document.createElement('li');
newChild1.innerText = 'Cr7';

//find the parent where you will add the newChild.
const parent = document.getElementById('player-list');

//append the new child in parent.
parent.appendChild(newChild);
parent.appendChild(newChild1);
parent.appendChild(newChild1);



//create new section.
const mainContainer = document.getElementById('main-container');

const placesSection = document.createElement('section');

mainContainer.appendChild(placesSection);

const h2 = document.createElement('h2');
h2.innerText = 'Places I visited.';

placesSection.appendChild(h2);

console.log(placesSection);

placesSection.setAttribute('class', 'place-section');

const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.innerText = "Cox's Bazar";
li2.innerText = "Bandorbon";
li3.innerText = "Rangamati";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

placesSection.appendChild(ul);

//Another way to create new section.

const booksSection = document.createElement('section');

mainContainer.appendChild(booksSection);

booksSection.innerHTML = `

<h1>Books I have read.</h1>
    <ul>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Math</li>
        <li>Biology</li>
    </ul>

`
booksSection.setAttribute('class','book-container');

// console.log(booksSection.childNodes);
// console.log(booksSection.childNodes[0]);
// console.log(booksSection.childNodes[1]);
// console.log(booksSection.childNodes[2]);
// console.log(booksSection.childNodes[3]);
// console.log(booksSection.childNodes[3].childNodes[1].innerText);
// console.log(booksSection.childNodes[3].childNodes[3].innerText);
// console.log(booksSection.childNodes[3].childNodes[5].innerText);


