import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const FilterButtons = ({setFilter}) => {

    const butonPress = (buttonType) => {
        setFilter(buttonType)
    }
  return (
      <ButtonGroup>
        <Button color="secondary" className="mx-2" onClick={() => butonPress("noFilter")}>Todas</Button>
        <Button color="success" className="mx-2" onClick={() => butonPress("completed")}>Completadas</Button>
        <Button color="primary" className="mx-2" onClick={() => butonPress("inProgress")}>En Progreso</Button>
      </ButtonGroup>
  );
};

export default FilterButtons;