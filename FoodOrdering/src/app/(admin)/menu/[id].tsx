import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@/assets/data/products';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import { useState } from 'react';
import Button from '@/src/components/Button';
import { useCart } from '@/src/providers/CartProvider';
import { PizzaSize } from '@/src/types';


const size: PizzaSize[] = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();

    const { addItem } = useCart();

    const router = useRouter();

    const [selectedSize, setSelectedSize] = useState<PizzaSize>('M');

    const product = products.find((p) => p.id.toString() == id);

    const addToCart = () => {
        console.warn('Adding to cart, size:', selectedSize);
        if(!product){
            return;
        }
        addItem(product, selectedSize);
        router.push('/cart')
    }

    if (!product) {
        return <Text>Product not found</Text>
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: product?.name }} />
            <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />

           
            
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>Rs.{product.price}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 15,
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
       
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
       
    },
   

});

export default ProductDetailsScreen