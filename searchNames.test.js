import { searchNames, functionNotTested } from "./searchNames";
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

test("should not return more than 3 matches", () => {
  //----------given----------
  const keyword = "john";
  getNames.mockImplementation(() => ["john 1", "john 2", "john 3", "john 4"]);
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(result).toHaveLength(3);
});

test("should handle null or undefined as input", () => {
  //----------given----------
  const keyword = undefined;
  getNames.mockImplementation(() => ["john 1", "john 2", "john 3", "john 4"]);
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(searchNames(undefined)).toBeUndefined();
  expect(searchNames(null)).toBeNull();
});

test("should return search result is case sensitive", () => {
  //----------given----------
  const keyword = "john";
  getNames.mockImplementation(() => [
    "John 1",
    "Huanggang 2",
    "zhangsan 3",
    "lisi 4",
  ]);
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(result).toEqual([]);
});

test("should return [] when getNames's return value is not an array", () => {
  //----------given----------
  const keyword = "john";
  getNames.mockImplementation(() => "111");
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(result).toEqual([]);
});

/**
 * 如果使用命令
 * npx jest --converage
 * 会生成一个报告。
 * 报告中会显示 functionNotTested() 函数，没有被执行。
 */
test("test function not tested", () => {
  //----------given----------
  const keyword = "111";
  //----------when----------
  const result = functionNotTested(keyword);
  //----------then----------
  // expect(result).toBe(`hello ${keyword} !`);

  /**
   * 注意这个
   * toMatchInlineSnapshot()
   * 这个函数不要填写参数，运行之后会自动生成下面的样子。
   *
   * 修改keyword之后，更新快照，就能变成下面的样子。
   *
   * 推荐使用 inline 这个快照，别使用 toMatchSnapshot() 。
   * 这个生成的文件可读性太差了。
   *
   * 避免生成太臃肿的快照文件，保持精简。
   */
  expect(result).toMatchInlineSnapshot(`"hello 111 !"`);
});
