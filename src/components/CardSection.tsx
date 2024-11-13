import styled from '@emotion/styled';
import { Typography, useTheme } from '@mui/material';
import {
  Group,
  CompareArrows,
  Map,
  MyLocation,
  Flag,
  LocationOn,
} from '@mui/icons-material';
import { ElevatedCard } from '@/components/ElevatedCard';
import { CardDataProps } from '@/interfaces/CardInterface';

const cardData: CardDataProps[] = [
  {
    icon: <Flag fontSize='large' />,
    title: 'Kill Windows/Conditions',
    description: 'Identify key moments to secure kills effectively.',
  },
  {
    icon: <LocationOn fontSize='large' />,
    title: 'Personal Positioning',
    description: 'Position yourself strategically for maximum impact.',
  },
  {
    icon: <MyLocation fontSize='large' />,
    title: 'Kill targets',
    description: 'Identifying the best kill targets each game.',
  },
  {
    icon: <Group fontSize='large' />,
    title: 'Team Setups',
    description: 'Coordinating with your team to setup potential kills.',
  },
  {
    icon: <Map fontSize='large' />,
    title: 'Positioning as a Team',
    description: 'Coordinate team positioning for control and support.',
  },
  {
    icon: <CompareArrows fontSize='large' />,
    title: 'When to Play Agressive',
    description:
      'Know when to push or hold back in arena by identifying key moments.',
  },
];

export const CardSection: React.FC = () => {
  const StyledSection = styled('section')`
    @media (max-width: 1000px) {
      margin-top: 10rem;
    }
  `;

  const theme = useTheme();

  const StyledHeader = styled(Typography)`
    font-weight: bold;
    margin: 2rem 0;
    color: ${theme.palette.text.primary};
  `;

  const CardGrid = styled('div')`
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;
    justify-items: center;
    padding-bottom: 2rem;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, minmax(20rem, 1fr));
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(2, minmax(20rem, 1fr));
    }

    @media (max-width: 750px) {
      grid-template-columns: minmax(20rem, 1fr);
    }
  `;

  return (
    <StyledSection id='what-we-offer'>
      <StyledHeader variant='h4' align='center'>
        What We Offer
      </StyledHeader>
      <CardGrid>
        {cardData.length > 0 &&
          cardData.map((card: CardDataProps) => (
            <ElevatedCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
      </CardGrid>
    </StyledSection>
  );
};
