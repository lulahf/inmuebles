"use client";
import Carta from "./contenido/Carta";
export default function Mapeo() {
  const array = [
    {
      title: "Verificación",
      content: "Verificamos que la información recibida por el cliente corresponda a la realidad",
      urlImage: "https://media.istockphoto.com/id/1213988662/es/vector/hombre-verificando-personas-revisi%C3%B3n-en-la-red-social-en-pc.jpg?s=1024x1024&w=is&k=20&c=yuXR0NkKQ7mlc_0kpHmwEUv8dzQTXPbH5nzafmRynJw=",
    },
    {
      title: "Inspección",
      content: "Registre personalmente el inmueble o el automovil escogido",
      urlImage: "https://img.freepik.com/foto-gratis/mujer-joven-sentada-coche-mostrando-pulgares-arriba_231208-7746.jpg?w=2000",
    },
    {
      title: "Documentación",
      content: "Solicitud de toda la documentación referente al automovil o inmueble",
      urlImage: "https://img.freepik.com/vector-premium/documentos-confirmados-o-documentos-aprobados_149152-439.jpg?w=2000",
    },
    {
      title: "Garantía",
      content: "Suministramos toda la información concerniente a la garantía del inmueble o automovil",
      urlImage: "https://economia3.com/wp-content/uploads/2021/02/garantias-que-se-pueden-solicitar-en-un-contrato-de-arrendamiento-noticias-infocif.jpg",
    },

  ];
  return (
    <>
      <div className="contentCartica">
        {array.map((i, index) => (
          <Carta key={index} content={i.content} title={i.title} src={i.urlImage}/>
        ))}
      </div>
    </>
  );
}

