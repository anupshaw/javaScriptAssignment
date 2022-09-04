const posts=[
    { title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    { title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
];

let timeOut=0;

async function getPosts(post){


    let createPost=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,createdAt:new Date().getTime()});
        resolve();
        },2000)
        
    })


let CreatePost= await createPost;


let deletePost=new Promise((resolve,reject)=>{
    posts.pop();
    resolve();
})

let DeletePost= deletePost;

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

return 'Done';
}


getPosts({title:'Post Three',body:'This is post three'}).then((result)=>console.log(result))
