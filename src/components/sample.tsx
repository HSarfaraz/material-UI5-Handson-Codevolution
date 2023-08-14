/**
 * The function `sample` returns a React component that renders a button with the text "sd".
 * @returns The code is returning a JSX element that renders a `<div>` containing a `<Button>`
 * component from the `@mui/material` library. The `<Button>` component has a variant of "text" and a
 * color of "primary". The text inside the button is "sd".
 */
import Button from "@mui/material/Button";
//create a function to write fabonanci series
export const sample = () => {
  return (
    <div>
      <Button variant="text" color="primary">
        sd
      </Button>
    </div>
  );
};
