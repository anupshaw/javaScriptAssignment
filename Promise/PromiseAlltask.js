const posts=[
    { title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    { title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
];

let timeOut=0;

function getPosts(result){
   setTimeout(()=>{
      clearInterval(timeOut);/////we are using clearInterval to clear the setInterval which is called by previous function because whenever function will be get called setTimeInterval will called 
   timeOut=setInterval(()=>{
    console.log(1);
      let output='';
   posts.forEach((post)=>{
      output+= `<li>${post.title} - ${post.body} - createdAt ${(new Date().getTime()-post.createdAt)/1000} sec ago</li>`
      lastEditedAt=`<p>last EditedAt ${(new Date().getTime()-post.createdAt)/1000} sec ago`;
      UserActivityTime=`<p>last User Active Status : ${result}</p>`;
   })
   document.body.innerHTML=output+'<br>'+lastEditedAt+'<br>'+UserActivityTime},1000)
},1000)
}


function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            setTimeout(()=>{
                posts.push({...post,createdAt:new Date().getTime()});
            },1000);

            const error=false;
            if(!error){
                resolve();
            }
            else
            {
                reject('Error:Something went wrong');
            }
        },2000);
    });
 
   
}





function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let lastUserActivityTime=new Date().toTimeString();
          const error=false;
            if(!error){
                resolve(lastUserActivityTime);
            }
            else
            {
                reject('Error:Something went wrong');
            }
        },2000);
    });
 
   
}




function DeletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            
            if(posts.length==0){
                 const error=true
                 reject('Error:There is no post left')
            }
            else{
                const error=false;
                resolve(); 
            }
       },2000)
    })
   
}

Promise.all([createPost({title:'Post Three',body:'This is post three'}),updateLastUserActivityTime()])
.then((result)=>{getPosts(result);
DeletePost().then(()=>{createPost({title:'Post four',body:'This is post four'});
updateLastUserActivityTime()
}).catch((error)=>{console.log(error)})
})
.catch((error)=>{console.log(error)
console.log(1)});


