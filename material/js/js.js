
let balance = parseInt(localStorage.getItem('balance')) || 0;

function completeTask(reward, taskUrl) {
    // Adding a 1-second delay before completing the task
    setTimeout(() => {
        balance += reward;
        updateBalance();

        // Store the current timestamp of when the task was completed
        localStorage.setItem(taskUrl, Date.now().toString());
        localStorage.setItem('balance', balance);

        window.open(taskUrl, '_blank');
    }, 1000); // 1 second delay
}

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

// Update balance on page load
updateBalance();
