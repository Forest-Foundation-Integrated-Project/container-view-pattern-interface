import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Align the modal to the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
    marginTop: 30
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  }
});
