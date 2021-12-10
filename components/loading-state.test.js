import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import LoadingState from "./loading-state";

it("<DefaultTextBold />", () => {
  const tree = renderer.create(<LoadingState />).toJSON();
  expect(tree).toMatchSnapshot();
});
