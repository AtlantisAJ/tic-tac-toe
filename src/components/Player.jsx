import {useState} from "react";

function Player({ initialName, symbol}) {
    const [isEditing, setEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);


    function handleEditClick() {
        setEditing((prev) => !prev);
    }

    function handleChangePlayerName(event) {
        console.log(event)
        setPlayerName(event.target.value);
    }


    let editablePlayerName = <span className='player-name'>{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChangePlayerName}></input>
    }

    return (
        <li>
            <span className='player'>
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;
