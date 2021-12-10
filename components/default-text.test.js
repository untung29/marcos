import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import DefaultText from "./default-text";

it("<DefaultText />", () => {
  const tree = renderer.create(<DefaultText />).toJSON();
  expect(tree).toMatchSnapshot();
});
