var router = require('express').Router();

// api router will mount other routers
// for all our resources
/*router.use('/athletes', require('./athlete/athleteRoutes'));
router.use('/events', require('./event/eventRoutes'));
router.use('/activities', require('./activity/activityRoutes'));*/
router.use('/organizers', require('./organizer/organizerRoutes'));


module.exports = router;
