console.log('Person1:shows ticket')
console.log('Person2:shows ticket')

const wifeBringingTics=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})



const getPopCorn=wifeBringingTics.then((t)=>{
    console.log('husband:we should go in');
    console.log('wife:no I am hungry');
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`${t} popcorn`);
        },2000)
    })
 })

 getPopCorn.then((t)=>{
    console.log(t)
 })

