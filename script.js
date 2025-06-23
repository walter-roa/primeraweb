function mostrarSabias(id) {
 const contenido = document.getElementById("sabiasContenido");

  if (id === "sabias1") {
    contenido.innerHTML = `
      <h2>Organizaciones Sociales</h2>
      <p>¿Sabías que una organización territorial puede postular a fondos del Estado si está regularizada en la municipalidad y tiene personalidad jurídica vigente?</p>
      <div style="display: flex; gap: 10px;">
        <img src="img/org1.jpg" width="48%">
        <img src="img/org2.jpg" width="48%">
      </div>
    `;
  } else if (id === "sabias2") {
    container.innerHTML = `
      <h2>Dirigencia y Liderazgo</h2>
      <p>¿Sabías que los dirigentes sociales pueden representar a su comunidad en consejos comunales, y que pueden recibir capacitaciones gratuitas a través de programas estatales?</p>
      <div style="display: flex; gap: 10px;">
        <img src="img/dirigente1.jpg" width="48%">
        <img src="img/dirigente2.jpg" width="48%">
      </div>
    `;
  } else if (id === "sabias3") {
    container.innerHTML = `
      <h2>Participación Ciudadana</h2>
      <p>¿Sabías que en Chile existe el Consejo de la Sociedad Civil (COSOC) como mecanismo de participación en la toma de decisiones públicas?</p>
      <div style="display: flex; gap: 10px;">
        <img src="img/participacion1.jpg" width="48%">
        <img src="img/participacion2.jpg" width="48%">
      </div>
    `;
  }
}
