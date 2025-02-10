import { getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { firebaseApp } from './config'; // Import the initialized Firebase app

// Initialize Firestore
const firestore = getFirestore(firebaseApp);

// Function to add a new document to a collection
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

// Function to get all documents from a collection
export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};

// Function to get a single document by ID
export const getDocumentById = async (collectionName, id) => {
  try {
    const docRef = doc(firestore, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};

// Function to update a document by ID
export const updateDocument = async (collectionName, id, data) => {
  try {
    const docRef = doc(firestore, collectionName, id);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

// Function to delete a document by ID
export const deleteDocument = async (collectionName, id) => {
  try {
    const docRef = doc(firestore, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};

export default firestore;
