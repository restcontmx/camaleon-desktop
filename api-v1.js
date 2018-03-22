const   express = require('express'),
        router = express(),
        dummies = require('./api-v1/routes/dummies'),
        auth = require('./api-v1/routes/auth'),
        it_titemclass = require('./api-v1/routes/it_titemclass')

router.use('/auth', auth)
router.use('/dummies', dummies)
router.use('/it_titemclass', it_titemclass)

module.exports = router