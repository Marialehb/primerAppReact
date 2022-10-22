

// const getResult = (a, b) => {
//     return a + b;
// }
import PropTypes from "prop-types";


const FirstAPP = ({title, subTitle, name} ) => {

    return (
    <>

        <h1>{title}</h1>
        {/* <h1>{getResult(1,2)} </h1> */}
        {/* <h1> {JSON.stringify(newMessage)} </h1> */}
        <p>{subTitle}</p>
        <p>{name}</p>
    
    </>
    )
    
}

export default FirstAPP;

FirstAPP.propTypes = {
    
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstAPP.defaultProps = {
    name: 'Fernando Herrera',
    title: 'No hay titulo',
    subTitle: 'No hay Subtitulo'
}
