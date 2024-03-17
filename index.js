// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate an array of 5 random numbers
function generateRandomNumbers() {
    const numbers = [];
    const min = 1; // Minimum number
    const max = 100; // Maximum number

    for (let i = 0; i < 5; i++) {
        numbers.push(getRandomNumber(min, max));
    }

    return numbers;
}

// Function to calculate the total of an array of numbers
function calculateTotal(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

module.exports = {
    generateRandomNumbers,
    calculateTotal
};
