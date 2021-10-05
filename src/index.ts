export function mock<T>(...fns: (() => T)[]): () => T {
  let numberOfInvokations = 0;
  return function () {
    return fns[numberOfInvokations++]();
  };
}

export interface FluentApi<T> {
  (): T;
  mockOnce(fn: () => T): FluentApi<T>;
}

export function mockOnce<T>(...fns: (() => T)[]): FluentApi<T> {
  const mockedFn = mock(...fns);
  function next(fn: () => T): FluentApi<T> {
    return mockOnce(...fns, fn);
  }
  return Object.assign(mockedFn, { mockOnce: next });
}
