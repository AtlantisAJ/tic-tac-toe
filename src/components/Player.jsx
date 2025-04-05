import {useState} from "react";

function Player({ name, symbol}) {
    const [isEditing, setEditing] = useState(false);
    function handleEditClick() {
        setEditing((prev) => !prev);
    }

    let playerName = <span className='player-name'>{name}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        playerName = <input type='text' placeholder='Введите имя игрока' required></input>
        btnCaption = 'Save';
    }

    return (
        <li>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}

export default Player;
