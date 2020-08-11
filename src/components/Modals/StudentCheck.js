import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const StudentCheck = props => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          CodeTrotter VIP Verification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Were you a student/instructor in the CodeTrotter cohort?</h5>
        <p>
          If you were a student or instructor in the 2020 CodeTrotters Cohort of General Assembly, it is likely your profile has some information in it to help get you started.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onClose}>No, I was not</Button>
        <Button onClick={props.onHide}>Yes, I was</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StudentCheck
