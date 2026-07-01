import { expect, test } from "vitest";
import add from "./add.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
