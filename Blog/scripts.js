var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/posts')

request.onload = function () {
    //Quando terminar deve esntrar aqui dentro deste callback
    var listaPosts = JSON.parse(request.responseText);
    
    for (let i =0; i <listaPosts.length; i++) {
    const post = listaPosts[i];

        
        const link = document.createElement('a')
        link.href = "#"
        link.innerHTML = post.title
        link.dataset.postId = post.id
        link.onclick = buscarDetalhes

        const li = document.createElement('li')
        li.appendChild(link)
        
        document.querySelector('#listaPosts').appendChild(li)

    } 
}
request.send();

function buscarDetalhes() {
    var postId = event.target.dataset.postId
    var req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + postId);
    req.onload = function () {
       var post = JSON.parse(req.responseText)
        document.querySelector('#post-title').innerHTML = post.title
        document.querySelector('#post-content').innerHTML = post.body
    };
    req.send();
}

