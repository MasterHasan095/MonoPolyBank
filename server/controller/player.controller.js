const Player = require('../models/Player');


const getAllPlayers = async(req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err){
        res.status(500).json({ error: err.message});
    }
}

const createPlayer = async (req, res) => {
    try {
        const player = new Player(req.body);
        const savedPlayer = await player.save();
        res.status(201).json(savedPlayer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json(player);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const updatePlayer = async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedPlayer) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json(updatedPlayer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deletePlayer = async (req, res) => {
    try {
        const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
        if (!deletedPlayer) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json({ message: 'Player deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getAllPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer,
    createPlayer
}