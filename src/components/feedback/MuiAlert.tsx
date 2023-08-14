import CheckIcon from "@mui/icons-material/Check";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

export const MuiAlert = () => {
  return (
    <>
      <Stack spacing={2}>
        <Alert severity="error" onClose={() => alert("close alert")}>
          This is an error alert
        </Alert>
        <Alert severity="warning">This is warning alert</Alert>
        <Alert severity="info">This is info alert</Alert>
        <Alert severity="success">This is success alert</Alert>
      </Stack>
      <br />
      <Stack spacing={2}>
        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is info alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is success alert
        </Alert>
      </Stack>
      <br />
      <Stack spacing={2}>
        <Alert
          variant="filled"
          severity="error"
          onClose={() => alert("close alert")}
        >
          <AlertTitle>Error</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is warning alert
        </Alert>
        <Alert variant="filled" severity="info">
          <AlertTitle>Info</AlertTitle>
          This is info alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is success alert
        </Alert>
      </Stack>
    </>
  );
};
