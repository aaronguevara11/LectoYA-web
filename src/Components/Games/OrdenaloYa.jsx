import { useState } from "react"
import "./ordenaloya.css"

export const OrdenaloYa = () => {
    const [sentence, setSentence] = useState([
        { 
            id: 1,
            title: 'Tarea 1',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 2,
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 1
        },
        { 
            id: 3,
            title: 'Tarea 3',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 3
        },
        { 
            id: 4,
            title: 'Tarea 4',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 2
        },
        { 
            id: 5,
            title: 'Tarea 5',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 2
        },
    ]);

    const getList = (list) => {
      return sentence.filter(item => item.list === list)
  }
    const getListComplete = () => {
      return sentence
  }
  const startDrag = (evt, item) => {
      evt.dataTransfer.setData('itemID', item.id)
  }

  const draggingOver = (evt) => {
      evt.preventDefault();
  }

  const onDrop = (evt, list) => {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = sentence.find(item => item.id == itemID);
      item.list = list;

      const newState = sentence.map(senten => {
          if(senten.id === itemID) return item;
          return senten
      })

      setSentence(newState);
  }

  return (
    <>
            <h1>
                ORDENALO YA &nbsp;
            </h1>
            <br/>

            <div className='drag-and-drop'>
                <div className='column column--1'>
                    <h3>
                        ORGANIZA LAS ORACIONES
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                        {getList(1).map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='column column--2'>
                    <h3>
                        Tareas en progreso
                    </h3>
                    <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                        {getListComplete().map(item => (
                            <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                <strong className='title'>{item.title}</strong>
                                <p className='body'>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


    </>
  )
}