import { styled, useTheme } from '@mui/material';
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  const StyledFooter = styled('footer')`
    text-align: center;
    margin-block: 2rem;
    padding: 1rem 1rem 0 1rem;

    font-size: 14px;

    color: ${theme.palette.text.primary};
    background-color: ${theme.palette.background.default};

    a {
      color: #0ea47a;
      text-decoration: underline;
    }
  `;

  return (
    <StyledFooter>
      <div>by Mageiden &copy; {currentYear}</div>
      <div>
        <a href='#'>Privacy Policy</a>
      </div>
    </StyledFooter>
  );
};
