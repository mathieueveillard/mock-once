import { mock, mockOnce } from ".";

it("should use the function provided as argument as an implementation", function () {
  const fn = () => 1;
  const mockedFn = mock(fn);
  expect(mockedFn()).toEqual(1);
});

it("should use the 2 functions provided as argument as implementations", function () {
  const fn1 = () => 1;
  const fn2 = () => 2;
  const mockedFn = mock(fn1, fn2);
  expect(mockedFn()).toEqual(1);
  expect(mockedFn()).toEqual(2);
});

it("should use the 2 functions provided as argument as implementations, with fluent API", function () {
  const fn1 = () => 1;
  const fn2 = () => 2;
  const mockedFn = mockOnce(fn1).mockOnce(fn2);
  expect(mockedFn()).toEqual(1);
  expect(mockedFn()).toEqual(2);
});
