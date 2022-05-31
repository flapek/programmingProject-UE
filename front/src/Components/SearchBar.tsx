import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React from 'react';
import mockedProducts from '../Data/mockedProducts';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<{ name: string }[]>([]);
  // const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions(
          mockedProducts.map((product) => ({
            name: product.Name,
          })),
        );
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="search-bar"
      sx={{ width: '80%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      // value={value}
      // onChange={(event, newValue: string | null) => {
      //   setValue(newValue);
      // }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      multiple
      autoHighlight
      freeSolo
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.name
      }
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="What you want to find"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

const products = [
  { name: 'Asus ZenBook' },
  { name: 'Lenovo Yoga' },
  { name: 'Lenovo IdeaPad' },
  { name: 'Lenovo ThinkPad' },
  { name: 'Lenovo Legion' },
  { name: 'HP Envy' },
  { name: 'HP Spectre' },
  { name: 'Dell G Series' },
];
