import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';
import { SelectOption } from './Select.types';

const options: SelectOption[] = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4' },
];

describe('Select', () => {
  it('should render select correctly', () => {
    const dataTestId = 'select-component';

    render(
      <Select
        options={options}
        value={options[0].value}
        onChange={jest.fn()}
        dataTestId={dataTestId}
      />,
    );

    expect(screen.getByTestId(dataTestId)).toBeVisible();
  });

  it('should render select options correctly', () => {
    render(<Select options={options} value={options[0].value} onChange={jest.fn()} />);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeVisible();
    });
  });

  it('should render correct selected value', () => {
    const value = options[1].value;
    render(<Select options={options} value={value} onChange={jest.fn()} />);

    expect(screen.getByRole('combobox')).toHaveValue(value);
  });

  it('should call "onChange" handler when an option is selected', () => {
    const handleOnChange = jest.fn();
    const value = options[2].value;

    render(<Select options={options} value={value} onChange={handleOnChange} />);

    userEvent.selectOptions(screen.getByRole('combobox'), value);

    expect(handleOnChange).toHaveBeenCalledWith(value);
  });

  it('should return "undefined" when no value present', () => {
    const label = options[3].label; // undefined value
    const handleOnChange = jest.fn();

    render(<Select options={options} value={undefined} onChange={handleOnChange} />);

    userEvent.selectOptions(screen.getByRole('combobox'), label);

    expect(handleOnChange).toHaveBeenCalledWith(undefined);
  });
});
