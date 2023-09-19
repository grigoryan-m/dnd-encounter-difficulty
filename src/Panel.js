import "./Panel.css";
import React, {useEffect} from 'react';

function Panel(){
    useEffect(() => {
        const monsters = document.getElementById("monsters");
        const button = document.getElementById("button");

        button.addEventListener("click", ()=>{
            
        });

      }, []);
    return(
        <div className="Wrapper">
            <div className="Panel">
                <label>Monster characters: <input id="monsters" placeholder="1:1/4, 2:1..."/></label>
                <button id="button">Calculate!</button>
            </div>
        </div>
    );
}

export default Panel;