import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '../types';

export const defaultPizzaImage = 
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/defalut.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  console.log(product)
  return (
    <View style={styles.container}>

      <Image source={{ uri: product.image || defaultPizzaImage}} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Rs.{product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding: 15,
    borderRadius:20,
  },
  image:{
    width: '100%',
    aspectRatio:1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
 
  price:{
    fontSize:14,
    fontWeight:'400',
    color: Colors.light.tint,
  },

  
});
