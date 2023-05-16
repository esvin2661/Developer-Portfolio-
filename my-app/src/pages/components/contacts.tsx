import React from 'react';

type MyComponentProps = {
  name: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return <div>Contacts, {name}!</div>;
};

export default MyComponent;
