import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type InputBoxProps = {
  title?: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const InputBox = ({
  title,
  placeholder,
  value,
  setValue,
  leftIcon,
  rightIcon,
}: InputBoxProps) => {
  const [active, setActive] = useState<Boolean>(false);

  return (
    <View style={styles.formControlBox}>
      <Text style={styles.formLabel}>{title}</Text>
      <View
        style={[
          styles.formInputBox,
          {
            borderWidth: active ? 2 : 1,
            borderColor: active ? '#cfcfcf' : '#dedede',
          },
        ]}>
        {leftIcon}
        <TextInput
          placeholder={placeholder}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          value={value}
          onChangeText={text => setValue(text)}
          style={{flex: 1, marginLeft: 5}}
        />
        {rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControlBox: {
    width: '100%',
  },
  formLabel: {
    marginVertical: 3,
  },
  formInputBox: {
    borderRadius: 5,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default InputBox;
