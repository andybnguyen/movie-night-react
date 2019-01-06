const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.ctrl');
// export user ctrls

router.route('/').get(userCtrl.getUsers);

module.exports = router;