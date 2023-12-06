import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';

const CustomModal = (props) => {

  const [loading, setLoading] = useState(true);

  console.log('Modal content gotten object', props.contents);
  const data = props.contents.volumeInfo;
  const downloadLink = props.contents.accessInfo;

  console.log('Modal content gotten array', data, downloadLink);

  const handleDownload = async (downloadLink) => {
    // Check if download link exists and has the required structure
    if (!downloadLink || !downloadLink.pdf || !downloadLink.pdf.acsTokenLink) {
      return alert('Book not downloadable from this site');
    }

    const link = downloadLink.pdf.acsTokenLink;

    try {
      console.log('Here is a download link', link);
      const response = await fetch(link); // Remove "no-cors" mode for actual data access
      const blob = await response.blob();

      // Create a temporary link for download
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'your-desired-filename.pdf';

      // Delay removal of temporary link until download finishes
      setTimeout(() => window.URL.revokeObjectURL(blob), 5000); // Adjust delay as needed

      downloadLink.click();
    } catch (error) {
      alert('Book not downloadable', error);
      return error;
    }
  };

  return (
    <>
      {data && (
        <Modal show={props.show} onHide={props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{data.title && <>{data.title}</>}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {data.imageLinks.thumbnail && (
                <img
                  style={{ width: '300px', height: '500px' }}
                  src={data.imageLinks.thumbnail}
                />
              )}
            </p>
            <p>
              <b>Authors:</b> {data.authors && (<>{data.authors}</>)}
            </p>
            <p>
              <b>Publisher:</b> {data.publisher && (<>{data.publisher}</>)}
            </p>
            <p>
              <b>PublishedDate:</b> {data.publishedDate && (<>{data.publishedDate}</>)}
            </p>
            <p>
              <b>Book description:</b> {data.description && (<>{data.description}</>)}
            </p>
            <p>
              <b>Pages:</b> {data.pageCount && (<>{data.pageCount}</>)}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.close}>
              Close
            </Button>
            <Button variant="primary" as='a' onClick={() => handleDownload(downloadLink)}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default CustomModal;
