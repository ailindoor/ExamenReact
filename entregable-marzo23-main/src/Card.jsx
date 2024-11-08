//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import styles from "./styles/App.module.css"


function Card({ song, artist }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Información de la Canción</h2>
      <p className={styles.cardText}>
        <strong>Canción:</strong> {song}
      </p>
      <p className={styles.cardText}>
        <strong>Artista:</strong> {artist}
      </p>
    </div>
  );
}

export default Card;
