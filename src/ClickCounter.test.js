import ClickCounter from "./ClickCounter";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return shallow(<ClickCounter />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='$(val)']`);
};

describe("Renders", () => {
  // test("the app component renders without crashing", () => {
  //   const wrapper = setup;
  //   console.log(wrapper.debug());
  //   expect(wrapper.exists()).toBe(true);
  // });

  test("ClickCounter", () => {
    const wrapper = setup();
    const clickCounterComponent = findByTestAttr(
      wrapper,
      "component-click-counter"
    );
    expect(clickCounterComponent.length).toBe(1);
  });

  test("increment button", () => {
    const wrapper = setup();
    const clickCounterComponent = findByTestAttr(wrapper, "increment-button");
    expect(clickCounterComponent.length).toBe(1);
  });

  test("counter display", () => {
    const wrapper = setup();
    const clickCounterComponent = findByTestAttr(wrapper, "counter-display");
    expect(clickCounterComponent.length).toBe(1);
  });
});

test("counter display starts at 0", () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, "count").text();
  expect(counter).toBe("0");
});

test("clicking the increment button increments out counter", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button").text();
  button.simulate("click");
  const counter = findByTestAttr(wrapper, "count").text();
  expect(counter).toBe("1");
});

test("clicking the increment button changes the state", () => {
  let mockSetCount = jest.fn();
  React.useState = jest.fn(() => [0, mockSetCount]);
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  button.simulate("click");
  expect(mockSetCount).toHaveBeenCalledWith(1);
});

test("counter display starts");
