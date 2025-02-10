import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { firebaseApp } from './config'; // Import the initialized Firebase app

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);

// Function to upload a file to Firebase Storage
export const uploadFile = (filePath, file) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Optional: Track progress or handle state changes
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Upload failed:', error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            resolve(downloadURL);
          })
          .catch((error) => {
            console.error('Failed to get download URL:', error);
            reject(error);
          });
      }
    );
  });
};

// Function to get a download URL for a file
export const getFileDownloadURL = (filePath) => {
  const fileRef = ref(storage, filePath);
  return getDownloadURL(fileRef);
};

// Function to delete a file from Firebase Storage
export const deleteFile = (filePath) => {
  const fileRef = ref(storage, filePath);
  return deleteObject(fileRef);
};

export default storage;
