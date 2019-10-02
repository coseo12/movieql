const people = [
  {
    id: 0,
    name: 'Mark',
    age: 34,
    gender: 'female',
  },
  {
    id: 1,
    name: 'Anny',
    age: 24,
    gender: 'male',
  },
  {
    id: 2,
    name: 'Michel',
    age: 25,
    gender: 'female',
  },
  {
    id: 3,
    name: 'Herry',
    age: 54,
    gender: 'female',
  },
  {
    id: 4,
    name: 'Anna',
    age: 34,
    gender: 'male',
  },
];

const getById = id => {
  const filterPeople = people.filter(person => id === person.id);
  return filterPeople[0];
};

export { people, getById };
