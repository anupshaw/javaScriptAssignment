// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          console.log('The first promise has been resolved');
//          resolve('10');
//     },1*1000)
// })

// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          console.log('The Second promise has been resolved');
//          resolve('20');
//     },2*1000)
// })

// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//          console.log('The third promise has been resolved');
//          resolve('30');
//     },3*1000)
// })

// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{console.log('something went wrong')});



//if any one function get rejected then catch function will be called

//+++++operation++++++++++++++
// let total=0;
// Promise.all([p1,p2,p3]).then((result)=>{
   
//      for(var i in result){
//         total+=result[i];
//      }
//     console.log(result);
//     console.log(total);
// }).catch((error)=>{console.log('something went wrong')});


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let promiseCall=((returnData,message)=>{
  return function(resolve,reject){
    setTimeout(()=>{
        console.log(`The ${message} promise has been resolved`);
        resolve(returnData);
   },returnData*100)
  }
})

let p1=new Promise(promiseCall(10,'first'))
let p2=new Promise(promiseCall(20,'second'))
let p3=new Promise(promiseCall(30,'third'))

Promise.all([p1,p2,p3]).then((result)=>{
    console.log(result);
}).catch((error)=>{console.log('something went wrong')});