import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, Pressable, Image } from 'react-native';
import { Product } from '../types';
import { Link } from 'expo-router';

export const defaultPizzaImage =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/defalut.png';

type ProductListItemProps = {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  console.log(product)
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>

        <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image}
          resizeMode='contain' />

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>Rs.{product.price}</Text>


      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.light.tint,
  },


});
