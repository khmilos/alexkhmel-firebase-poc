import React, { useEffect, useState } from 'react';
import { firestore, storage } from '../../firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'images'));
        const imagePromises = querySnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const imageUrl = await getDownloadURL(ref(storage, data.path));
          return { id: doc.id, ...data, url: imageUrl };
        });

        const imageList = await Promise.all(imagePromises);
        setImages(imageList);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading images...</p>;
  }

  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={galleryStyle}>
        {images.map((image) => (
          <div key={image.id} style={imageContainerStyle}>
            <img src={image.url} alt={image.name} style={imageStyle} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const galleryStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
};

const imageContainerStyle = {
  textAlign: 'center',
};

const imageStyle = {
  maxWidth: '200px',
  maxHeight: '200px',
  borderRadius: '8px',
};

export default ImageList;
