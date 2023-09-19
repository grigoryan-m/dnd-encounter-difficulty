import "./Panel.css";
import React, {useEffect} from 'react';

function Panel(){
    useEffect(() => {
        const monsters = document.getElementById("monsters");
        const players = document.getElementById("players");

        const button = document.getElementById("button");
        const xpTable = {
            '0': 0,
            '1/8': 25,
            '1/4': 50,
            '1/2': 100,
            '1': 200,
            '2': 450,
            '3': 700,
            '4': 1100,
            '5': 1800,
            '6': 2300,
            '7': 2900,
            '8': 3900,
            '14': 11500,
            '15': 13000,
            '16': 15000,
            '17': 18000,
            '18': 20000,
            '19': 22000,
            '20': 25000,
            '21': 33000,
            '22': 41000,
            '23': 50000,
            '24': 62000,
            '25': 75000,
        };        

        button.addEventListener("click", ()=>{

            let monstersArray = monsters.value.split(",");
            let monsterPair;
            let totalXp = 0;
            for(let i = 0; i < monstersArray.length; i++){
                monstersArray[i] = monstersArray[i].trim();
                monsterPair = monstersArray[i].split(":");
            
                totalXp += parseInt(monsterPair[0]) * xpTable[monsterPair[1]];
            }

            if(isNaN(parseInt(players.value))){
                alert("Error!");
            }else{
                alert("Each player gets " + totalXp / players.value + " xp");
            }
        });

      }, []);
    return(
        <div className="Wrapper">
            <div className="Panel">
                <label>Monster characters: <input id="monsters" placeholder="1:1/4, 2:1..."/></label>
                <label>Number of players: <input id="players" placeholder="3..." type="number"/></label>
                <button id="button">Calculate!</button>
            </div>
        </div>
    );
}

export default Panel;