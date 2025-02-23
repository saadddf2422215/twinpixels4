document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save to localStorage
    const userDetails = { name: name, email: email };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Show confirmation
    document.getElementById('message').textContent = 'Details saved: ' + name + ', ' + email;

    // Clear form
    this.reset();
});