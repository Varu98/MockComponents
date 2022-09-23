import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

const BrandFilter = () => {
  // brands data structure
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" },
  ];
  const [searchedItem, setSearchedItem] = useState([...brands1]);

  const searchHandler = (e) => {
    let query = e.target.value;
    let searchedItem = brands1.filter((item) => item.brandName.includes(query));
    setSearchedItem([...searchedItem]);
  };
  return (
    <Container>
      <Stack maxWidth={"20rem"}>
        <Typography variant="h3">Brand Filter</Typography>
        <TextField
          placeholder="Enter A Brand Name"
          label="Search Brand name"
          variant="standard"
          onChange={(e) => searchHandler(e)}
        />
        <FormControl>
          {searchedItem.map((item) => {
            return (
              <FormControlLabel
                label={item.brandName}
                control={<Checkbox value={item.brandName} />}
              />
            );
          })}
        </FormControl>
      </Stack>
    </Container>
  );
};

export default BrandFilter;
