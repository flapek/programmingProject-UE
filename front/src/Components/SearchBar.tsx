import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import mockedProducts from '../Data/mockedProducts';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function SearchBar({
  search,
}: {
  search: (
    value: (
      | string
      | {
          name: string;
        }
    )[],
  ) => void;
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<{ name: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
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
            name: product.name,
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
      onChange={(_, value) => {
        search(value);
      }}
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
