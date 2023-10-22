import Select from 'react-select';

export function CustomSelect({ options, name, placeholder, onChange }) {
  return (
    <div>
      <Select
        unstyled
        options={options}
        onChange={onChange}
        isSearchable
        placeholder={placeholder}
        name={name}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
}
