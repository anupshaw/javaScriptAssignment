console.log('Person1:shows ticket')


const wifeBringingTics = async () => {
    console.log('wife:I have the tics');
    console.log('husband:we should go in');
    console.log('wife:no I am hungry');
 
    const getPopCorn= new Promise((resolve,reject)=>resolve('Popcorn'))

    let popCorn=await getPopCorn;
 
    console.log(`husband:I got some ${getPopCorn}`);
    console.log('husband:we should go in');
    console.log('wife:I need Butter on my popcorn');

    let getButter=new Promise((resolve,reject)=>resolve('Butter'))

    let butter=await getButter;

    console.log(`husband:I got some ${butter}`);
    console.log('husband:we should go in');
    console.log('wife:yes,we can go in now');
    
    return 'ticket'
}


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// })



// const getPopCorn=wifeBringingTics.then((t)=>{
//     console.log('wife:I have the tics');
//     console.log('husband:we should go in');
//     console.log('wife:no I am hungry');
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} popcorn`);
//     })
//  })


//  const getButter=getPopCorn.then((t)=>{
    // console.log('husband:I got some popcorn');
    // console.log('husband:we should go in');
    // console.log('wife:I need Butter on my popcorn');
//     return new Promise((resolve,reject)=>{
//         resolve(`${t} butter`);
//     })
//  })

wifeBringingTics().then((t) => {
    console.log(t)
})

