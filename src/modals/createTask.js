import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer";

const CreateTask = ({toggle, modal}) => {

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

  const add = () => {
    if(!titulo.trim() || !descripcion.trim()){
      alert("Los campos no pueden estar vacios")
      return
    }
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 100),
        titulo,
        descripcion,
        completed: false
      })
    )
    alert("Tarea creada correctamente");
    setNombre("");
    setDescripcion("");
    toggle();

  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Crea tarea</ModalHeader>
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
        <Button color="primary" onClick={() => add()}>
          Crear
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
