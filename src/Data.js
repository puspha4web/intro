// const data = ["create", "nelson", "adbul"];
// const listItems = data.map((person) => <li>{person}</li>);

const data1 = [
  {
    id: 0,
    name: "firstName",
    profession: "chemist",
  },
  {
    id: 1,
    name: "secondName",
    profession: "maths",
  },
];

// const chmi=data1.filter(person=>if(person.profession=='chemist'){return person})

const listItems2 = data1.map((person) => (
  <li key={person.id}>{person.name}</li>
));

const List = () => {
  return (
    <div className="App">
      {/* <ul>{listItems}</ul> */}
      <ul>{listItems2}</ul>
    </div>
  );
};

export default List;
