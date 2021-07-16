import ClickCounter from "./ClickCounter";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("the app component renders without crashing ", () => {
  const wrapper = shallow(<ClickCounter />);
  console.log(wrapper.debug());
  expect(wrapper.exists()).toBe(true);
});

test("renders the increment button", () => {});

test("renders counter display", () => {});

test("counter display starts at 0", () => {});

test("clicking the increment button increments out counter", () => {});
