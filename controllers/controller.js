module.exports = function controller(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });
    app.get('/about', (req, res) => {
        res.render('about');
    });
    app.get('/portfolio', (req, res) => {
        res.render('portfolio');
    });

    app.get('/contact', (req, res) => {
        res.render('contact');
    });

    app.get('/learn-more', (req, res) => {
        res.render('learn-more');
    });
};