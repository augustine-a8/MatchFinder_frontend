import AsyncStorage from '@react-native-async-storage/async-storage';

// import {KEY} from 'react-native-dotenv';

export const storeData = async (token: string) => {
  try {
    await AsyncStorage.setItem('', token);
  } catch (err) {
    console.log(err);
    throw new Error('AsyncStorage: StoreDataErr');
  }
};

export const getData = async () => {
  try {
    const token = await AsyncStorage.getItem('');
    if (token != null) {
      return token;
    }
  } catch (err) {
    console.log(err);
    throw new Error('AsyncStorage: GetDataErr');
  }
};

export const deleteData = async () => {
  try {
    await AsyncStorage.removeItem('');
  } catch (err) {
    console.log(err);
    throw new Error('AsyncStorage: DeleteDataErr');
  }
};
