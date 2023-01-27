import {Appbar} from 'react-native-paper';

export const LIstingActionHeader = () => {
  return (
    <Appbar.Header
      mode={'small'}
      style={{justifyContent: 'flex-end', height: 30}}>
      <Appbar.Action
        icon={'plus'}
        size={30}
        onPress={() => {
          console.log('here');
        }}></Appbar.Action>
    </Appbar.Header>
  );
};
