import "./ImageContainer.css";
import  perfumImg from "../../assets/Images/perfum.jpg";

function ImageContainer(){
    return(
    <div id= "ImageDiv">
        <img id="MyImg" src={perfumImg}></img>
    </div>
)
}
export default ImageContainer;