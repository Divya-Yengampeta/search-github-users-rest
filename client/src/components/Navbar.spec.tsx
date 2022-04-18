import { render } from "@testing-library/react";
import React from "react";
import Navbar from "./Navbar";
import { shallow } from "enzyme";

describe("Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
  it("check on className", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.html()).toContain("navbar-expand-sm");
  });

  it("should add 'p-button-secondary' class to button", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.html()).toContain("Github User Search");
  });
});
