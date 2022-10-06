import '../styles/css/IconAndLink.css';
import '../styles/css/Colors.css';

const IconAndLink = (props) => {
    let image
    let border = {"border": "none", "border-radius":"none"}
    let color = { "color": "#white", "font-weight": "normal"}

    if (props.img){
        image = <img src={props.img} alt="vetor"/>
    } else {
        image = null;
    }

    if (props.border){
            border["border"]="1px solid orange";
            border["border-radius"]="8px";
    }
    if (props.bold){
        color['color']="#faa500"
        color['font-weight']="bold"
    }

    return (
        <div className="iconAndLink" style={border}>
            {image}
            <a style={color} href={props.link}>{props.text}</a>
        </div>
    )
}

export default IconAndLink;