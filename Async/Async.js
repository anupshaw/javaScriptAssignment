console.log('Function:post One')
console.log('Function:post Two')
async function preMovie(){
    console.log('welcome')
    return 'Hello'
}

// console.log(preMovie());

preMovie().then((result)=>{console.log(result)});

// let test=preMovie()
// console.log(test)

// console.log('Function:post three')
// console.log('Function:post four')
// console.log('Function:post five')
// console.log('Function:post six')