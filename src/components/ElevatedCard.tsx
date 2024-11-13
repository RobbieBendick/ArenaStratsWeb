import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Card, Typography, CardContent, Icon } from '@mui/material';
import { CardDataProps } from '@/interfaces/CardInterface';

export const ElevatedCard: React.FC<CardDataProps> = ({
  title,
  description,
  icon,
}) => {
  const theme = useTheme();
  const StyledCard = styled(Card)`
    position: relative;
    width: 21rem;
    height: 17rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  `;

  const IconContainer = styled('div')`
    margin-top: auto;
    border-radius: 20%;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.8rem;
    background-color: ${theme.palette.background.secondary};
  `;

  const CardTitle = styled(Typography)`
    font-weight: bold;
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
  `;

  return (
    <StyledCard theme={theme}>
      <CardContent>
        <IconContainer theme={theme}>
          <Icon style={{ width: 'unset', height: 'unset', display: 'flex' }}>
            {icon}
          </Icon>
        </IconContainer>
        <CardTitle variant='h6'>{title}</CardTitle>
        <Typography sx={{ fontSize: '1.1rem' }} variant='body2'>
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};
