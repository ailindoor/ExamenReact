import { useState } from "react"
import Card from "./Card";

function App() {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (song.length < 3 || song.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

    if (artist.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }

  
    setShowCard(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Formulario de Canciones</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="song">Canción:</label>
          <input
            type="text"
            id="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label htmlFor="artist">Artista:</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '20px' }}>Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showCard && <Card song={song} artist={artist} />}
    </div>
  );
}

export default App;
