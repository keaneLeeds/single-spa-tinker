import React from "react";
import { helloWorld } from "@keane/spa-application-1";

export default function Root(props) {
  return <section>{helloWorld()}! {props.name} is mounted!</section>;
}
