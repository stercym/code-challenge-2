
myButton = document.getElementById("submitButton");
myButton.addEventListener("click", formSubmitHandler);
let firstNameInput = document.getElementById('fname')
let lastNameInput = document.getElementById('lname')
let guestEmail = document.getElementById('email');
let rsvpCheckbox = document.getElementById('rsvp');
let guestCategory = document.getElementById('category');

function buttonClickFn() {
    alert("Button has been clicked");
}

console.log(firstNameInput)
firstNameInput.addEventListener("input", firstNameHandler)

function firstNameHandler(e) {
    guestFirstName = e.target.value
    console.log(guestFirstName)
}


console.log(lastNameInput)
lastNameInput.addEventListener("input", lastNameHandler)

function lastNameHandler(e) {
    console.log(e)
    console.log(e.target.value)
    guestLastName = e.target.value
    console.log(guestLastName)
}


console.log(guestEmail)
email.addEventListener("change", emailHandler)

function emailHandler(e) {
    console.log(e)
    console.log(e.target.value)
    email = e.target.value
    console.log(email)
}

function formSubmitHandler(e) {
    e.preventDefault()
    guestList = document.getElementById("GuestsList")
    let numberOfGuests = 0;

    let guestRSVP = "Not Attending";
    if (rsvpCheckbox.checked == true) {
        guestRSVP = "Attending";
    }

    //check size of guest list
    if (guestList) {
        let listItems = guestList.getElementsByTagName('li');
        numberOfGuests = listItems.length;
        console.log(numberOfGuests);
    }

    if (numberOfGuests < 10) {
        console.log({ firstName: firstNameInput, lastName: lastNameInput, email: guestEmail, RSVP: guestRSVP })

        newGuest = document.createElement("li")
        newGuest.textContent = `Name: ${guestFirstName} ${guestLastName} | Email: ${email} | RSVP: ${guestRSVP} | Date Created: ${new Date()}`;

        //add color classes
        if (guestCategory.value == 'Friend') {
            newGuest.classList.add('friend');
        } else if (guestCategory.value == 'Family') {
            newGuest.classList.add('family');
        } else if (guestCategory.value == 'Colleague') {
            newGuest.classList.add('colleague');
        }

        //delete button
        deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove"
        deleteButton.addEventListener("click", deleteButtonHandler)
        newGuest.appendChild(deleteButton);

        guestList.appendChild(newGuest)

        //clear fields
        clearFields();

    } else {
        alert('Guest list limit reached')
    }

}

function deleteButtonHandler(e) {
    e.preventDefault()

    //e.target.parentNode.parentNode takes us to the ordered list to delete it
    let choice = confirm('Are you sure you want to delete?');
    if (choice) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }

}
//function called to clear fields ready to create a new gust 
function clearFields() {
    firstNameInput.value = "";
    lastNameInput.value = "";
    guestEmail.value = "";
    rsvpCheckbox.checked = false;
    guestCategory.selectedIndex = 0;

    firstNameInput.focus();
}