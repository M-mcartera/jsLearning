const http = require('http');

const server = http.createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', ()=>{
        body = Buffer.concat(body).toString();
        console.log(body);
        let userName = "Unknown";
        if(body){
            userName = body.split('=')[1];
        };
        response.setHeader('Content-type', 'text/html');
        response.write(`<h1>Hi, ${userName}</h1><form method="POST" action="/"><input name="username" type="text" placeholder="username"></input><button type="submit">Send</button></form>`);
        response.end();
    });
});

server.listen(3000);