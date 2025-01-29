import styled from 'styled-components';
import defaultTheme from "../../themes/defaultTheme";

const StyledAlert = styled.div`
  display: block;
  padding: 0.75rem 1.25rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25em;

  ${({ theme, variant }) => {
    const alertTheme = {
      ...defaultTheme?.alert?.variant,
      ...theme?.alert?.variant,
    };
    const { color, borderColor, backgroundColor } = alertTheme[variant];

    return `
      color: ${color};
      background-color: ${backgroundColor};
      border-color: ${borderColor};
    `;
  }}
`;

StyledAlert.defaultProps = {
  variant: "primary",
  theme: defaultTheme,
};


export { StyledAlert };