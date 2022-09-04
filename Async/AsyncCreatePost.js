const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime() }
];



function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let output = '';
            posts.forEach((post) => {
                output += `<li>${post.title} - ${post.body} </li>`
            })
            document.body.innerHTML = output;
            resolve()
        }, 1000)
    })

}




function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            resolve()
        }, 2000);

    });


}


async function print() {
    await createPost({ title: 'Post four', body: 'This is post four' })
    await getPosts();
    await createPost({ title: 'Post five', body: 'This is post five' })
    await getPosts();
    await createPost({ title: 'Post six', body: 'This is post six' })
    await getPosts();
}

print();
