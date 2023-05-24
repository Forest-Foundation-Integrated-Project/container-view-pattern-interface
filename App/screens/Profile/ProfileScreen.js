import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { styles } from './../../generalStyles';
import { useEffect } from 'react';
import { EditButtom } from '../../components/EditButton';
import { BackButtom } from '../../components/BackButton';

export default function ProfileScreen({ navigation, route }) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: BackButtom
    })
  }, [navigation])

  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  );
};
