import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: Colors.primary,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'mon-b',
  },
  btnIcon: {
    position: 'absolute',
    left: 16,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  footer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  seperatorView: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginVertical: 28,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  searchContainer: {
    backgroundColor: '#fff',
    height: 128,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    }
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 12,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  searchBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderColor: '#c2c2c2',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    padding: 12,
    borderRadius: 32,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  categoryText: {
    fontSize: 12,
    fontFamily: 'mon-sb',
    color: Colors.grey
  },
  categoryTextActive: {
    fontSize: 12,
    fontFamily: 'mon-sb',
    color: '#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  listing: {
    padding: 16,
    gap: 4,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  pageImage: {
    width: '100%',
    height: 300,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: '#fff'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'mon-sb',
  },
  location: {
    fontSize: 16,
    marginTop: 12,
    fontFamily: 'mon-sb',
  },
  rooms: {
    fontSize: 16,
    color: Colors.grey,
    marginVertical: 4,
    fontFamily: 'mon-sb',
  },
  ratings: {
    fontSize: 16,
    fontFamily: 'mon-sb,'
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 16,
  },
  host: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: Colors.grey,
  },
  hostView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  description: {
    fontSize: 16,
    marginTop: 12,
    fontFamily: 'mon',
  },
  footerText: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerPrice: {
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.primary,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  header: {
    backgroundColor: '#fff',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
  },
});
