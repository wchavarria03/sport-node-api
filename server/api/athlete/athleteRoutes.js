/**
 * Created by Walter on 27/03/2016.
 */
var router = require('express').Router();

var controller = require('./athleteController');
var auth = require('../../auth/auth');

var checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);
router.get('/me', checkUser, controller.me);

router.route('/')
    .get(checkUser,controller.get)
    .post(controller.post);


router.route('/:id')
    .get(controller.getOne)
    .put(checkUser, controller.put)
    .delete(checkUser, controller.delete);

module.exports = router;