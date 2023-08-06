import "./Testing.css";
function Testing(props){
    let className = props.isValue?'demo':'demo1';
    console.log(props.value)
    return(
        <>
        {/* {props.value} */}
        <h1 className={`${className} demo2`}>Heading</h1>
        </>
    )
}
export default Testing;