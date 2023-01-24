import {Avatar, Card, Text} from 'react-native-paper';
import {Listing as ListingProps} from 'types';

interface AvatarIconProps {
  size: number;
}

export const Listing = ({icon, title, description}: ListingProps) => {
  const AvatarIcon = (props: AvatarIconProps) => (
    <Avatar.Icon {...props} icon={icon} />
  );

  return (
    <Card style={{marginVertical: 5}}>
      <Card.Title title={title} left={AvatarIcon} />
      <Card.Content>
        <Text variant="bodyMedium">{description}</Text>
      </Card.Content>
    </Card>
  );
};
