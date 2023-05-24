import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { MenuIcon } from './components/MenuIcon'
import { BackButtom } from './components/BackButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CIANO } from './constants/colors'

export const headerNavigationOptions = ({ navigation }) => ({
  backgroundColor: CIANO,
  headerLeft: BackButtom,
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Ionicons name="menu-outline" size={40} color="white" />
    </TouchableOpacity>
  ),
  drawerPosition: "right",
  drawerStyle: {
    width: '75%',
    marginTop: '21%',
  },
  overlayColor: 'rgba(0, 0, 0, 0)',
  headerStyle: {
    backgroundColor: CIANO
  },
  headerTintColor: '#fff',
  logoTitle: {
    maxWidth: 110,
    maxHeight: 30
  },
  headerRightContainer: {
    alignItems: 'center',
    paddingRight: 10,
    width: "50%",
    flex: 2,
    justifyContent: "flex-end"
  },
});
