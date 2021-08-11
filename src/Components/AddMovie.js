import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddMovie = ({ handleAddMovie }) => {

    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        posterURL: "",
        rate: 0
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mySubmitHandler = (event) => {
        event.preventDefault();
        handleAddMovie(newMovie)
        setNewMovie({
            id: "",
            title: "",
            description: "",
            posterURL: "",
            rate: ""
        })
        handleClose()
    }
    const handleChange = (e) => {
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <button type="button" class="btn btn-outline-danger" onClick={handleShow}>Add new movie</button>
            <Modal style={{ backgroundColor: 'black' }} show={show} onHide={handleClose} animation={false} >
                <Modal.Header style={{ backgroundColor: '#8B0000' }} >
                    <Modal.Title> New Movie </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#8B0000' }}>
                    <Form onSubmit={mySubmitHandler}>
                        <Form.Control type="text" name="id" placeholder="ID" onChange={handleChange} required />
                        <Form.Control type="text" name="title" placeholder="Title" onChange={handleChange} required />
                        <Form.Control type="text" name="description" placeholder="Description" onChange={handleChange} required />
                        <Form.Control type="text" name="posterURL" placeholder="PosterURL" onChange={handleChange} required />
                        <Form.Control type="number" name="rate" placeholder="Rate" onChange={handleChange} required />
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#8B0000' }}>
                    <Button variant="primary" type='submit' onClick={mySubmitHandler}>Save Changes</Button>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default AddMovie;