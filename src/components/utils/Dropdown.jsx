import React from 'react';
import Select from 'react-select';

const Dropdown = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='mt-1'>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        className="basic-single text-sm"
        placeholder="Eg. 4"
        styles={{
          control: (styles, state) => {
            state.theme.colors.primary = "blue";
            return {
              ...styles,
              "&:hover": {
                borderColor: "none",
              },
            };
          },
        }}
      />
    </div>
  );
};

export default Dropdown;

