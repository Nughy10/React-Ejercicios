const Header = (props) => {

    return (
        <div>
            <h1>Títlo del header</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

export default Header;