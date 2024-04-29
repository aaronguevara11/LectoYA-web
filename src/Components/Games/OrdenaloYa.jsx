import { useState } from "react"

export const OrdenaloYa = () => {
    const [sentence, setSentence] = useState([
        { 
            id: 1,
            title: 'Tarea 1',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 100,
            order : 0
        },
        { 
            id: 2,
            title: 'Tarea 2',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 100,
            order : 0
        },
        { 
            id: 3,
            title: 'Tarea 3',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 100,
            order : 0
        },
        { 
            id: 4,
            title: 'Tarea 4',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 100,
            order : 0
        },
        { 
            id: 5,
            title: 'Tarea 5',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.',
            list: 100,
            order : 0
        },
    ]);

    const getList = (list) => {
      return sentence.filter(item => item.list === list)
  }
    const getorder = () =>{
    sentence.sort((a, b) => a.order - b.order);
    return sentence.filter(item => item.order);
    }
    const getListComplete = () => {
      return sentence
  }
  const startDrag = (evt, item) => {
      evt.dataTransfer.setData('itemID', item.id)
      console.log(item)
  }
  const startDragOrder = (evt, item) => {
    evt.dataTransfer.setData('itemID', item.id)
    console.log(item)
}
  const draggingOver = (evt) => {
      evt.preventDefault();
  }

  const onDrop = (evt, list) => {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = sentence.find(item => item.id == itemID);
      item.list = list;
      orderby(item)

      const newState = sentence.map(senten => {

          if(senten.id === itemID) return item;
          return senten
      })

      setSentence(newState);
  }

  const onDroporder = (evt, list,order) => {

      const itemID = evt.dataTransfer.getData('itemID');
    
      const item = sentence.find(item => item.id == itemID);
      item.list = list;
      if(item.order!=0){
        orderReposition(item)
      }
      item.order=order
      

      const newState = sentence.map(senten => {
          if(senten.id === itemID) return item;
          return senten
      })

      setSentence(newState);
  }
  
  const orderReposition = (item) =>{
      sentence.map(senten =>{
        if(senten.order > item.order){
            senten.order = senten.order -1
        }
      })
  }


  const orderby = (item) =>{
    if (item.order>=1){
       
    }else{
        let cont = 0
        sentence.map(senten => {
           if(senten.list <= 5 ){
               cont = cont + 1
           }
           item.order = cont
        })
   
    }

  }

  return (
    <>
        <div className="w-full h-full">
                <h1 className=" text-6xl py-5 text-center">
                    ORDENALO YA &nbsp;
                </h1>
                <br/>

                <div className='flex gap-10 m-10 mt-0 justify-center'>
                    
                    <div className='flex flex-col bg-gray-200 w-1/2 min-h-28 py-6 px-3 rounded-lg border-t-8 border-solid shadow-slate-500 border-[#6FD2AF]'>
                        <h3 className=" text-center my-5 mt-0">
                            ORGANIZA LAS ORACIONES
                        </h3>
                        <div className='flex flex-col h-full gap-4' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                            {getorder().map(item => (
                                <div className=' py-6 px-5 rounded-lg text-lg bg-white cursor-pointer text-[#5b5b73]' key={item.id} draggable onDragStart={(evt) => startDragOrder(evt, item)}>
                                    <strong className='text-[#6FD2AF]'>{item.title}</strong>
                                    <p className='text-sm mt-5 mb-0'>{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col bg-gray-200 w-1/2 min-h-28 py-6 px-3 rounded-lg border-t-8 border-solid shadow-slate-500 border-[#FF9E4A]'>
                        <h3 className="text-center my-5 mt-0">
                            ORACIONES POR ORGANIZAR
                        </h3>
                        <div className='flex flex-col h-full gap-4' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDroporder(evt, 100,0))}>
                            {getList(100).map(item => (
                                <div className='py-6 px-5 rounded-lg text-lg bg-white cursor-pointer text-[#5b5b73]' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                    <strong className='text-[#FF9E4A]'>{item.title}</strong>
                                    <p className='text-sm mt-5 mb-0'>{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
        </div> 
    </>
  )
}