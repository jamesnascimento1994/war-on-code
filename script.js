const challenges = [
	{
		"difficulty": 'easiest',
		"starterCode": `
        function minus(a, b) {
            // your code here
        }`,
		"solution": `
            function minus(a, b) {
            return a - b;
        }`,
		"test": `
        testOutput(minus(250, 200), 50);
        testOutput(minus(345, 45), 300);
        `,
	},
	{
		"difficulty": 'easy',
		"starterCode": `function howManySeconds(hours) {
            // your code here
        }`,
		"solution": `function howManySeconds(hours) {
            let seconds = hours * 3600;
            return seconds;
        }`,
		"test": `
        testOutput(howManySeconds(5), 18,000);
        testOutput(howManySeconds(10), 36,000);
        `,
	},
	{
		"difficulty": 'medium',
		"starterCode": `function nextEdge(side1, side2) {
            // your code here
        }`,
		"solution": `function nextEdge(side1, side2) {
            let side3 = (side1 + side2) - 1;
            return side3;
        }`,
		"test": `
        testOutput(nextEdge(3, 6), 9);
        testOutput(nextEdge(7, 5), 12);   
        `,
	},
	{
		"difficulty": 'hard',
		"starterCode": `function sakuraFall(v) {
            // your code here
        }`,
		"solution": `function sakuraFall(v) {
            let speed = v;
            let distanceFell = 400;
            if (speed > 0) {
                let howManySeconds = distanceFell / speed;
                return howManySeconds;
            } else {
                return 0;
            }
        }`,
		"test": `
        testOutput(sakuraFall(8), 50);
        testOutput(sakuraFall(16), 25);
        `,
	},
	{
		"difficulty": 'hardest',
		"starterCode": `function maskify(cc) {
            // your code here
        }
        // HINT: you're going to have to create one other function that reverses a string`,
		"solution": `function maskify(cc) {
            if (cc.length > 4) {
                let reversedCC = reverse(cc);
                let newString = '';
                for (let i = 0; i < reversedCC.length; i++) {
                    if (i < 4) {
                        newString += reversedCC[i];
                    } else {
                        newString += '#';
                    }
                }
                    return reverse(newString);
                } else {
                    return cc;
            }
        }
        function reverse(str) {
            return str.split("").reverse().join();
        }`,
		"test": `
        testOutput(maskify("2"), "2");
        testOutput(maskify("467985"), "##7985");
        `,
	},
];

const initialCode = `
function adder(a, b) {
    return a + b;
}
`;
const testDefs = `
testOutput(adder(100, 23), 123);
testOutput(adder(23, 45), 68)
`;
window.evaluateIt = () => {
	const codeInput = document.getElementById('code');

	const concatenated = `${codeInput.value}
    
    function testOutput(actual, expected) {
        if (actual !== expected) {
            alert(\`NOPE! $\{actual\}
            should have been $\{expected} \`);
        } else {
            alert("Correct!");
        }
    }
    ${challenges.test}
    `;
	eval(concatenated);
};

function main() {
	const testDisplay = document.getElementById('tests');
    const codeInput = document.getElementById('code');
    for (let i = 0; i < challenges.length; i++) {
		codeInput.value = challenges[i].starterCode;
		testDisplay.innerHTML = challenges[i].test;
        console.log(challenges[i].starterCode);
        console.log(challenges[i].test)
    }
}

main();
