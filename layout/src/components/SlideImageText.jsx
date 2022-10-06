import '../styles/css/SlideImageText.css';
import Button from "./Button";

const SlideImageText = (props) => {
    const slideStyle = { 
        backgroundImage: `url(assets/banner-image.png)`,
				backgroundClip: "border-box",
        maxWidth: "100%", maxHeight:"100%", backgroundSize: "cover"
    }
    return (
        <div style={slideStyle} className="container-slide-image">
            <div className="sub-main-slide">
                <p className="main-slide-text1">{props.th1}</p>
                <p className="main-slide-text2">{props.th2}</p>
                <Button text={props.th3} bold="true"/>
            </div>
        </div>
    );
}

export default SlideImageText;
