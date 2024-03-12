import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonType } from './Button.types';

const buttonText = 'AÑADIR';

describe('Button', () => {
  it('should render component successfully', () => {
    const dataTestId = 'button';
    render(
      <Button dataTestId={dataTestId} onClick={jest.fn()}>
        {buttonText}
      </Button>,
    );

    expect(screen.getByTestId(dataTestId)).toBeVisible();
  });

  it('should render with correct text', () => {
    render(<Button onClick={jest.fn()}>{buttonText}</Button>);

    expect(screen.getByText(buttonText)).toBeVisible();
  });

  it('should call function on click', () => {
    const handleOnClick = jest.fn();
    render(<Button onClick={handleOnClick}>{buttonText}</Button>);

    userEvent.click(screen.getByText(buttonText));

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });

  it(`should render with button type "${ButtonType.Button}" by default`, () => {
    render(<Button onClick={jest.fn()}>{buttonText}</Button>);

    const buttonElement = screen.getByText(buttonText) as HTMLButtonElement;

    expect(buttonElement.type).toBe(ButtonType.Button);
  });

  it.each([ButtonType.Button, ButtonType.Reset, ButtonType.Submit])(
    'should render with button type "%s"',
    (type) => {
      render(
        <Button type={type} onClick={jest.fn()}>
          {buttonText}
        </Button>,
      );

      const buttonElement = screen.getByText(buttonText) as HTMLButtonElement;

      expect(buttonElement.type).toBe(type);
    },
  );
});
