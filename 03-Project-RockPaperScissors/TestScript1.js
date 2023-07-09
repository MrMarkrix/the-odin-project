
//Active learning: Filling in a guest list
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';








//Active learning: Launch countdown

const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');
    if (i === 10){
     para.textContent = `Countdown ${i}`;
    } else if (i === 0){
     para.textContent = 'Blast off';
    } else {
     para.textContent = i;
    }
   output.appendChild(para);

i--;}



let a = 0;
while (++a < 5) alert( a );
//The first value is a = 1, because ++a first increments a and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1.
//Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable.
//Finally, a = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.

let b = 0;
while (b++ < 5) alert( b );
//The first value is again b = 1. The postfix form of b++ increments b and then returns the old value, so the comparison b++ < 5 will use b = 0 (contrary to ++a < 5).
//But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current b = 1.
//Then follow 2, 3, 4…
//Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.
//The value b = 5 is the last one, because on the next step while(5 < 5) is false.

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
//from 0 to 4 in both cases.

//Execute once i = 0 before everything (begin).
//Check the condition i < 5
//If true – execute the loop body alert(i), and then i++