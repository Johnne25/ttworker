const Bull = require('bull');

const reportQueue = new Bull('reportque', {
    redis: {
        port: 6379,
        host: '127.0.0.1',
    },
});

reportQueue.on('connect', () => {
	console.error(`connected`);
});

module.exports = reportQueue;
