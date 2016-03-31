/**
 * Created by wchavarria-as on 30/03/2016.
 */
var router = require('express').Router();

router.use('/users', require('./users/userRoutes'));
router.use('/events', require('./events/eventRoutes'));
/*

*/
module.exports = router;