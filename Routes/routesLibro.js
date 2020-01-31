const express = require('express'),
      router = express.Router(),
      libro = require('../Controllers/controllerLibro');

router.use('/libro',libro);

module.exports=router;
