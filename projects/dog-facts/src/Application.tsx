import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';


type FormProps = {
  onSubmit: (num: number) => void;
}

const Form = ({ onSubmit }: FormProps) => {

  const [value, setValue] = React.useState(1);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value)
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input type="number" value={value} onChange={e => setValue(+e.target.value)} min="1" max="10" id="number-of-facts" />
      </div>
      <input type="submit" value="Dog fact fetch" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [facts, setFacts] = React.useState<DogFactType[]>([]);

  const handleFormSubmit = (num: number) => {
    fetchDogFacts(num).then(facts => setFacts(facts))
  }

  return (
    <main>
      <Form onSubmit={handleFormSubmit} />
      <section>
        {facts.map(fact => (
          <Fact key={fact.id} fact={fact.fact} />
        ))}
      </section>
    </main>
  );
};

export default Application;
