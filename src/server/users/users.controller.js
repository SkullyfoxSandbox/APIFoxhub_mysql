const User = require('./user.model.js');

class UserController {
    constructor(){
        this.model = User;
    }

    async getAll(){
        const users = await this.model
            .forge()
            .fetchAll();

        return users.toJSON();
    }

    async create(data) {
        const user = await this.model
          .forge(data)
          .save();

        return user.toJSON();
    }
}

module.exports = new UserController();
