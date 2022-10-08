import { useState, useEffect, useRef } from "react";
import styled from "styled-components";


const Cotainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: ${({isSeleccion , isIdSlected}) => (isSeleccion || isIdSlected ? "0rem" : "20rem")};
  margin: 0.4rem;
  border-radius: 1rem;
  flex-direction: column;
  color: #b9b9b9;
  background-color: #474a50;
  align-items: flex-start;
  transition: all 0.5s;
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    height: 3rem;
    margin: 0.3rem 0.5rem 0.3rem 0.9rem;
    border-radius: 1rem;
    overflow: hidden;
    opacity: ${({isSeleccion}) => isSeleccion? "0": "1"};
    transition: ${({isSeleccion}) => isSeleccion? "all 0.1s" : "all 0.5s"};
    :hover {
      background-color: #383b3d;
      color: #dddddd;
      cursor: pointer;
    }
    h1 {
      margin: 0rem 1rem 0rem 1rem;
      font-size: 1rem;
    }
  }
`;



function DropDown({ contentdropDown, isSeleccion, seleccionIdDrop, metSeleccion }) {

  const renderizador = contentdropDown

  const [ id, setId] = useState(renderizador.id)

  const selectionsFunction = (s) => {
    setId(s)
    seleccionIdDrop(s)
  }

  let menuRef = useRef();

  useEffect(() => (
    document.addEventListener("mouseup", (event) => {
      if (menuRef.current.contains(event.target)) {
        metSeleccion(true)
      }
    })
  ));
  

  return (
    <Cotainer ref={menuRef} isSeleccion={isSeleccion}>
      {renderizador.map((log, index) => (
        <div  isIdSlected={ id === log.id? true: false } onClick={() => selectionsFunction(log.id)} key={index}>
          <h1>{log.label}</h1>
        </div>
      ))}
    </Cotainer>
  );
}

export default DropDown;