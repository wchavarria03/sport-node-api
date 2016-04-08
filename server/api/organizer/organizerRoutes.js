/**
 * Created by wchavarria-as on 04/04/2016.
 */


var router = require('express').Router();
var controller = require('./organizerController');

router.param('id', controller.params);


router.route('/')
    .get(controller.get)
    .post(controller.post);


router.route('/:id')
    .get(controller.getOne)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;