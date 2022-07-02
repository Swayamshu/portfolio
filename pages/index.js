import React, { useState, useEffect } from 'react'

import { client } from '../lib/client';
import { About, Design, Projects } from '../components'
import BG from "../public/home.svg";
import { useStateContext } from '../context/StateContext';

const Home = ({ designs, projects }) => {
  const { topSection, scrollY, setScrollY } = useStateContext();

  const [MousePosition, setMousePosition] = useState({
      x: 0,
      y: 0
  })

  const handleScrollY = () => setScrollY(window.pageYOffset);
  const handleMouseMove = (e) => setMousePosition({ x: e.pageX, y: e.pageY });

  useEffect(() => {
      window.addEventListener("scroll", handleScrollY);

      return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <>
      <div
        className="crop-100"
        onMouseMove={(e) => handleMouseMove(e)}
        ref={topSection}
      >
        <BG
          className="bg-image"
          style={{
            left: (-200 - MousePosition.x / 5),
            top: (-200 - MousePosition.y / 50),
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        <div className="hello">
            hello;
        </div>
      </div>

      <About />
      <Design designs={designs}/>
      <Projects projects={projects} />
    </>
  )
}

export const getServerSideProps = async () => {
  const designQuery = '*[_type == "design"]';
  const projectQuery = '*[_type == "project"]';

  const designs = await client.fetch(designQuery);
  const projects = await client.fetch(projectQuery);

  return {
    props: { designs, projects }
  }
};

export default Home