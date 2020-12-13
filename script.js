const initialCode = `
function adder(a, b) {
    return a + b;
}
`
const testDefs = `
testOutput(adder(100, 23), 123);
testOutput(adder(23, 45), 68)
`
window.evaluateIt = () => {
    const codeInput = document.getElementById("code");

    const concatenated = `${codeInput.value}
    
    function testOutput(actual, expected) {
        if (actual !== expected) {
            alert(\`NOPE! $\{actual\}
            should have been $\{expected} \`);
        } else {
            alert("Correct!");
        }
    }
    ${testDefs}
    `;
    eval(concatenated);
}

function main() {
    const testDisplay = document.getElementById("tests");
    const codeInput = document.getElementById("code");
    codeInput.value = initialCode;
    testDisplay.innerHTML = testDefs;
}

main();