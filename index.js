function interpretTest() {
    const testSelect = document.getElementById('test-select');
    const testValue = document.getElementById('test-value');
    const interpretationDiv = document.getElementById('test-interpretation');

    const test = testSelect.value;
    const value = parseFloat(testValue.value);

    if (!test || isNaN(value)) {
        interpretationDiv.textContent = 'Please select a test and enter a valid number.';
        return;
    }

    let interpretation = '';

    switch (test) {
        case 'creatinine':
            if (value < 0.6) {
                interpretation = 'Your creatinine level is low. This might indicate decreased muscle mass.';
            } else if (value >= 0.6 && value <= 1.2) {
                interpretation = 'Your creatinine level is within the normal range.';
            } else {
                interpretation = 'Your creatinine level is high. This might indicate impaired kidney function.';
            }
            break;
        case 'bun':
            if (value < 7) {
                interpretation = 'Your BUN level is low. This might indicate overhydration or liver disease.';
            } else if (value >= 7 && value <= 20) {
                interpretation = 'Your BUN level is within the normal range.';
            } else {
                interpretation = 'Your BUN level is high. This might indicate dehydration or impaired kidney function.';
            }
            break;
        case 'potassium':
            if (value < 3.5) {
                interpretation = 'Your potassium level is low. This might cause muscle weakness or heart rhythm problems.';
            } else if (value >= 3.5 && value <= 5.0) {
                interpretation = 'Your potassium level is within the normal range.';
            } else {
                interpretation = 'Your potassium level is high. This can be dangerous and affect heart function.';
            }
            break;
        case 'phosphorus':
            if (value < 2.5) {
                interpretation = 'Your phosphorus level is low. This might affect bone health.';
            } else if (value >= 2.5 && value <= 4.5) {
                interpretation = 'Your phosphorus level is within the normal range.';
            } else {
                interpretation = 'Your phosphorus level is high. This might lead to calcium imbalance and affect bone health.';
            }
            break;
    }

    interpretationDiv.textContent = interpretation;
}