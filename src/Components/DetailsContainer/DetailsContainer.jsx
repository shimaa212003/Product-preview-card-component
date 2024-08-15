
import "./DetailsContainer.css";
import CartIcon from "../../assets/Images/icon-cart.svg";
function DetailsContainer(){
    return(

    <div id ="DetailsDiv">
<div id="product">
<label id="title">PERFUME</label>

<h1 id="header">Gabrielle Essence Eau De Parfum</h1>

<p id="derection">A floral, solar and voluptuous interpretation composed by Olivier Polge,
     Perfumer-Creator for the House of CHANEL</p>

     <div id="priceDiv" >
        <span id="price">$149.99</span>
        <span id="pricedis"><s>$169.99</s></span>
     </div>

     <button type="submit" id="cartbtn">
        <img src={CartIcon}></img>
        <span id="Add">Add to Cart</span>
        
        </button>
    </div>
    </div>
)
    
}

export default DetailsContainer;