import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  const height = 600;

  useEffect(() => {
    window.addEventListener('scroll', Nav);

    return () => window.removeEventListener('scroll', Nav);
  }, []);

  const Nav = () => {
    if (window.scrollY > ref.current.offsetHeight + height) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <nav ref={ref} className={`nav ${isActive ? 'active' : ''}`}>
        <div className="container">
          <h1 className="logo">
            <a href="/index.html">My Website</a>
          </h1>
          <ul>
            <li>
              <a href="#!" className="current">
                Home
              </a>
            </li>
            <li>
              <a href="#!">About</a>
            </li>
            <li>
              <a href="#!">Services</a>
            </li>
            <li>
              <a href="#!">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hero">
        <div className="container">
          <h1>Welcome To My Website</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
            quidem.
          </p>
        </div>
      </div>

      <section className="container content">
        <h2>Content One</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          ad, cum, sed id perspiciatis quod harum ipsam cupiditate at maxime
          assumenda officia facilis fugit qui ab suscipit laborum praesentium
          odit ex consequuntur. Autem aut facilis quos repellendus eaque unde
          magnam quod soluta aliquid consequatur in nostrum a vero, error,
          assumenda ullam! Facilis pariatur perferendis neque expedita ad sint
          molestias fugit repellat non saepe. Necessitatibus, vel praesentium
          fuga beatae iusto iure ipsa dolore saepe totam ab mollitia tenetur?
          Corporis dolores nostrum, blanditiis maxime, laboriosam eveniet dicta
          excepturi molestiae delectus asperiores assumenda repellat cumque! Ab,
          optio odio vero similique reiciendis earum ea!
        </p>

        <h3>Content Two</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          nemo necessitatibus tempora tempore cumque, aut, rem neque doloribus
          accusamus vel fugit voluptatum ducimus, quam explicabo quo cupiditate!
          Minus labore molestias ducimus cum rerum? Sequi hic fugit tempora
          dolores assumenda pariatur vel debitis deleniti omnis officia nesciunt
          explicabo quasi, ratione id?
        </p>

        <h2>Content Three</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          ad, cum, sed id perspiciatis quod harum ipsam cupiditate at maxime
          assumenda officia facilis fugit qui ab suscipit laborum praesentium
          odit ex consequuntur. Autem aut facilis quos repellendus eaque unde
          magnam quod soluta aliquid consequatur in nostrum a vero, error,
          assumenda ullam! Facilis pariatur perferendis neque expedita ad sint
          molestias fugit repellat non saepe. Necessitatibus, vel praesentium
          fuga beatae iusto iure ipsa dolore saepe totam ab mollitia tenetur?
          Corporis dolores nostrum, blanditiis maxime, laboriosam eveniet dicta
          excepturi molestiae delectus asperiores assumenda repellat cumque! Ab,
          optio odio vero similique reiciendis earum ea!
        </p>

        <h3>Content Four</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          nemo necessitatibus tempora tempore cumque, aut, rem neque doloribus
          accusamus vel fugit voluptatum ducimus, quam explicabo quo cupiditate!
          Minus labore molestias ducimus cum rerum? Sequi hic fugit tempora
          dolores assumenda pariatur vel debitis deleniti omnis officia nesciunt
          explicabo quasi, ratione id?
        </p>

      </section>
    </>
  );
}

export default App;