import {Listing} from 'components';
import {ScrollView} from 'react-native';

const listingData = [
  {
    icon: 'camera',
    title: 'Red Jumper',
    description: 'I want to look like santa clause',
  },
  {
    icon: 'bird',
    title: 'A bird shirt',
    description: 'Looking for a blue bird shirt',
  },
  {
    icon: 'album',
    title: 'Music Clothing',
    description: 'Music themed clothing',
  },
];

export const ListingVerticalScrollContainer = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 25,
      }}>
      {listingData.map((listing, i) => (
        <Listing key={`listing-scroll-view-listing-${i}`} {...listing} />
      ))}
    </ScrollView>
  );
};
