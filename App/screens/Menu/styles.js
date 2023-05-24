import { StyleSheet } from 'react-native';
import { CIANO } from '../../constants/colors';

export const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: CIANO,
    paddingTop: 30,
    paddingBottom: 30,
  },
  body: {
    height: 450
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideMenuProfileIcon: {
    borderColor: 'white',
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    alignItems: 'center',
  },
  menuItemsView: {
    padding: 10,
    flex: 2,
  },
  menuItem: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderStyle: 'solid',
    fontColor: 'white',
    borderRadius: 0
  },
  menuItemText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  },
  menuLogoutButton: {
    borderWidth: 3,
    borderRadius: 16,
    borderColor: 'white',
    borderStyle: 'solid',
    padding: 10,
    width: '75%',
    fontColor: 'white',
    alignSelf: 'center'
  },
  menuLogoutText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
});
