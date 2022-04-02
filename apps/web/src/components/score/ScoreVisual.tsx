import ScoreProfile from './ScoreProfile';
import ScoreInfo from './ScoreInfo';
import { UserScore } from 'types/Score';
import { User } from 'types/User';
import { Text, Image, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ScoreColored from './ScoreColored';
import ScoreColoredMobile from './ScoreColoredMobile';
import { SSeraphiniStyled, TicketBoxStyled, TicketStyled } from './ScoreStyle';

type Props = {
  size?: number;
  user?: User;
  userScore: UserScore;
};

/**
 * @todo replace `cssProps` config object by actual css
 * (suggestion: use emotion, already present in the project)
 */
export default function ScoreVisual({ user, userScore }: Props) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ticketElement, setTicketElement] = useState(<ScoreColored />);

  useEffect(() => {
    if (isLargerThan768) {
      setTicketElement(<ScoreColored />);
    } else {
      setTicketElement(<ScoreColoredMobile />);
    }
  }, [isLargerThan768]);

  return (
    <TicketStyled>
      <TicketBoxStyled>{ticketElement}</TicketBoxStyled>
      <ScoreProfile user={user} />
      <ScoreInfo userScore={userScore} />
      <SSeraphiniStyled>
        <Image
          h={'40px'}
          border={'2px solid gray'}
          rounded={'full'}
          src={`https://pbs.twimg.com/profile_images/1494329046678659072/RprvW5s4.jpg`}
          alt={'sseraphini'}
        />
        <Text fontSize="xl" ml="3" fontWeight="bold">
          cc @sseraphini
        </Text>
      </SSeraphiniStyled>
    </TicketStyled>
  );
}
