const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

// Connect to database
const dbURI = 'mongodb+srv://Fafyee:oluwapelumi@blog-website.bivok.mongodb.net/Node-tut?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected to database'))
    .catch((err) => console.error(err))
// Register View Engine
app.set('view engine', 'ejs');

app.listen(3000);

// Middlewares and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'New Blog 2',
//         snippet: 'about my new blog',
//         body: 'More about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.error(err);
//         })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.error(err);
//         })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('627bac86cd4cd12318530279')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.error(err)
//         })
// })


app.get('/', (req, res) => {
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    // res.send('<h3>This is Express Testing</h3>');
    res.render('about', { title: 'About' })
})

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.error(err);
        })
});

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.error(err);
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' })
});

// Redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Not Found' });
})