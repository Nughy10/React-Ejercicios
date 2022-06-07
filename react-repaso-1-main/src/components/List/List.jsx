import './List.scss';

const List = ({myArray}) => {
    

    return (
        <ul>
            {myArray && myArray.map((num, i) => <li key={i}>{num}</li>)}
        </ul>
    );
}

export default List;