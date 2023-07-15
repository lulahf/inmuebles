import "../Styles/Carta.css"
const Carta =({title,content, src})=>{

    return(
      <div className="contentCarta">    
       <div className="carta">
        <div>
      <img className="imagen" src={src} ></img>

        </div>
      <div className="info">      <h4>{title}</h4>
      <h5>{content}</h5></div>  

    </div>
  </div>
  )
   
}
export default Carta