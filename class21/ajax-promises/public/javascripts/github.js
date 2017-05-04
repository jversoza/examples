function clickHandler(evt) {
    evt.preventDefault();
    const username = document.querySelector('#username').value;
     // document.body.appendChild(document.createElement('p')).textContent = username;
    const url = 'https://api.github.com/users/' + username + '/repos';
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.addEventListener('load', function() {
        if(req.status >= 200 && req.status < 400) {
            const data = JSON.parse(req.responseText);
            data.forEach(function(repo) {
                const div = document.createElement('div');
                div.textContent = repo.name;
                document.body.appendChild(div);
            });
        } 
    });
    req.addEventListener('error', function() {});
    req.send();
}

function init() {
    const btn = document.querySelector('#btn');
    btn.addEventListener("click", clickHandler);
}
document.addEventListener('DOMContentLoaded', init);

