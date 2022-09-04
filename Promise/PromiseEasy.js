function fun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error=true;
            if(!error){
                console.log('Function:Your promise has been resolved')
                resolve()
            }
            else
            {
                console.log('Function:Your promise has not been resolved')
                reject('Sorry not fulfilled'); 
            }
        },2000);
    })
}


fun1()
.then(()=>{
    console.log('Thanks for resolving');
})
.catch((error)=>{
   console.log('Very bad bro! Reason :'+error)
})