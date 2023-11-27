import React, { useState } from 'react';

function ListeCoursesApp() {
  const [listeCourses, setListeCourses] = useState([]);
  const [nouvelElement, setNouvelElement] = useState('');

  const ajouterElement = () => {
    if (nouvelElement.trim() !== '') {
      setListeCourses([...listeCourses, nouvelElement]);
      setNouvelElement('');
    }
  };

  return (
    <div>
      <h2>Liste de Courses</h2>

      <div>
        <input
          type="text"
          value={nouvelElement}
          onChange={(e) => setNouvelElement(e.target.value)}
        />
        <button onClick={ajouterElement}>Ajouter</button>
      </div>

      <ul>
        {listeCourses.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [compteur, setCompteur] = useState(0);

  const getMessage = () => {
    if (nom !== '' || prenom !== '') {
      return `Bonjour ${prenom} ${nom}`;
    } else {
      return 'Veuillez remplir au moins l\'un des deux champs.';
    }
  };

  const incrementerCompteur = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      <br />

      <label htmlFor="prenom">Prénom :</label>
      <input
        type="text"
        id="prenom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />

      <p>{getMessage()}</p>

      <h1>Compteur : {compteur}</h1>
      <button onClick={incrementerCompteur}>Incrémenter</button>

      {/* Utilisation de la composante ListeCoursesApp */}
      <ListeCoursesApp />
    </div>
  );
}

export default App;
