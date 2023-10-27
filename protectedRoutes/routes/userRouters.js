const Router =  require('express').Router();
const {signUp,getAllUsers, signIn } = require('../controller/userController');

Router.route('/signup').post(signUp);
Router.route('/').get(getAllUsers);
Router.route('/signin').post(signIn);

module.exports = Router;