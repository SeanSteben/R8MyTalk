const curURL = window.location.href;
const urlParts = parseURL(curURL);
const eventName = urlParts.eventName;
const downloadButton = document.getElementById('btnDownloadFile');

console.log(eventName);

// Event name should load as soon as the HTML page loads
document.getElementById('eventName').textContent = eventName.replace(/-/g, ' ');
let customQuestion;

const questions = [
    //here is my custom question
    customQuestion,
    "How would you describe this event to a friend?",
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("questionElement")
const textareaElement = document.querySelector("#message");

document.addEventListener("DOMContentLoaded", function() {
    // Access the variableToSend from the data attribute
    customQuestion = document.getElementById('questionElement').dataset.variable;

    console.log("Variable received in Feedback.js:", customQuestion);

    // Do something with the received variable
});

function goToProfile() {

    window.location.href = '/profilePage';
}

document.getElementById("feedbackButton").addEventListener("click", function() {

    if (currentQuestionIndex < questions.length) {
        //const question =  document.getElementById("questionElement")
        const question = questions[currentQuestionIndex]; // Save current question
        const answer = textareaElement.value; // Save current answer
        sendToBackEnd(question, answer); // Send info

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questionElement.textContent = questions[currentQuestionIndex];
        } else {
            // Load the survey form or perform any other action
            displayChanges();
        }

        textareaElement.value = "";
        console.log(currentQuestionIndex);
    }



});

downloadButton.addEventListener('click', function() {
    //get the download URL from backend for the user 
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/downloadFile', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const data = JSON.stringify({
        uid : urlParts.uid,
        eventName: urlParts.eventName
    })
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //response from the backend here
            console.log('Response from backend: ' + xhr.responseText); //xhr.responsetext is the url
            if (xhr.responseText) {
                //download the file
                const xhr2 = new XMLHttpRequest();
                console.log("here1");
                xhr2.responseType = 'blob';
                xhr2.onload = (event) => { //test
                    const blob = xhr2.response;
                    console.log(blob);
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(blob); //
                    a.download = eventName +" Presentation"; 
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                };
                
                xhr2.open('GET', xhr.responseText);
                xhr2.send();
            } else {
                console.log("here 2");
                alert("The Presenter has not uploaded any files to share.");
            }
            
        } else {
            
            console.error();

        }


    };
})

function parseURL(url) {
    const path = new URL(url);
    const pathName = path.pathname;

    const pathSections = pathName.split('/');
    const uid = pathSections[2];
    const eventName = pathSections[3];
    const data = {
        uid: uid,
        eventName: eventName
    }
    return data;

}

function sendToBackEnd(question, answer) {
    const curURL = window.location.href;
    const urlParts = parseURL(curURL);


    fetch('/feedbackSelection', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                feedbackQuestion: question,
                feedbackAnswer: answer,
                uid: urlParts.uid,
                eventName: urlParts.eventName
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors if needed
        });


}

function contactBackEnd() {
    const curURL = window.location.href;
    const urlParts = parseURL(curURL);

    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;


    fetch('/contactForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                phoneNumber: phoneNumber,
                email: email,
                role: role,
                uid: urlParts.uid,
                eventName: urlParts.eventName
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    displayThankYou();

}



function displayChanges() {
    // Hide the feedback section and show the contact section
    document.getElementById("feedbackSection").style.display = "none";
    document.getElementById("question-container").style.display = "none";
    document.getElementById("survey-ending").style.display = "none";
    document.getElementById("contact-section").style.display = "block";
}

function displayThankYou() {
    document.getElementById("contact-section").style.display = "none";
    document.getElementById("thankYou-section").style.display = "block";
}

function goToProfile(){
    
  window.location.href = '/profilePage';
}
