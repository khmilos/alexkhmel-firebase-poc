import { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const ImageReview = () => {
  const { id } = useParams(); // Assuming the route is set up to pass the image ID as a parameter
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const docRef = doc(firestore, 'images', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setImageData(docSnap.data());
        } else {
          setError('Image not found.');
        }
      } catch (error) {
        console.error('Error fetching image data:', error);
        setError('Failed to fetch image data.');
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [id]);

  if (loading) {
    return <p>Loading image details...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Image Review</h2>
      {imageData && (
        <div style={imageReviewStyle}>
          <img src={imageData.url} alt={imageData.name} style={imageStyle} />
          <div>
            <h3>{imageData.name}</h3>
            <p>Uploaded on: {new Date(imageData.createdAt.seconds * 1000).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const imageReviewStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

const imageStyle = {
  maxWidth: '300px',
  maxHeight: '300px',
  borderRadius: '8px',
};

export default ImageReview;
