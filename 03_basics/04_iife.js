//Immediate Invoked Function Expression (IIFE)

(function chai(){           // this is named IIFE
    console.log(`DB CONNECTION`)
})();       // ';' is required to write two IIFE continously othrwise it gives error

//({})()
((name) => {            // this is unnamed IIFE
    console.log(`DB CONNECTION ${name}`)
})("areeb")     // give argument to function parameter
