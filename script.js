// Function to fetch and display currency conversion
async function convertCurrency() {
    const amount = document.getElementById('amount').value; // Get the amount from input field
    const currency = document.getElementById('currency').value; // Get the selected currency
    const resultDiv = document.getElementById('result'); // The div to display the result
  
    // Check if the amount is empty or invalid
    if (amount === "" || isNaN(amount)) {
      resultDiv.innerHTML = "Please enter a valid amount in INR.";
      return;
    }
  
    const apiKey = '68dba5879ee54acb642c82c2'; // Replace with your actual API key from ExchangeRate-API
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`; // API endpoint for INR to other currencies
  
    try {
      // Fetch data from the API
      const response = await fetch(url);
      const data = await response.json(); // Parse the response as JSON
  
      // Check if the API call was successful
      if (data.result === "success") {
        // Get the exchange rate for the selected currency
        const rate = data.conversion_rates[currency];
  
        // If the rate is not found (invalid currency code), handle the error
        if (!rate
  