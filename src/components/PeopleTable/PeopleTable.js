import { Link, useParams } from "react-router-dom";

const PeopleTable = ({ people }) => {
  const { slug } = useParams();

  const elements = people.map((person, i, peopleArray) => {
    const getParent = (parent) => peopleArray.find((elem) => elem.name === parent);
    const father = getParent(person.fatherName);
    const mother = getParent(person.motherName);

    return (
      <tr key={person.slug} className={person.slug === slug ? "has-background-warning" : null}>
        <td>
          <Link
            to={`/people/${person.slug}`}
            className={person.sex === "f" ? "has-text-danger" : null}>
            {person.name}
          </Link>
        </td>

        <td>{person.sex}</td>
        <td>{person.born}</td>
        <td>{person.died}</td>

        <td>
          {!person.motherName ? (
            "-"
          ) : mother ? (
            <Link className="has-text-danger" to={`/people/${mother.slug}`}>
              {mother.name}
            </Link>
          ) : (
            <span>{person.motherName}</span>
          )}
        </td>

        <td>
          {!person.fatherName ? (
            "-"
          ) : father ? (
            <Link to={`/people/${father.slug}`}>{father.name}</Link>
          ) : (
            <span>{person.fatherName}</span>
          )}
        </td>
      </tr>
    );
  });

  return (
    <table className="table is-striped is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default PeopleTable;
