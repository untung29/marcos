import React from "react";
import renderer from "react-test-renderer";
// import { shallow } from "enzyme";
import CryptoCard from "./crypto-card";
import { withNavigation } from "react-navigation";

it("<CryptoCard/>", () => {
  const tree = renderer.create(withNavigation(<CryptoCard />)).toJSON();
  expect(tree).toMatchSnapshot();
});
