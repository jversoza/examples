const btn = document.querySelector('#btn');

btn.addEventListener("click", function() {
    const message = document.querySelector('#message');
    const req = new XMLHttpRequest();
    req.open('POST', '/chat');
    req.addEventListener('load', function() {
        console.log(req.responseText); 
        // add msg to dom
    });

    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    req.send('message=' + message.value);
});

