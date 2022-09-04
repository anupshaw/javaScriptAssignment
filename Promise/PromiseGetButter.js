console.log('Person1:shows ticket')
console.log('Person2:shows ticket')

const wifeBringingTics=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
})



const getPopCorn=wifeBringingTics.then((t)=>{
    console.log('wife:I have the tics');
    console.log('husband:we should go in');
    console.log('wife:no I am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`);
    })
 })


 const getButter=getPopCorn.then((t)=>{
    console.log('husband:I got some popcorn');
    console.log('husband:we should go in');
    console.log('wife:I need Butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`);
    })
 })

 getButter.then((t)=>{
    console.log(t)
 })

