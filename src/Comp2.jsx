import "./est.css"
function Comp2(props){
    return(
                <div className="cartilla">
                    <div className="imag">
                        <img className="imgcard" src={props.imagen} alt="" />
                    </div>
            <div className="inf">
                <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
            </div>
            
        </div>
    );
}
export default Comp2;