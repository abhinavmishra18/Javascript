if (true) {
    let a = 10
    const b = 20
    var c = 30 // avoid it because it is not blocked scope
}

console.log(a);
console.log(b);
console.log(c);

// Nested Scope

function one(){
    const username = "Abhinav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two()
}

one()