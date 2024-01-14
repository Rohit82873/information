document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(event.target);
    var data = {};
    for (var key of formData.keys()) {
        data[key] = formData.get(key);
    }
    
    fetch('https://royalschool.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        var resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        
        for (var key in data) {
            var p = document.createElement('p');
            p.textContent = key + ': ' + data[key];
            resultsDiv.appendChild(p);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate the form data and perform the login action here.
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate the form data and perform the registration action here.
});