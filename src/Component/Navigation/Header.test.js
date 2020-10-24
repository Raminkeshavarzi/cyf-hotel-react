// // Tets to check the number of link based on Auth status
// import React from "react";
// import { Route } from "react-router-dom";

// // Component
// import { configure, shallow } from "enzyme"; // configure is to bind adapter to react version through function constructor/ Shallow is Higher-order-function
// import Adapter from "enzyme-adapter-react-16"; // => to conent enzyme to my React version
// import Header from "./Header";

// configure({ adapter: new Adapter() }); // Enzyme is connected to react version

// // Takes two arguments
// describe("[Link] from React-Router-Dom", () => {
// let wrapper;
//   // Helper function
//     beforeEach (() => {
//       wrapper = shallow(<Header />);
//     })
//   it("If it is not Authenticated, it should render to [links] from React-Router-Dom", () => {
//     expect(wrapper.find(Route)).toHaveLength(2);
//   });

//   it('If it is authenticated, it should render 2 [Route] from React-Router-dom', () => {
//     wrapper.setProps({setAuthState: true}) // it's one way to add props to global wrapper
//     //  wrapper = shallow(<Header setAuthState />); another way to reassign the wrapper
//     expect(wrapper.find(Route)).toHaveLength(2);
//   })
// });
