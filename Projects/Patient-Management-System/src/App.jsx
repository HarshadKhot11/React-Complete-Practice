
import { useState } from 'react';
import patientData from './component/patient.json';
import Table from 'react-bootstrap/Table';

import {
  Form,
  Button,
  Modal
} from 'react-bootstrap';

export function App() {
  const [patient, setPatient] = useState(patientData);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);

  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: 'Male',
    disease: '',
    doctor: '',
    appointmentDate: '',
    status: 'Scheduled',
    city: ''
  });

  const filteredPatients = patient.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleChange(e) {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value
    });
  }

  function handleAdd(e) {
    e.preventDefault();

    const newRecord = {
      ...newPatient,
      id: patient.length
        ? Math.max(...patient.map((p) => p.id)) + 1
        : 1,
      age: Number(newPatient.age)
    };

    setPatient([...patient, newRecord]);

    setNewPatient({
      name: '',
      age: '',
      gender: 'Male',
      disease: '',
      doctor: '',
      appointmentDate: '',
      status: 'Scheduled',
      city: ''
    });

    setShow(false);
  }

  function handleDelete(id) {
    setPatient(patient.filter((v) => v.id !== id));
  }

  return (
    <>
      <div
        style={{
          backgroundColor: 'rgb(214, 229, 245)',
          minHeight: '100vh',
          padding: '20px'
        }}
      >
        <h1 className="text-center text-primary mb-4">
          Patient Record
        </h1>

        <div className="d-flex gap-2 mb-3">
          <Form.Control
            type="text"
            placeholder="Search patient by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button onClick={() => setShow(true)}>
            Add Patient
          </Button>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Disease</th>
              <th>Doctor</th>
              <th>Appointment Date</th>
              <th>Status</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.age}</td>
                <td>{v.gender}</td>
                <td>{v.disease}</td>
                <td>{v.doctor}</td>
                <td>{v.appointmentDate}</td>
                <td>{v.status}</td>
                <td>{v.city}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(v.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}

            {filteredPatients.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center">
                  No patient found
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Patient</Modal.Title>
          </Modal.Header>

          <Form onSubmit={handleAdd}>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  name="name"
                  value={newPatient.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={newPatient.age}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  name="gender"
                  value={newPatient.gender}
                  onChange={handleChange}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Disease</Form.Label>
                <Form.Control
                  name="disease"
                  value={newPatient.disease}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Doctor</Form.Label>
                <Form.Control
                  name="doctor"
                  value={newPatient.doctor}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  name="appointmentDate"
                  value={newPatient.appointmentDate}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  name="status"
                  value={newPatient.status}
                  onChange={handleChange}
                >
                  <option>Scheduled</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  value={newPatient.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShow(false)}
              >
                Cancel
              </Button>

              <Button variant="primary" type="submit">
                Save Patient
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}