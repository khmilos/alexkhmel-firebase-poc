const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Storage } = require('@google-cloud/storage');

admin.initializeApp();
const db = admin.firestore();
const storage = new Storage();

exports.collectStorageStats = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
  try {
    const bucketName = 'your-bucket-name'; // Replace with your bucket name
    const bucket = storage.bucket(bucketName);

    // List files in the bucket
    const [files] = await bucket.getFiles();
    const numberOfItems = files.length;

    // Prepare the statistics object
    const stats = {
      numberOfItems,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      // Add other statistics as needed
    };

    // Store the statistics in Firestore
    await db.collection('storageStats').doc('latest').set(stats);

    console.log('Storage statistics collected and stored successfully.');
  } catch (error) {
    console.error('Error collecting storage statistics:', error);
  }
});
