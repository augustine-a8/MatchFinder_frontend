import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import {Back} from '../components/Icons';
import {Button} from '../components';
import {CustomInput} from './EmailVerification';

type CustomProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

// function CustomInput({value, setValue}: CustomProps) {
//   const [active, setActive] = useState<Boolean>(false);
//   return (
//     <View>
//       <TextInput
//         maxLength={1}
//         style={[
//           styles.customInputBox,
//           {
//             borderWidth: active ? 2 : 1,
//             borderColor: active ? '#cfcfcf' : '#dedede',
//           },
//         ]}
//         value={value}
//         onChangeText={setValue}
//         onFocus={() => setActive(true)}
//         onBlur={() => setActive(false)}
//       />
//     </View>
//   );
// }

export default function ForgotPasswordVerification() {
  const [boxOne, setBoxOne] = useState('');
  const [boxTwo, setBoxTwo] = useState('');
  const [boxThree, setBoxThree] = useState('');
  const [boxFour, setBoxFour] = useState('');
  const [boxFive, setBoxFive] = useState('');
  const [boxSix, setBoxSix] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Back onPress={() => console.log('Go Back')} />
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 15}}>
          Input code sent to your email address
        </Text>
      </View>
      <View style={styles.customInputBoxStack}>
        <CustomInput value={boxOne} setValue={setBoxOne} />
        <CustomInput value={boxTwo} setValue={setBoxTwo} />
        <CustomInput value={boxThree} setValue={setBoxThree} />
        <CustomInput value={boxFour} setValue={setBoxFour} />
        <CustomInput value={boxFive} setValue={setBoxFive} />
        <CustomInput value={boxSix} setValue={setBoxSix} />
      </View>
      <Pressable
        style={{marginTop: 10}}
        onPress={() => {
          console.log('Resend Code');
        }}>
        <Text style={{textAlign: 'right', fontSize: 15, fontWeight: '500'}}>
          Resend Code
        </Text>
      </Pressable>
      <Button
        title="Submit"
        onPressHandler={() => {
          console.log('Forgot Password Verification Code Submit');
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  customInputBox: {
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
    height: '100%',
    fontSize: 18,
    textAlign: 'center',
  },
  customInputBoxStack: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 20,
  },
});
