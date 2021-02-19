//According to tetris.fandom.com, the game board (grid) is 10 cells wide by 40 cells tall

export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 40;

/*This creates a new array from the grid height array & then the inline function is saying that
for each row create a new array of the cells and fill them with another array of "0" that represents
a cell without anything in it and "clear" means no tetromino has collided in this cell and we should 
wipe it out of the grid in the next render*/
export const createGrid = () =>
    Array.from(Array(GRID_HEIGHT), () =>
        new Array(GRID_WIDTH).fill([0, 'clear'])
    )