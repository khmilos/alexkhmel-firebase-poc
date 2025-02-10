const ImageUploadFooter = ({ uploadProgress, onCancel, onRetry, error }) => {
  return (
    <footer className="image-upload-footer">
      {uploadProgress !== null && (
        <div className="upload-progress">
          <p>Upload Progress: {uploadProgress}%</p>
          <progress value={uploadProgress} max="100"></progress>
        </div>
      )}

      {error && (
        <div className="upload-error">
          <p>Error: {error.message}</p>
          <button onClick={onRetry}>Retry</button>
        </div>
      )}

      <button onClick={onCancel} className="cancel-button">
        Cancel
      </button>
    </footer>
  );
};

export default ImageUploadFooter;
