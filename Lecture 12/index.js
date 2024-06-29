const posts = [
    {title: 'post one', body: 'This is post one'},
    {title: 'post two', body: 'This is post two'}
];

function getPost(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.body}</li>`;
        });
        document.body.innerHTML = output;
    
    }, 3000)
    
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);  
        callback();
    }, 4000);
}



createPost({ title: 'post three', body: 'This is post three'}, getPost);