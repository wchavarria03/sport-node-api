/**
 * Created by wchavarria-as on 30/03/2016.
 */
var router = require('express').Router();

router.use('/athletes', require('./athletes/athleteRoutes'));
router.use('/events', require('./events/eventRoutes'));
router.use('/organizers', require('./organizers/organizerRoutes'));
router.use('/activities', require('./activity/activityRoutes'));

module.exports = router;