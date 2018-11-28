import UserController from './users.controller.js';

module.exports = (privateRouter, publicRouter) => {
    privateRouter.get('/users', (req, res, next) =>
        UserController.getAll()
    );

    publicRouter.post('/user', (req, res, next) =>
        UserController.create(req.body)
    );
};
