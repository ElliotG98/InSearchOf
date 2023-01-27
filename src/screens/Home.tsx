import {
  LIstingActionHeader,
  ListingVerticalScrollContainer,
} from '@containers/Listing';
import {SafeAreaView} from 'react-native';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <LIstingActionHeader />
      <ListingVerticalScrollContainer />
    </SafeAreaView>
  );
};
