const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request URL:', req.url);
    if (req.url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Welcome to the Home Page</h1>");
        res.write("<ul>");
        res.write("<li><a href='/men'>Men Section</a></li>");
        res.write("<li><a href='/women'>Women Section</a></li>");
        res.write("<li><a href='/kids'>Kids Section</a></li>");
        res.write("<li><a href='/cart'>Cart Section</a></li>");
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    } else if (req.url === '/men') {
        res.write("<html><body><h1>Welcome to the men section</h1></body></html>");
        res.end();
    } else if (req.url === '/women') {
        res.write("<html><body><h1>Welcome to the women section</h1></body></html>");
        res.end();
    } else if (req.url === '/kids') {
        res.write("<html><body><h1>Welcome to the kids section</h1></body></html>");
        res.end();
    } else if (req.url === '/cart') {
        res.write('<html>')
        res.write('<body>')
        // add name attributes so form data is sent
        res.write('<form action="/submit-cart" method="POST">')
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>')
        res.write('<label for="male">male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male">')
        res.write('<label for="female">female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female"><br>')
        res.write('<input type="submit" value="submit">')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (req.url.toLowerCase() === "/submit-cart" && req.method == "POST") {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const params = new URLSearchParams(parsedBody);
            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();      
    }else {
        res.statusCode = 404;
        res.write("<html><body><h1>404 Not Found</h1></body></html>");
        res.end();
    }
});

const PORT = 3024;
server.listen(PORT, () => {
    console.log(`Server is port on address http://localhost:${PORT}`); 
});