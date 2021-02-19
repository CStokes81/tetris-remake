import React from 'react';

import { createGrid } from '../gameHelpers';



import Stats from './Stats'
import StartButton from './StartButton'

const Tetris = () => {
    return (
         
            
            <aside>
                <div>
                <Stats text="Score" />
                <Stats text="Rows" />
                <Stats text="Level" />
                </div>
                <StartButton />
            </aside>
          
    )
}

export default Tetris;
