import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Check the initial value of count.", () => {
  const { getByTestId } = render(<Counter initialValue={0} />);
  let counter = getByTestId("count").textContent;

  expect(Number(counter)).toEqual(0);
});

test("Check the increment button", () => {
  const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
  let counter = getByTestId("count").textContent;
  expect(Number(counter)).toEqual(0);

  let incrementBtn = getByRole("button", { name: "Increment" });
  fireEvent.click(incrementBtn);
  let counterInc = getByTestId("count").textContent;
  expect(Number(counterInc)).toEqual(1);
});

test("Check the decrement button", () => {
  const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
  let counter = getByTestId("count").textContent;
  expect(Number(counter)).toEqual(0);

  let decrementBtn = getByRole("button", { name: "Decrement" });
  fireEvent.click(decrementBtn);
  let counterDec = getByTestId("count").textContent;
  expect(Number(counterDec)).toEqual(-1);
});
