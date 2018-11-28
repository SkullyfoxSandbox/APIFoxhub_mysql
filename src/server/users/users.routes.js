const UserController = require('./users.controller.js');

module.exports = (app) => {
    app.get('/users', (req, res, next) =>
        UserController.getAll()
    );

    app.post('/user', (req, res, next) =>
        UserController.create(req.body)
    );
};
