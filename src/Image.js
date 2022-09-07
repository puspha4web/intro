function Image({ width = 20, person, college }) {
  return (
    <>
      <img
        src="somelink"
        alt={person.name}
        width={width}
        height={person.height}
        name={college}
      />
      ;
    </>
  );
}

export default Image;
