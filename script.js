function calculateLTV() {
    const mortgageType = document.getElementById('mortgage-type').value;
    let ltv = 0;

    if (mortgageType === 'heloc-second-mortgage') {
        const loanAmount = parseFloat(document.getElementById('loan-amount').value);
        const currentMortgage = parseFloat(document.getElementById('current-mortgage').value);
        const appraisalValue = parseFloat(document.getElementById('appraisal-value').value);

        if (isNaN(loanAmount) || isNaN(currentMortgage) || isNaN(appraisalValue) || appraisalValue === 0) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        ltv = ((currentMortgage + loanAmount) / appraisalValue) * 100;
    } else if (mortgageType === 'first-mortgage') {
        const loanAmount = parseFloat(document.getElementById('loan-amount').value);
        const appraisalValue = parseFloat(document.getElementById('appraisal-value').value);

        if (isNaN(loanAmount) || isNaN(appraisalValue) || appraisalValue === 0) {
            alert('Please enter valid numbers for all fields.');
            return;
        }

        ltv = (loanAmount / appraisalValue) * 100;
    }

    document.getElementById('ltv-result').innerText = `LTV: ${ltv.toFixed(2)}%`;
}

function updateForm() {
    const mortgageType = document.getElementById('mortgage-type').value;
    const formFields = document.getElementById('form-fields');
    formFields.innerHTML = '';

    if (mortgageType === 'heloc-second-mortgage') {
        formFields.innerHTML = `
            <label for="loan-amount">Loan Amount:</label>
            <input type="number" id="loan-amount" placeholder="Enter loan amount" required>
            <label for="current-mortgage">Current Mortgage Balance:</label>
            <input type="number" id="current-mortgage" placeholder="Enter current mortgage" required>
            <label for="appraisal-value">Appraisal Value:</label>
            <input type="number" id="appraisal-value" placeholder="Enter appraisal value" required>
        `;
    } else if (mortgageType === 'first-mortgage') {
        formFields.innerHTML = `
            <label for="loan-amount">Finance Amount:</label>
            <input type="number" id="loan-amount" placeholder="Enter loan amount" required>
            <label for="appraisal-value">Appraisal Value:</label>
            <input type="number" id="appraisal-value" placeholder="Enter appraisal value" required>
        `;
    }
}

updateForm();

function calculateTDS() {
    const monthlyDebt = parseFloat(document.getElementById('monthly-debt').value);
    const housingCosts = parseFloat(document.getElementById('housing-costs').value);
    const grossIncome = parseFloat(document.getElementById('gross-income').value);

    if (isNaN(monthlyDebt) || isNaN(housingCosts) || isNaN(grossIncome) || grossIncome === 0) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const tds = ((monthlyDebt + housingCosts) / grossIncome) * 100;
    document.getElementById('tds-result').innerText = `TDS: ${tds.toFixed(2)}%`;
}

function calculateGDS() {
    const housingCosts = parseFloat(document.getElementById('housing-costs').value);
    const grossIncome = parseFloat(document.getElementById('gross-income').value);

    if (isNaN(housingCosts) || isNaN(grossIncome) || grossIncome === 0) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const gds = (housingCosts / grossIncome) * 100;
    document.getElementById('gds-result').innerText = `GDS: ${gds.toFixed(2)}%`;
}

function goBack() {
    location.reload(); // Reload the page to go back to the original content
}
function qualifyClient() {
    const ltvResult = document.getElementById('ltv-result').innerText;
    const tdsResult = document.getElementById('tds-result').innerText;
    const gdsResult = document.getElementById('gds-result').innerText;

    // Check if any of the results are empty and alert the user if so
    if (!ltvResult || !tdsResult || !gdsResult) {
        alert('Please calculate all values before qualifying the client.');
        return;
    }

    const report = `
        Prequalification Report:
        - LTV Result: ${ltvResult}
        - TDS Result: ${tdsResult}
        - GDS Result: ${gdsResult}
    `;

    // Display the report in the report container
    document.getElementById('report-container').innerText = report;
}
