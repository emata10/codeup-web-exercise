(() => {
    const add2 = function (num) {
        return num + 2;
    }

    const add3 = num => num + 3;

    console.log(add2(6));
    console.log(add3(6));

    const addition = (x, y) => x + y;

    console.log(addition(4, 5));

    const sayHello = (name = "Dragon") => {
        if (typeof name === "string" && isNaN(name)) {
            return `Hello, ${name}!\nHope you have a great day!`;
        } else {
            return "Hello, World!";
        }
    }

    console.log(sayHello("Jeff"));
    console.log(sayHello(true));
    console.log(sayHello(".25"));
    console.log(sayHello("Bethany"));
    console.log(sayHello());

    // without block scope
    if (true) {
        let myName = 'codeup';
    }
    // console.log(myName);
    let myName = "Jeff";
    console.log(myName); // 'Jeff'

    const arr = ["Bill", "Dale", "Hank", "Boomhauer"];
    // arr.forEach(name => console.log(name));

    for (const name of arr) {
        console.log(name);
        if (name === "Dale") {
            console.log("POCKET SAND!");
            break;
        }
    }

    const mixedVals = [1, "Jim", true];
    for (const val of mixedVals) {
        console.log(val);
    }

    const userName = prompt("What is your username?");
    const randomId = Math.floor(Math.random() * 10) + 1;
    const user = {
        userName,
        id: randomId
    }

    console.log(user);

    const hamtaro = {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    };

    const {name, heightInMM} = hamtaro; // let name = hamtaro.name; let heightInMM = hamtaro.heightInMM;
    // name = "Gregory";
    console.log(name);
    console.log(heightInMM);
    hamtaro.name = "Gregory";
    console.log(hamtaro.name);

    console.log(Math.pow(4,2));
    console.log(19 ** 7);

})();