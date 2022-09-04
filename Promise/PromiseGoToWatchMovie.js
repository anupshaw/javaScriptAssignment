console.log('Friend1:lets go to watch movie');

console.log('Friend2:Okh');


let goToWatchMovie=(name)=>{
    return new Promise((resolve,reject)=>{
        console.log(`Friend1:I am back.lets go`)
        resolve(name);
    })
}

let bookCab=goToWatchMovie('Babu Rao').then((t)=>{
    return new Promise((resolve,reject)=>{
        console.log('Friend2:lets me book the cab');
        resolve(`book cab ${t}`)
    })});


    bookCab.then((result)=>{
        console.log(result)
    });