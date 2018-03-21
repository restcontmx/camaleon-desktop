const   express = require('express'),
        router = express(),
        dummies = require('./api-v1/routes/dummies'),
        auth = require('./api-v1/routes/auth')

router.use('/auth', auth)
router.use('/dummies', dummies)

module.exports = router