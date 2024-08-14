import { Link2 } from 'components/Link';
import { StoryContainer } from '../../../.storybook/StoryContainer';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link2 href="https://hamishw.com">Primary link</Link2>
    <Link2 secondary href="https://hamishw.com">
      Secondary link
    </Link2>
  </StoryContainer>
);
