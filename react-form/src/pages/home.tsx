import ClassCard from "../components/classCard";
import turmas from "../mocks/turmas.json";


export default function Home () {
    return(
        <section>
        {turmas.map((turma) => (
          <ClassCard key={turma.id} turma={turma} />
        ))}
      </section>
    )
}