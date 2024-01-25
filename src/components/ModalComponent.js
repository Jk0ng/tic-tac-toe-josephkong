import { Button, Label, Input, Modal, ModalHeader } from 'reactstrap';
import React from "react"
const ModalComponent = ({ playerX, playerO, toggle, modal, handleChange, handleChangeO }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader />
        <div>
        player X name: 
          <Input name="name" id="name" type="text" value={playerX} onChange={handleChange} />
        </div>
        <div>
        player O name: 
          <Input name="name" id="name" type="text" value={playerO} onChange={handleChangeO} />
          <button onClick={toggle} className="submitButton">submit</button>
        </div>
      </Modal>
    </div>
  )
}
export default ModalComponent
