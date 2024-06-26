import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, Pressable, Image } from 'react-native';
import { Product } from '../types';
import { Link, useSegments } from 'expo-router';

export const defaultPizzaImage =
  'https://img.freepik.com/free-psd/regina-style-pizza-isolated-transparent-background_191095-28007.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716076800&semt=ais_user';

type ProductListItemProps = {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  console.log(product)
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
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
