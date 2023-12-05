function calculateInterest() {
    const P = Number(document.getElementById('amount').value);
    const r = Number(document.getElementById('interest').value) / 100;
    const n = Number(getPaymentsPerYear());
    const t = Number(document.getElementById('years').value);

    // Check if any of the input values are not a number or are negative
    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t) || P < 0 || r < 0 || n < 0 || t < 0) {
        alert('Please enter valid positive numerical values for all input fields.');
        return; // Exit the function if input values are invalid
    }

    const total = (P * (1 + r / n) ** (n * t)).toFixed(2);
    document.getElementById('total').value = total;
    return total;
}

function getPaymentsPerYear() {
    const paymentsElement = document.getElementById("payments");
    const payments = paymentsElement.value;
    return payments;
}

const paymentOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
];

paymentOptions.push(12)
const container = document.getElementById("paymentsContainer");

const labelElement = document.createElement("label");
labelElement.htmlFor = "payments";
labelElement.textContent = "Payments per year:";

const selectElement = document.createElement("select");
selectElement.id = "payments";
selectElement.title = "Choose how many payments per year";

for (var i = 0; i < paymentOptions.length; i++) {
    var option = document.createElement("option");
    option.value = paymentOptions[i];
    option.textContent = paymentOptions[i];
    selectElement.appendChild(option);
}

container.appendChild(labelElement);
container.appendChild(selectElement);

document.getElementById('calculate').addEventListener('click', calculateInterest);


fetch('https://api-ninjas.com/api/interestrate')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Assuming the JSON data has an array of interest rates
        const interestRates = data.interestRates;

        // Clear the existing paymentOptions array and push new interest rates
        paymentOptions.splice(0, paymentOptions.length, ...interestRates);

        // Update the options in the select element
        selectElement.innerHTML = '';
        for (let i = 0; i < paymentOptions.length; i++) {
            const option = document.createElement("option");
            option.value = paymentOptions[i];
            option.textContent = paymentOptions[i];
            selectElement.appendChild(option);
        }
    })
    .catch(error => console.error('Error fetching interest rates:', error));
