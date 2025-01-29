import styled from "styled-components";
import defaultTheme from "../../themes/defaultTheme";

const StyledButton = styled.button.attrs(({ disabled, active }) => ({
  disabled,
  active,
}))`
  font-family: inherit;
  padding: 0.4em 0.8em;
  border: none;
  border-radius: 0.25em;
  transition: filter 0.2s ease-out, outline 0.1s linear;

  ${({ theme, variant, active }) => {
    const buttonTheme = {
      ...defaultTheme?.button?.variant,
      ...theme?.button?.variant,
    };

    const { color, backgroundColor, outlineColor } = buttonTheme[variant];

    return `
      color: ${color};
      background-color: ${backgroundColor};
      outline: ${active ? `3px solid ${outlineColor}` : null}
    `;
  }};

  ${({ theme, size }) => {
    const sizeTheme = {
      ...defaultTheme?.button?.size,
      ...theme?.button?.size,
    };

    const fontSize = sizeTheme[size];

    return `
      font-size: ${fontSize};
    `;
  }};

  &:focus {
    outline: 3px solid
      ${({ theme, variant }) => {
        const buttonTheme = {
          ...defaultTheme?.button?.variant,
          ...theme?.button?.variant,
        };

        return buttonTheme[variant]?.outlineColor;
      }};
  }

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    filter: none;
    opacity: 0.5;
  }
`;

StyledButton.defaultProps = {
  size: "md",
  variant: "primary",
  theme: defaultTheme,
  disabled: false,
  active: false,
};

export { StyledButton };
