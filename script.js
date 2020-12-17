const codeInput = document.getElementById('code');
const testDisplay = document.getElementById('tests');
let testIndex = 0;
let difficulty = document.querySelector('.difficulty');
// let submitButton = document.querySelector('button');
let nextChallengeButton = document.querySelector('.next-challenge');
nextChallengeButton.addEventListener('click', theNextChallenge);
function theNextChallenge() {
    testIndex = testIndex + 1;
    codeInput.value = challenges[testIndex].starterCode;
	testDisplay.innerHTML = challenges[testIndex].test;
	difficulty.innerHTML = challenges[testIndex].difficulty;
    nextChallengeButton.style.display = 'none';
    console.log(testIndex);
    document.querySelector('button').innerText = 'Submit';
}
const challenges = [
	{
		difficulty: 'easiest',
		starterCode: `function minus(a, b) {
       // your code here
   }
 // INSTRUCTIONS: create a function that takes two parameters and subtracts them from one another
 // code challenge taken from edabit.com`,
		test: `
        testOutput(minus(250, 200), 50);
        `,
	},
	{
		difficulty: 'easy',
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
		difficulty: 'medium',
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
		difficulty: 'hard',
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
		difficulty: 'hardest',
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
        } else {
            document.getElementById('tests').innerText = (\` $\{expected\} \`)
            document.querySelector('button').innerText = 'Correct!';
            nextChallengeButton.style.display = 'block';
        }
    }
    ${challenges[testIndex].test}`;
	eval(concatenated);
};

function main() {
	codeInput.value = challenges[testIndex].starterCode;
    testDisplay.innerHTML = challenges[testIndex].test;
    difficulty.innerHTML = challenges[testIndex].difficulty;
}

main();
