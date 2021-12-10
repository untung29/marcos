import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import DefaultTextBold from "./default-text-bold";

it("<DefaultTextBold />", () => {
  const tree = renderer.create(<DefaultTextBold />).toJSON();
  expect(tree).toMatchSnapshot();
});
