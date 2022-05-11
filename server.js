// const http = require('http');
// const files = require('fs');
// const _ = require('lodash');

// const server = http.createServer((req, res) => {
//     // Lodash
//     const num = _.random(0, 20);
//     console.log(num);

//     const greet = _.once(() => {
//         console.log('Hello')
//     })

//     greet()

//     // Response Object
//     res.setHeader('Content-Type', 'text/html');
//     // Send data from another file(HTML file)

//     let path = './views/';

//     switch (req.url) {
//         case '/':
//             path += 'index.html'
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html'
//             res.statusCode = 200;
//             break;
//         case '/about-me':
//             res.statusCode = 301;
//             res.setHeader('Location', '/about');
//             res.end();
//             break;
//         default:
//             path += '404.html'
//             res.statusCode = 404;
//             break;
//     }

//     files.readFile(path, (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end();
//         } else {
//             // res.write(data)
//             res.end(data);
//         }
//     })
// })

// server.listen(3000, 'localhost', () => {
//     console.log('Listening for request on port 3000');
// }); 