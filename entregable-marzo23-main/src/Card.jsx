//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ song, artist }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <h2>Información de la Canción</h2>
      <p><strong>Canción:</strong> {song}</p>
      <p><strong>Artista:</strong> {artist}</p>
    </div>
  );
}

export default Card;
