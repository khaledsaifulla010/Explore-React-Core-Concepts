import { useState } from "react"

export default function Team () {

    const  [teamPlayerCount, setTeamPlayer] = useState(11);

    const handlePlayerAdd = () =>{
        const newPlayer = teamPlayerCount + 1;

        setTeamPlayer (newPlayer);
    }

    const handlePlayerRemove = () => {
        if(teamPlayerCount > 11){
        const removePlayer = teamPlayerCount -1;
        setTeamPlayer (removePlayer);
        }
    }

    const teamStyle = {
        border: '4px solid purple',
        margin: '40px',
        padding: '40px',
        borderRadius: '20px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players : {teamPlayerCount} </h3>
            <button style={{background: 'green', padding: '8px', color: 'white', borderRadius: '4px', marginRight : '12px'}} onClick={handlePlayerAdd}>Player Add</button>

            <button style={{background: 'green', padding: '8px', color: 'white', borderRadius: '4px'}} onClick={handlePlayerRemove}>Player Remove</button>
        </div>
    )
}