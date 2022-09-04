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
},1000)
}

// let i=0;
function createPost(post,callBack){
   setTimeout(()=>{
       posts.push({...post,createdAt:new Date().getTime()});
      callBack()
   },2000)
   
}


// function create4thPost(post,callBack)
// {
//    setTimeout(()=>{
//       callBack()
//    },2000);
// }
createPost({title:'Post Three',body:'This is post three'},getPosts);
createPost({title:'Post four',body:'This is post four'},getPosts);
