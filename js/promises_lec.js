

// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));



// $.ajax('https://pokeapi.co/api/v2/pokemon/charmander').done(function (data) {
//     console.log("Jquery");
//     console.log(data);
//     console.log(data.name)
// });
//
// fetch('https://pokeapi.co/api/v2/pokemon/charmander').then(data =>
//     data.json()).then(function(data){
//         console.log("fetch");
//         console.log(data);
//         console.log(data.name);
//     }
// )

// fetch('https://pokeapi.co/api/v2/pokemon/charmander').then(function(data){
//     console.log(data.json());
//     console.log("fetch");
//         console.log(data);
//         console.log(data.name);
//     }
// )

// const myPromise = fetch('https://api.github.com/users');
//
// myPromise.then(response => console.log(response));
//
// myPromise.catch(error => console.error(error));

// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//         console.log(data);
//     })
//     .catch(function(error) {
//         // handle errors
//     });

// Promise.race([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//         console.log(data);
//     })
//     .catch(function(error) {
//         // handle errors
//         console.log("Oh No something went wrong Error: " + error);
//     });


// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

// Promise.resolve('one').then((data) => {
//     console.log(data);
//     return 'two';
// }).then((data) => {
//     console.log(data);
//     return 'three';
// }).then((data) => {
//     console.log(data);
// });

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user.login);
//         });
//     });
// });

// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(users => {
//         users.forEach( userObj => {
//             // do something with each username
//             console.log(userObj.login);
//         })
//     })
//     .catch(error => console.error(error));

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }

// later on...

// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// console.log(myPromise);

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));


// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"


//***********************************************
//***********Create your own promise exercise*****************

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// function wait(num){
//
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve()
//         }, num)
//
//     })
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));