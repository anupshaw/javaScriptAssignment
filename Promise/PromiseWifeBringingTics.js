console.log('Person1:shows ticket')
console.log('Person2:shows ticket')

const wifeBringingTics=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})

wifeBringingTics
.then((result)=>{
     console.log(`Persont3:shows ${result}`);
})
.catch((error)=>console.log(error));

console.log('Person4:shows ticket')
console.log('Person5:shows ticket')



