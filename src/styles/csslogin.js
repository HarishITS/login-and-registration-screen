import { StyleSheet } from 'react-native'; 
import React, { Component } from 'react';
//Start The Css for Login.
export const styleLogin = StyleSheet.create({
    viewParent: {
        flex: 1,
        backgroundColor: "#cccccc"
    },
    viewParentLogin: {
        flex: 1,
        margin: 15,
        backgroundColor: '#FFF', 
        borderWidth: 1,
        borderColor: "#bfbfbf",
        borderRadius: 10,
    }, 
    viewParentInput: { 
        flex: 1, 
        margin: 5, 
        backgroundColor: '#FFFF',
        justifyContent: 'center',
    },
    txtLogo:{  
        alignItems: 'center',
           textAlign: 'center',
            color: '#404d5b',
        marginTop:30,
        fontSize: 35,
        fontWeight: 'bold',
        opacity: 0.8,
    }, 
    viewParentPicker:{
        
    
    },
    errorBorderColor:{
  
    }
})
  //End The Css for Login.