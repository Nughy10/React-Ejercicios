import List from '../List/List';
import Title from '../Title/Title';
import './Header.scss';
import Menu from './Menu/Menu';

const Header = (props) => {
    let myHeader = <h1>Hola Soy el header de {props.name} {props.surname}</h1>
    let myBoolean = false; 
    let myBoolean2 = true;  
    let myParagraph = myBoolean ? <p>Soy un parrafo y booleano es true</p>: <p>Soy un parrafo y booleano es false</p>
    const myMenu = ["Link1", "Link2", "Link3", "Link4"];

    return (
        <div>
            <Title {...props}/>
            <Title name={props.name} surname={props.surname}/>
            <Menu>
                <List myArray={myMenu}/>
                <button>No hago nada1</button>
                <button>No hago nada2</button>
                <button>No hago nada3</button>
                <button>No hago nada4</button>
                <button>No hago nada5</button>
                <button>No hago nada6</button>
            </Menu>
            <header>{myHeader}</header>
            {myParagraph}
            {myBoolean2 && <p>My otro booleano es true y entonces me pinto</p>}
        </div>
    );
}

export default Header;