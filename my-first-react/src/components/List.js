function List() {

    const listAnimals = favoriteAnimals.map(animal =>
        <li>{animal}</li>
      );
    return <ul>{listAnimals}</ul>;
}

export default List;


const favoriteAnimals = [
    'Cat',
    'Dog',
    'Alpacca'
  ];
 
  