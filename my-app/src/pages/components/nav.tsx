import React from 'react';

type MyComponentProps = {
  name: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return <div>Navegation, {name}!</div>;
};

export default MyComponent;
