import type { Character } from '../public/fma-data.ts';
import { data } from '../public/fma-data.ts';
import { Component, type ReactNode } from 'react';

const TopFive = ({ data }: { data: Character[] }) => {
  const top = [...data].sort((a, b) => b.votes - a.votes).slice(0, 5);
  return (
    <>
      {top.map((character, i) => (
        <tr key={character.name} className={i % 2 !== 0 ? 'light' : 'dark'}>
          <td>{character.name === 'Edward Elrich' ? character.name + ' "Full Metal Alchemist"' : character.nickName || character.name}</td>
          <td>{character.skillset.join(', ')}</td>
          <td>{character.votes}</td>
        </tr>
      ))}
    </>
  );
};

interface Props {
  data: Character[];
}

class CreateCard extends Component<Props> {
  render(): ReactNode {
    return (
      <>
      {this.props.data.map(character => (
        <div className="card" key={character.name}>
          <div className="card-titles">
            <h3>{character.name}</h3>
            <h4>{character.nickName || ''}</h4>
          </div>
          <img src={character.imageUrl} alt={character.name} />
          <p>{character.background}</p>
        </div>
      ))}
    </>
    )
  }
}

const App = () => {
  return (
    <>
      <header>
      <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            <TopFive data={data}/>
          </tbody>
        </table>
      </section>
      <section id='character-cards'>
        <CreateCard data={data}/>
      </section>
    </>
  )
};

export default App
