$("#card").click(function() {
    $("i").add("h3").add("p")
    .css("color","green");
});

$(document).ready(function () {
    $("button").click(function () {
        $("p").add("span").add("input")
            .fadeTo(3000, 0.7);
    });
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  // prevent the form from being submitted
    event.preventDefault(); 
    if (checkValidation()){
        alert('Form Submitted Successfully');
        form.submit();
    }
    return false;
});

// Check All Form Validations
function checkValidation(){
    const name = document.getElementById('name').value;

    // check if the name is at least 6 characters long
    if (name.length <= 6) {
        alert('Name must be at least 6 characters long');
        return;
    }
    
    // check if the name contains any special characters except a blank space
    if (/[^a-zA-Z\s]/.test(name)) {
        alert('Name must not contain any special characters except a blank space');
        return;
    }

    // check if the first letter of the first and last name is capitalized
    const nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    if (!nameRegex.test(name)) {
        alert('Name must start with a capital letter');
        return;
    }

    // check if email input empty
    const email = document.getElementById('email').value;
    if (!email) {
        alert('Email is required');
        return;
    }

    // check if the email pattern matches the pattern 
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address');
        return;
    }


    const contact= document.getElementById('contact').value;

    // check if the contact field contains numbers only
    if (!/^\d+$/.test(contact)){
        alert('Contact must contain numbers only');
        return;
    }

    
    return true;
}

