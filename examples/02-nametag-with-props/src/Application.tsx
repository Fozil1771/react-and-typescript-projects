import React, { FC } from 'react'

type NameTagProps = {
  name: string;
};

type ContrivedExampleProps = {
  // Does not take any arguements. Does not return anything
  onHover: () => void;

  //Takes a number. Returns nothing (e.g undefined)
  onChange: (id: number) => void;

  // Takes an event that is based on clicking on a button.
  // Returns nothing
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const NameTag: FC<NameTagProps> = ({ name }) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name="Steve" />;

export default Application;
