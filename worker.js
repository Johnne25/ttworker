const reportQueue = require('./queue');

console.log('Creating worker...');

// Process jobs from the queue
reportQueue.process((job, done) => {
	console.log('Processing job:', job.data.count, job.data.message);
    done(null, { status: 1 });
});

reportQueue.on('error', function (error) {
    console.error('Job error', error);
  })
  .on('waiting', function (jobId) {
    console.log(`Job ${jobId} is waiting`);
  })
  .on('active', function (job, jobPromise) {
    console.log(`Job ${job.id} is active`);
  })
  .on('stalled', function (job) {
    console.log(`Job ${job.id} is stalled`);
  })
  .on('completed', function (job, result) {
	console.log(`Job ID ${job.id} completed with result:`, result);
  })
  .on('failed', function (job, err) {
	console.error(`Job ID ${job.id} failed with error:`, err);
  })
  .on('removed', function (job) {
    console.log(`Job ${job.id} is removed`);
  });
