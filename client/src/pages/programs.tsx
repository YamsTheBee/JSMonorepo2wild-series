import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

const Programs = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("/api/programs")
      .then((response) => response.json())
      .then((data: Program[]) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <div>
      <h1>Liste des Séries</h1>
      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>{program.synopsis}</p>
            <img src={program.poster} alt={program.title} />
            <p>Pays: {program.country}</p>
            <p>Année: {program.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
