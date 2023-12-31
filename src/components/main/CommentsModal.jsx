import React, { useEffect, useState } from 'react'
import { Button, ListGroup, Modal, Form } from 'react-bootstrap';
import '../../styles/commentsModal.css';
import '../main/Card.css';

const CommentsModal = ({ close, asin }) => {
    const [bookComments, setBookComments] = useState([]);
    const [newComment, setNewComment] = useState ('');
    const [newRate, setNewRate] = useState ('');

    const getCommentsFromBook = async () => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
                {
                    headers: {
                        Authorization:
                         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNzgxNmI5YzBmNzAwMTQ0ODRmZmMiLCJpYXQiOjE2ODc3MTkzNTcsImV4cCI6MTY4ODkyODk1N30.hL_jIPOedF3p1A1A0T5shHH3PUZLcBPxuY_kAXGMWFE',
                    },
                }
            );
            const data = await response.json();
            console.log(asin);
            setBookComments(data);

            //    const response = await data.json();
            //    setBookComments(response)
        }catch (error) {
            console.log(error)
        }
};
const postComment = async () => {
    try {
      await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNzgxNmI5YzBmNzAwMTQ0ODRmZmMiLCJpYXQiOjE2ODc3MTkzNTcsImV4cCI6MTY4ODkyODk1N30.hL_jIPOedF3p1A1A0T5shHH3PUZLcBPxuY_kAXGMWFE',
          },
          body: JSON.stringify({
            comment: newComment,
            rate: newRate,
            elementId: asin,
          }),
        }
      );

// ripulisce il campo input dopo aver postato il commento
setNewComment('');
setNewRate('');
// esegue di nuovo la fetch per mostrare la lista aggiornata
getCommentsFromBook();
} catch (error) {
console.log(error);
}
};

useEffect(() => {
    getCommentsFromBook()
}, [asin]);
return (
    <div className='modal show commentsModal' style={{ display: 'block' }}>
        <Modal.Dialog centered size='lg' backdrop='static'>
            <Modal.Header>
                <Modal.Title>Recensioni:</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                {bookComments.map((comment) => (
                    
                        <ListGroup
                        key = {comment._id}
                        className='d-flex justify-content-between align-items-start'
                        as='ol' 
                        numbered
                        >
                            <div className='ms-2 me-auto'>
                                <div >{comment.comment}</div>
                                <div>Voto: {comment.rate}</div>
                                </div>
                        </ListGroup>
                    )
                )}
            </Modal.Body>
            
            <Modal.Footer>
            <Form.Group>
            <Form.Label>Aggiungi una recensione:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Inserisci un commento...'
              className= 'custom-input'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Form.Control
              type='number'
              placeholder='Inserisci il voto (da 1 a 5)'
              min={1}
              max={5}
              value={newRate}
              onChange={(e) => setNewRate(e.target.value)}
            />
          </Form.Group>
          <Button onClick={postComment}>Invia</Button>
          <Button onClick={close}>Chiudi</Button>

            </Modal.Footer>

        </Modal.Dialog>
    </div>
)
}

export default CommentsModal;