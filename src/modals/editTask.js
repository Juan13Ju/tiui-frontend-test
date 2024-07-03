import React, {useEffect, useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/reducer";

const EditTask = ({toggle, modal, taskObj}) => {

  const [titulo, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === 'titulo'){
      setNombre(value)
    }else{
      setDescripcion(value)
    }
  }

  const modify = () => {
    if(!titulo.trim() || !descripcion.trim()){
      alert("Los campos no pueden estar vacios")
      return
    }
    
    dispatch(
      updateTodo({
        id: taskObj.id,
        titulo: titulo,
        descripcion: descripcion
      })
  )
    
    alert("Tarea editada correctamente");
    toggle();

  }

  useEffect(() => {
    setNombre(taskObj.titulo);
    setDescripcion(taskObj.descripcion);
  }, [taskObj.titulo, taskObj.descripcion])

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edita tarea</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Titulo</label>
            <input name="titulo" type="text" className="form-control" value={titulo} onChange={handleChange}/>
          </div>
          <div className="form-group">
          <label>Descripcion</label>
            <textarea name="descripcion" className="form-control" rows="5" value={descripcion} onChange={handleChange}></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => modify()}>
          Modificar
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;