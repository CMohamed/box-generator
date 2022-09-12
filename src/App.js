import './App.css';
import {Box} from "./components/Box";
import {useState} from "react";

function App() {
    const [boxes, setBoxes] = useState([{
        id: 0
    }]);
    const deleteBoxById = (selectedId) => {
        const newBoxes = boxes.filter(({id}) => id !== selectedId);
        setBoxes([...newBoxes]);
    }
    return (
        <div>
            <div id="play-ground" style={{padding: 100}}>
                {
                    boxes.map(box => {
                        return <Box key={box.id} id={box.id} deleteById={deleteBoxById} />
                    })
                }
            </div>
        </div>
    );
}

export default App;
