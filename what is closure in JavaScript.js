// Corrected function to create a counter
function createCounter() {
    let count = 0; // Declare and initialize the count variable properly
    return function () {
        // This inner function forms a closure
        console.log('Student Name: Mang Chhunleang');
        count++; // Increment the count variable
        return count;
    };
}

// Create a counter instance
const counter = createCounter(); // Correctly assign the function to the counter variable

console.log(counter()); // Call the counter function
console.log(counter());
console.log(counter());