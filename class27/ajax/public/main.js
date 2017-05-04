
function main() {
    // ajax read:
    /*
    1. create the object
    2. configure for GET
    3. set what to do when GET successful
    4. actually send the request
    */
    /*
    const req = new XMLHttpRequest();
    req.open('GET', '/students');
    req.addEventListener('load', function() {
        if(req.status >= 200 && req.status < 400) {
            const students = JSON.parse(req.responseText);
            students.forEach((student) => {
                const div = document.createElement('div'); 
                div.textContent = student;
                document.body.appendChild(div);
            });
            console.log(req.responseText); 
        }
    });

    req.send();
    */
    const req = new XMLHttpRequest();
    req.open('POST', '/students');
    // content of body will be a string that looks like query string
    // of url
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // this <-- event that's triggered from an element

    req.addEventListener('load', function() {
        if(req.status >= 200 && req.status < 400) {
            console.log('success', this.responseText);
        }
    });

    req.send('foo=bar&baz=qux');
}







document.addEventListener("DOMContentLoaded", main);
