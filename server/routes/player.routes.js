const express = require('express');
const Player = require('../models/Player');
const playerController = require('../controller/player.controller')

const router = express.Router();

router.get('/', playerController.getPlayers);

module.exports = router;