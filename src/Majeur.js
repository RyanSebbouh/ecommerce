function Majeur(props) {
    // Si l'âge est supérieur ou égal à 18
    if (props.age >= 18) {
        return <div>majeur</div>;
    } 
    // Sinon
    else {
        return <div>mineur</div>;
    }
}

export default Majeur;