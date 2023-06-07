"use strict"

//3. Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

function getLastCommitDate(username) {
    return fetch(`https://api.github.com/users/${username}/events`)
.then(response => response.json())
        .then(events => {
            const commitEvent = events.find(event => event.type === "PushEvent");
            if (commitEvent) {
                return commitEvent.created_at.slice(0, 10); // we only need the date
            } else {
                return "No commit found.";
            }
        })
        .catch(error => console.error(error));
}

getLastCommitDate("emata10")
    .then(date => console.log(date))
    .catch(error => console.error(error));



//Create your own promise**************************//
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
function wait(num){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve()
        }, num)

    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));