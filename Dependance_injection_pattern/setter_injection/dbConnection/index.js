const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect(
            'mongodb+srv://kieuhieu2003:Intelligency2003@vnua-backend.pgezizy.mongodb.net/?retryWrites=true&w=majority&appName=vnua-backend'
        );
        mongoose.connection.on('error', (error) => console.log(error));
        mongoose.connection.on('open', () => {
            console.log('Connected to MongoDB database.');
        });
    } catch (err) {
        console.log('Connect DB fail with error:', err);
    }
}

module.exports = { connect };
