import css from './temp.module.css';
import { Button, Text } from 'src/features/ui';
import { Header } from 'src/features/webpage';

function Root() {
  return (
    <div className={css['container']}>
      <Header/>
      
      <Text>IMAGINE A PLACE</Text>
      <Text>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</Text>
      <Button colorScheme={1} fontSize={2}>Open Discord in your browser</Button>
    </div>
  );
}

export default Root;