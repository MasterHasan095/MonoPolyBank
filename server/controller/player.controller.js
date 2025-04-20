const Player = require('../models/Player');


const getPlayers = async(req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err){
        res.status(500).json({ error: err.message});
    }
}

module.exports = {
    getPlayers
}