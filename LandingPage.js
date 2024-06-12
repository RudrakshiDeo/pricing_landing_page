//Sidebar
function showSidebar()
{
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display= 'flex'
}
function hideSidebar()
{
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display= 'none'
}

//Container-Currency
document.addEventListener('DOMContentLoaded', (event) => {
    convertCurrencies();
});

function convertCurrencies() 
{
    const currency = document.getElementById('currency').value;
    
    // Static exchange rates for demonstration purposes
    const exchangeRates = {                   
        'EUR': 0.85, // 1 USD = 0.85 EUR
        'GBP': 0.75, // 1 USD = 0.75 GBP
        'INR': 83.61,
        'JPY': 110.00, // 1 USD = 110.00 JPY
        'USD': 1
    };

    // Currency symbols
    const currencySymbols = {
        'EUR': '€',
        'GBP': '£',
        'INR': '₹',
        'JPY': '¥',
        'USD': '$'
    };
    
    const exchangeRate = exchangeRates[currency];
    const currencySymbol = currencySymbols[currency];
    
    // Convert all elements with the class 'price'
    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        const amountInUSD = parseFloat(price.getAttribute('data-usd'));
        const amountInTargetCurrency = amountInUSD * exchangeRate;
        price.innerText = `${currencySymbol}${amountInTargetCurrency.toFixed(2)}`;
    });
}