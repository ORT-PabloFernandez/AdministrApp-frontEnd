import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const AvatarUser = () => (
  <Image source={require('../assets/user_avatar.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 12,
    marginTop: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(AvatarUser);