const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const elementP = document.createElement('p');
elementP.textContent = "Hey, i'm red!";
elementP.setAttribute('style', 'color:red');

const elementH3 = document.createElement('h3');
elementH3.textContent = "Hey, i'm blue!";
elementH3.setAttribute('style', 'color:blue');

const containerDiv = document.createElement('div');
containerDiv.setAttribute('style', 'text-align:center; border: 2px solid black; background-color:pink');


const elementH1 = document.createElement('h1');
elementH1.textContent = "I'm div!";

const p2 = document.createElement('p');
p2.textContent = "Hey, i'm a div too!";;




containerDiv.appendChild(elementH1)
containerDiv.appendChild(p2)



container.appendChild(content);
container.appendChild(elementP);
container.appendChild(elementH3);

container.append (containerDiv);


// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});