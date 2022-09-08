import React from "react";

export const helloWorld = () => {
  console.log('hello World');
  return 'hello World!';
};

export default function Root(props) {
  return <section>{props.name} is mounted!</section>;
}
