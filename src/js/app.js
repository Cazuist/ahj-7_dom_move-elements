import randomInteger from './functions';

const BOARD_SIZE = randomInteger(2, 5);
const wrapper = document.querySelector('.wrapper');

const boardFragment = new DocumentFragment();
const cellsFragment = new DocumentFragment();
const boardDiv = document.createElement('div');

boardDiv.classList.add('board-field');
boardDiv.style.setProperty('--size', BOARD_SIZE);

for (let i = 0; i < BOARD_SIZE ** 2; i += 1) {
  const cellDiv = document.createElement('div');
  cellDiv.classList.add('board-cell');
  cellsFragment.append(cellDiv);
}

boardDiv.append(cellsFragment);
boardFragment.append(boardDiv);
wrapper.append(boardFragment);

const board = document.querySelector('.board-field');
const cells = board.querySelectorAll('.board-cell');

function showCharacter() {
  const filledCell = board.querySelector('.character');

  let cellsToShow = [...cells];

  if (filledCell) {
    cellsToShow = [...cells].filter((item) => item.children.length === 0);
    filledCell.parentElement.innerHTML = '';
  }

  const cellNumber = randomInteger(0, cellsToShow.length - 1);
  const goblin = document.createElement('div');

  goblin.classList.add('character');
  cellsToShow[cellNumber].prepend(goblin);
}

showCharacter();
setInterval(showCharacter, 2000);
