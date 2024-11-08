import { useState } from "react"
import Card from "./Card";
import styles from "./styles/App.module.css";

function App() {
  const [formData, setFormData] = useState({
    song: '',
    artist: '',
  });

  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.song || !formData.artist || formData.song.trim().length <= 3 || formData.artist.length <= 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    setShowCard(true);
  };

  return (
    <div className={styles.container}>
      <h1>Formulario de Canciones</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="song" className={styles.label}>Canción:</label>
          <input
            type="text"
            id="song"
            name="song"
            className={styles.input}
            value={formData.song}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="artist" className={styles.label}>Artista:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            className={styles.input}
            value={formData.artist}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>

      {error && <p className={styles.error}>{error}</p>}
      {showCard && <Card song={formData.song} artist={formData.artist} />}
    </div>
  );
}

export default App;
