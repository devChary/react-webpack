import './styles/index.scss';

const familyGuy = {
    "name": "Peter Griffin",
    "type": 'funny',
    "gender": "male"
}

const members = ['Lois', 'Peter', 'Stewie', 'Meg', 'Chris'];

console.log({...familyGuy, ...members});

console.log("🚀 ~ file: index.js ~ line 6 ~ familyGuy", familyGuy)
console.log("🚀 ~ file: index.js ~ line 8 ~ members", members)
