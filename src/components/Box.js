

export const Box = ({props}) => {
    const deleteBox = () => {};
    const addBox = () => {};
    return <div>
        <div style={{display: 'flex', justifyContent: 'space-around', padding: '10px', border: '3px solid black'}}>
            <input/>
            <button onClick={deleteBox} >delete box</button>
            <button onClick={addBox} >add box box</button>
        </div>
        <div>
            children
        </div>
    </div>
}
