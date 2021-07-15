const listElement = document.querySelector('.posts');
const template = document.getElementById('elemTemplate');

const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

const addBtn = document.getElementById('new-post').querySelector('button');
const fetchBtn = document.getElementById('available-posts').querySelector('button');


const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise((response, reject) =>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        
        xhr.onload = function(){
            response(xhr.response);
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

const fetchPosts = () =>{
    if(listElement.children.length !== 0){
        listElement.innerHTML  = "";
    }
    sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(response =>{
        const listOfPosts = JSON.parse(response);
        for(const post of listOfPosts){
            const liEl = document.importNode(template.content, true);
            liEl.querySelector('h2').textContent = post.title.toUpperCase();
            liEl.querySelector('p').textContent = post.body;
            liEl.querySelector('li').id = post.id;
            listElement.append(liEl);
        }
    });
}

async function createPost(title, content){
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId,
    };

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts',post);
}

const getUserInput = e =>{
    e.preventDefault();
    if(titleInput.value.trim() !== "" && contentInput.value.trim() !== ""){
        createPost(titleInput.value, contentInput.value);
    }
}


addBtn.addEventListener('click', getUserInput);
fetchBtn.addEventListener('click', fetchPosts);
// fetchPosts();
// createPost('SOME TITLE', "SOME CONTENT");
console.dir(listElement);

listElement.addEventListener('click', event =>{
    if(event.target.tagName === 'BUTTON'){
        const postId = event.target.closest('li').id;
        sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})