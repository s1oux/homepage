const movesets = {
  run: 'ryu-run.gif',
  roundkick: 'ryu-leghit.gif',
  hadouken: 'ryu-hadoken.gif',
  uppercut: 'ryu-uppercut.gif',
  stance: 'ryu-ts-stance.gif',
  tie: 'ryu-tie.gif',
};

document.getElementById(
  'current-date'
).textContent = new Date().toLocaleDateString();

document.getElementById('initial-date').textContent = new Date(
  0
).toLocaleDateString();

const movesetButtons = Array.from(
  document.getElementsByClassName('moveset-ctrl-btn')
);

const clearSelection = () => {
  movesetButtons.forEach((btn) => btn.classList.remove('active'));
};

const handleBtnClick = (event) => {
  event.preventDefault();
  clearSelection();
  event.target.classList.add('active');

  document.getElementById('movement').src = `./assets/images/moves/${
    movesets[event.target.id]
  }`;
};

movesetButtons.forEach((btn) => (btn.onclick = handleBtnClick));
