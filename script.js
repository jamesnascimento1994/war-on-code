const codeInput = document.getElementById('code');
const testDisplay = document.getElementById('tests');
let index = 0;
let difficulty = document.querySelector('.difficulty');
let tryAgainButton = document.querySelector('.try-again');
tryAgainButton.addEventListener('click', tryAgain);
let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset)
let nextChallengeButton = document.querySelector('.next-challenge');
nextChallengeButton.addEventListener('click', theNextChallenge);
function theNextChallenge() {
	index = index + 1;
	codeInput.value = challenges[index].starterCode;
	testDisplay.innerHTML = challenges[index].test;
	difficulty.innerHTML = challenges[index].difficulty;
	nextChallengeButton.style.display = 'none';
	document.querySelector('button').innerText = 'Submit';
}

function tryAgain() {
	codeInput.value = challenges[index].starterCode;
	testDisplay.innerHTML = challenges[index].test;
	difficulty.innerHTML = challenges[index].difficulty;
	tryAgainButton.style.display = 'none';
	document.querySelector('button').style.display = 'block';
}

function reset(e) {
   e.preventDefault();
   document.location.href = "";
}

const challenges = [
	{
		difficulty: 'So easy, a caveman could do it!',
		starterCode: `function minus(a, b) {
       // your code here
   }
 // INSTRUCTIONS: create a function that takes two parameters and subtracts them from one another
 // code challenge taken from edabit.com`,
		test: `
        testOutput(minus(250, 200), 50);`,
	},
	{
		difficulty: "Easy, but I'm not sure a caveman could do it!",
		starterCode: `function howManySeconds(hours) {
        // your code here
    }
    // INSTRUCTIONS: create a function that converts hours into second
    // code challenge taken from edabit.com`,
		test: `
        testOutput(howManySeconds(5), 18000);
        `,
	},
	{
		difficulty: 'Casual',
		starterCode: `function nextEdge(side1, side2) {
        // your code here
    }
    // INSTRUCTIONS: create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers
    // code challenge taken from edabit.com`,
		test: `
        testOutput(nextEdge(3, 6), 8); 
        `,
	},
	{
		difficulty: 'Hardcore',
		starterCode: `function sakuraFall(v) {
        // your code here
    }
    // INSTRUCTIONS: When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.
    // Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.
    // Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
    // NOTE: If the initial velocity is a negative integer, the return value should be 0.
    // code challenge taken from codewars.com`,
		test: `
        testOutput(sakuraFall(8), 50);
        `,
	},
	{
		difficulty: 'Insane',
		starterCode: `function maskify(cc) {
        // your code here
    }
// INSTRUCTIONS: create a function that masks credit card numbers by changing all but the last four characters into '#'
// HINT: you're going to have to create one other function that reverses a string
// code challenge taken from codewars.com`,
		test: `
        testOutput(maskify("46873487498"), "#######7498");
        `,
	},
];

window.evaluateIt = () => {
	const concatenated = `${codeInput.value}
    
    function testOutput(actual, expected) {
        if (actual !== expected) {
            document.getElementById('tests').innerText = (\`The result returned is $\{actual\}
            should have been $\{expected\} \`);
            tryAgainButton.style.display = 'block';
            document.querySelector('button').style.display = 'none';
        } else if (index == 4) {
            document.querySelector('button').innerText = 'Correct!';
            nextChallengeButton.style.display = 'none';
            resetButton.style.display = 'block';
        }
        else {
            document.getElementById('tests').innerText = (\` $\{expected\} \`)
            document.querySelector('button').innerText = 'Correct!';
            nextChallengeButton.style.display = 'block';
        }
    }
    ${challenges[index].test}`;
	eval(concatenated);
};

function main() {
	codeInput.value = challenges[index].starterCode;
	difficulty.innerHTML = challenges[index].difficulty;
	testDisplay.innerHTML = challenges[index].test;
}
main();
