import React from "react";
import '../css/PersonComment.css';


/*function PersonComment(props){
  return(
    <div className="contenedor-comentario">
        <img 
          className="imagen" 
          src={require(`../img/img${props.img}.png`)}
          alt={`Foto de ${props.nombre}`} />
        
        <div className="contenedor-texto">
          <p className="nombre"><span className>{props.nombre}</span> en {props.pais}</p>
          <p className="cargo">{props.cargo} en <span>{props.empresa}</span></p>
          <p className="testim">{props.testimonio}</p>
        </div>
      </div>
  );
}*/

class PersonComment extends React.Component{
  render(){
    return (
      <div className="contenedor-comentario">
        <img 
          className="imagen" 
          src={require(`../img/img${this.props.img}.png`)}
          alt={`Foto de ${this.props.nombre}`} />
        
        <div className="contenedor-texto">
          <p className="nombre"><span className>{this.props.nombre}</span> en {this.props.pais}</p>
          <p className="cargo">{this.props.cargo} en <span>{this.props.empresa}</span></p>
          <p className="testim">{this.props.testimonio}</p>
        </div>
      </div>
    );
  }
} 

export default PersonComment;