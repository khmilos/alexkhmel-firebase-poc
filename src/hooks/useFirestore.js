import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firestore'; // Import the Firestore instance
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

// Custom hook to use Firestore
export const useFirestore = (collectionName) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(firestore, collectionName);
    const unsubscribe = onSnapshot(
      collectionRef,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocuments(docs);
        setLoading(false);
      },
      (err) => {
        console.error('Error fetching documents:', err);
        setError(err);
        setLoading(false);
      }
    );

    // Clean up the subscription
    return () => unsubscribe();
  }, [collectionName]);

  // Function to add a new document
  const addDocument = async (data) => {
    try {
      const docRef = await addDoc(collection(firestore, collectionName), data);
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  };

  // Function to get a single document by ID
  const getDocumentById = async (id) => {
    try {
      const docRef = doc(firestore, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error('Document not found');
      }
    } catch (error) {
      console.error('Error getting document:', error);
      throw error;
    }
  };

  // Function to update a document by ID
  const updateDocument = async (id, data) => {
    try {
      const docRef = doc(firestore, collectionName, id);
      await updateDoc(docRef, data);
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  };

  // Function to delete a document by ID
  const deleteDocument = async (id) => {
    try {
      const docRef = doc(firestore, collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  };

  return {
    documents,
    loading,
    error,
    addDocument,
    getDocumentById,
    updateDocument,
    deleteDocument,
  };
};
