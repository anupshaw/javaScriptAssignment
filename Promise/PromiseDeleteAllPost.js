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
   })
   document.body.innerHTML=output},1000)
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
//Delete All post and print error once all the post get deleted

// createPost({title:'Post Three',body:'This is post three'})
// .then(()=>{getPosts();
//        DeletePost().then(()=>{getPosts()}).catch((error)=>{console.log(error)});
//        DeletePost().then(()=>{getPosts()}).catch((error)=>{console.log(error)});
//     //    DeletePost().then(()=>{getPosts()}).catch((error)=>{console.log(error)});
    
// })
// .catch((error)=>{
//        console.log(error);
// })


//Delete Post 4 after 1 sec
createPost({title:'Post four',body:'This is post four'})
.then(()=>{getPosts();
    setTimeout(()=>{
        DeletePost().then(()=>{getPosts()}).catch((error)=>{console.log(error)});
    },2000)
       
    //    DeletePost().then(()=>{getPosts()}).catch((error)=>{console.log(error)});
    // //    DeletePost().then(()=>{getPosts()}).catch((error)=>{console.log(error)});
    
})
.catch((error)=>{
       console.log(error);
})
