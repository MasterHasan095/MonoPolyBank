const express = require('express');
const Player = require('../models/Player');
const playerController = require('../controller/player.controller')

const router = express.Router();

router.post('/', playerController.createPlayer);
router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.put('/:id', playerController.updatePlayer);
router.delete('/:id', playerController.deletePlayer);


module.exports = router;