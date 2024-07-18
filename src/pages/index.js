/**
 * It's a function that returns a FullLayout component that contains an IndexPages component
 * @param props - This is the props that are passed to the component.
 * @returns A function that returns a component.
 */
import React from 'react';
import IndexPages from '../components/pages/IndexPages';

const Home = (props) => {
  return (
    <>
      <IndexPages {...props} />
    </>
  );
};

export default Home;
