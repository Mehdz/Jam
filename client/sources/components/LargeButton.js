import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

function LargeButton({children, onPress, mode, icon, color, dark, disabled}) {
  return (
    <Button
      contentStyle={styles.btn}
      style={{marginTop: 20}}
      mode={mode}
      icon={icon}
      color={color}
      dark={dark}
      disabled={disabled}
      onPress={onPress}>
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  btn : {
    padding: 10,
  }
});

LargeButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.any,
  mode: PropTypes.string.isRequired,
  icon : PropTypes.string,
  color: PropTypes.string,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default LargeButton;