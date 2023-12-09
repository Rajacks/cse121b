function calculateInterest () {
    const P = Number(document.getElementById('amount').value);
    const r = Number(document.getElementById('interest').value) / 100;
    const n = Number(getPaymentsPerYear());
    const t = Number(document.getElementById('years').value);
    const total = (P * (1 + r/n)**(n*t)).toFixed(2)
    document.getElementById('total').value = total;
    return total;
}

function getPaymentsPerYear () {
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