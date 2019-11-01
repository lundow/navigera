import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import ProductListItem from "./ProductListItem.js"
import ProductListFooter from "./ProductListFooter.js"
import { globalStyles } from '../utilities.js';
import { Icon } from "@up-shared/components";

export default class ProductList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const products = this.props.screenProps.products;
    let quantity = 0;
    let totalPrice = 0;
    products.map((item) => {
      quantity += item.amount;
      totalPrice += item.availability.price * item.amount;
    });

    return(
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, globalStyles.bold]}> My items </Text>
        <TouchableHighlight style={styles.button}>
            <Icon name="three-dots" size={30} color="white"></Icon>
        </TouchableHighlight>
      </View>
        <ScrollView style={[styles.container, styles.padding]}>
          {this.props.screenProps.products.map(p => {
            return <ProductListItem product={p} removeCallback={this.props.screenProps.removeItemCallback} key={p.product_info.id}/>
          })}
        </ScrollView>
        <ProductListFooter price={totalPrice} quantity={quantity}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
	button: {
    color:"white"
  },

  container:{
    flex: 1,
    backgroundColor:"#f4f4f4"
  },

  padding:{
    padding: 20,
  },

  image:{
    width: 300,
    height: 300
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#0058a3',
    height: 70,
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 15,
  },
  button: {
      backgroundColor: '#0058a3',
      height: 25,
      width: 50,
      paddingBottom: 20,
      paddingTop: 10,
      paddingRight: 80,
      margin: 25,
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonInterior: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 45,


  },
});
