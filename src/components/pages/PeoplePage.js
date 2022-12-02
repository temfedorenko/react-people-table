import { Loader } from "../Loader";
import { getPeople } from "../../api";
import { useEffect, useState } from "react";
import PeopleTable from "../PeopleTable/PeopleTable";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPeople()
      .then((data) => setPeople(data))
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }, []);

  const errorMessage = error && (
    <p data-cy="peopleLoadingError" className="has-text-danger">
      Something went wrong
    </p>
  );
  const spinner = loading && !error && <Loader />;
  const content = people.length > 0 && <PeopleTable people={people} />;

  return (
    <>
      <div className="section">
        <h1 className="title">People Page</h1>
      </div>

      <main className="section">
        <div className="container">
          <div className="block">
            <div className="box table-container">
              {spinner}
              {content}
              {errorMessage}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PeoplePage;
