// import Module 
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
//kalo react general
//buat class component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            //view mirip dengan DIV di HTML, Sekarang React Native pakainya
            //agak berbeda dengan DIV, view hanya seperti pembungkus harus ada TEXT
            //Styling inline style, butuh object kaya styling biasa
            <View style={{padding : 20,
                height : '100%',
                width : '100%',
                backgroundColor : 'pink'}}>
                   
                <Text style={styles.h1}>Hello React</Text>
                <Text>My Name is vedrian, i'm a mobile developer</Text>
            </View>
        );
    }
}

//create function component

// yang kedua pakai style object pakai style sheet
const styles = StyleSheet.create({
    h1 : {
        fontSize : 50,
        marginBottom : 20
    }
})

//di react gabisa baca div kalo di reactJS pakai div
//export componentnya
// export default App;