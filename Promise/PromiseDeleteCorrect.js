const posts=[
    { title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    { title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
];

let timeOut=0;

function getPosts(){
   setTimeout(()=>{
      clearInterval(timeOut);/////we are using clearInterval to clear the setInterval which is called by previous function because whenever function will be get called setTimeInterval will called 
   timeOut=setInterval(()=>{
      let output='';
   posts.forEach((post)=>{
      output+= `<li>${post.title} - ${post.body} - createdAt ${(new Date().getTime()-post.createdAt)/1000} sec ago</li>`
      lastEditedAt=`<p>last EditedAt ${(new Date().getTime()-post.createdAt)/1000} sec ago`;
   })
   document.body.innerHTML=output+'<br>'+lastEditedAt},1000)
},2000)
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
        },1000);
    });
 
   
}

function DeletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            
            const error=false;
            if(!error){
                resolve();
            }
            else
            {
                reject('Error:Something went wrong');
            }
       },2000)
    })
   
}

createPost({title:'Post Three',body:'This is post three'})
.then(()=>{
       DeletePost().then(()=>{getPosts()}).catch(()=>{console.log(error)})
    
})
.catch((error)=>{
       console.log(error);
})
