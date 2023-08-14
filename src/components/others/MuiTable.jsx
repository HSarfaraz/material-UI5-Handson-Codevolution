import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell align="center">Email</TableCell>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const tableData = [
  {
    id: 1,
    first_name: "Abbye",
    last_name: "Fairbrass",
    email: "afairbrass0@indiegogo.com",
  },
  {
    id: 2,
    first_name: "Lancelot",
    last_name: "Escofier",
    email: "lescofier1@latimes.com",
  },
  {
    id: 3,
    first_name: "Erica",
    last_name: "Shawley",
    email: "eshawley2@discovery.com",
  },
  {
    id: 4,
    first_name: "Lenka",
    last_name: "Mc Curlye",
    email: "lmccurlye3@bizjournals.com",
  },
  {
    id: 5,
    first_name: "Kahlil",
    last_name: "Dundon",
    email: "kdundon4@mozilla.org",
  },
  {
    id: 6,
    first_name: "Brannon",
    last_name: "Limpertz",
    email: "blimpertz5@blog.com",
  },
  {
    id: 7,
    first_name: "Troy",
    last_name: "Gabbat",
    email: "tgabbat6@soundcloud.com",
  },
  {
    id: 8,
    first_name: "Merola",
    last_name: "Crouse",
    email: "mcrouse7@who.int",
  },
  {
    id: 9,
    first_name: "Kimberlee",
    last_name: "Saffrin",
    email: "ksaffrin8@wikia.com",
  },
  {
    id: 10,
    first_name: "Kathe",
    last_name: "Cripin",
    email: "kcripin9@google.es",
  },
];
