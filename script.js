//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    // Get input values
    let text = document.getElementById("text").value;
    let delay = document.getElementById("delay").value;
    let output = document.getElementById("output");

    // Clear previous output
    output.innerHTML = "";

    // Convert delay to a number
    delay = Number(delay);

    // Validate input
    if (!text) {
        alert("Please enter a message.");
        return;
    }
    if (isNaN(delay) || delay < 0) {
        alert("Please enter a valid delay (non-negative number).");
        return;
    }

    // Function to simulate delay
    function delayMessage(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Wait for the delay, then display message
    await delayMessage(delay);
    output.innerHTML = text;
});