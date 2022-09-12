import {useState} from "react";


export const Box = (props) => {
    const [boxes, setBoxes] = useState([]);
    const deleteBox = () => {
        console.log('delete this' + props.id);
        props.deleteById(props.id);
    };
    const addBox = () => {
        const newBox = {id: boxes.length + 1};
        const newBoxes = [...boxes, newBox];
        setBoxes([...newBoxes]);
    };
    const deleteBoxById = (selectedId) => {
        console.log('delete in box: ', props.id)
        console.log('the box: ', selectedId)
        const newBoxes = boxes.filter(({id}) => id !== selectedId);
        setBoxes([...newBoxes]);
    }
    return <div id={props.id} style={{backgroundColor: `333333${props.id}`}}>
            <div style={{display: 'flex', justifyContent: 'space-around', padding: '10px', border: '3px solid black'}}>
                <input/>
                <button onClick={deleteBox} >delete box</button>
                <button onClick={addBox} >add box box</button>
            </div>
            <div style={{padding: 10}}>
                {
                    boxes.map(box => {
                        return (<Box key={props.id +'-'+ box.id} id={box.id} deleteById={deleteBoxById} />)
                    })
                }
            </div>
        </div>
}
