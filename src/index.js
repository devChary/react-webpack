import './styles/index.scss';

const familyGuy = {
    "name": "Peter Griffin",
    "type": 'funny',
    "gender": "male"
}

const members = ['Lois', 'Peter', 'Stewie', 'Meg', 'Chris'];

console.log({...familyGuy, ...members});
