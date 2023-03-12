import searchNames from "./searchNames";
import { getNames } from "./services";

// 这里其实是mock的两种用法。
jest.mock("./services", () => ({
  getNames: jest.fn(),
  // getNames: jest.fn(() => {
  //   return ["john", "aaa", "bbb", "ccc"];
  // }),
}));

test("shold return empty result when not search", () => {
  //----------given----------
  const keyword = "frank";
  getNames.mockImplementation(() => []);
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(result).toEqual([]);
});

test("shold return target result when found search", () => {
  //----------given----------
  const keyword = "john";
  getNames.mockImplementation(() => ["john", "aaa", "bbb", "ccc"]);
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(result).toEqual(["john"]);
});
