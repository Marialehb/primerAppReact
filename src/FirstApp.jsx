

// const getResult = (a, b) => {
//     return a + b;
// }
import { ReactPropTypes } from "prop-types";

const FirstAPP = ({title, subTitle} ) => {

    return (
    <>

        <h1>{title}</h1>
        {/* <h1>{getResult(1,2)} </h1> */}
        {/* <h1> {JSON.stringify(newMessage)} </h1> */}
        <p>subTitle</p>
    
    </>
    )
    
}

export default FirstAPP;

FirstAPP.propTypes = {
    
    title: propTypes.string.isRequired,
    subTitle: propTypes.number,

}