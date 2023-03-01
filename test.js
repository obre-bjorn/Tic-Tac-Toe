// 


function Human() {

    function sayName(name) {
        console.log(`My name is ${name}`)
    }

    function eat() {
        console.log('eat')
    }

    return {
        sayName,
        eat
    }

};


Human().sayName('bjorn')
Human().eat()