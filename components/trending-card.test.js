import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import TrendingCard from "./trending-card";
import { withNavigation } from "react-navigation";

it("<TrendingCard />", () => {
  const tree = renderer.create(<TrendingCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
