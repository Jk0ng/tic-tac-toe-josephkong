import { Button, Label, Input, Modal, ModalHeader } from 'reactstrap';
import React from "react"
const ModalComponent = ({ playerX, playerY, toggle, modal, handleChange, handleChangeY }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader  />
        <div>
        player X name: 
          <Input name="name" id="name" type="text" value={playerX} onChange={handleChange} />
          {/* <button onClick={toggle}>submit</button> */}
        </div>
        <div>
        player Y name: 
          <Input name="name" id="name" type="text" value={playerY} onChange={handleChangeY} />
          <button onClick={toggle}>submit</button>
        </div>
      </Modal>
    </div>
  )
}
export default ModalComponent
