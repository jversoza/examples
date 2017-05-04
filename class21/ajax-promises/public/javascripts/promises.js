
function getWithPromise(url) {
    return new Promise(function(fulfill, reject) {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.addEventListener('load', function() {
            if(req.status >= 200 && req.status < 400) {
                fulfill(req.responseText);
            } else {
                reject('some error occurred'); 
            }
        });
        const div = document.createElement('div');
        div.textContent = 'retrieving url';
        document.body.appendChild(div);
        req.send();
    });
}

function get(url, cb) {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.addEventListener('load', function() {
        if(req.status >= 200 && req.status < 400) {
            cb(req.responseText);
        } 
    });
    req.send();
}
function handleLoad(responseText) {
    const data = JSON.parse(responseText);
    const div = document.createElement('div');
    div.textContent = data.url;
    document.body.appendChild(div);
    return data.url;
}


function clickHandler(evt) {
    evt.preventDefault();
    const url = 'http://localhost:3000/api/letters/tango';
    getWithPromise(url)
        .then(handleLoad)
        .then(getWithPromise)
        .then(handleLoad)
        .then(getWithPromise)
        .then(handleLoad);
    /*
    get(url, function(responseText) {
        url = handleLoad(responseText);  
        get(url, function(responseText) {
            url = handleLoad(responseText);  

        });

    });
    */
}

function init() {
    const btn = document.querySelector('#btn');
    btn.addEventListener("click", clickHandler);
}
document.addEventListener('DOMContentLoaded', init);

