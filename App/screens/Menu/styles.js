import { StyleSheet } from 'react-native';
import { CIANO } from '../../constants/colors';

export const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: CIANO,
    paddingBottom: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: '5%'
  },
  body: {
    height: 500
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 25
  },
  imageView: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 110,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 110,
    height: 110,
    borderRadius: 110,
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
    width: '70%',
    fontColor: 'white',
    alignSelf: 'center'
  },
  menuLogoutText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  userName: {
    paddingTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  userRole: {
    color: 'white',
  }
});
