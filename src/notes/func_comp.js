// import Module 
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
//kalo react general
//buat class component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            //view mirip dengan DIV di HTML, Sekarang React Native pakainya
            //agak berbeda dengan DIV, view hanya seperti pembungkus harus ada TEXT
            //Styling inline style, butuh object kaya styling biasa
            <View style={{
                padding: 20,
                height: '100%',
                width: '100%',
                backgroundColor: 'pink'
            }}>
                <ComponentA />
                <ComponentB />
                <Hello name="vedrian"/>
            </View>
        );
    }
}

//create function component
function ComponentA() {
    return (
        <View>
            <Text>Ini Component A</Text>
        </View>
    )
}

const ComponentB = () => {
    return (
        <View>
            <Text>Ini Component B</Text>
        </View>
    )
}

// create component pakai props (input)
const Hello = (props) => {
    // props bentuknya object
    return (
        <View>
            <Text>Hello, {props.name}</Text>
        </View>
    )
}
//props bentuknya bisa macam macam



// yang kedua pakai style object pakai style sheet
const styles = StyleSheet.create({
    h1: {
        fontSize: 50,
        marginBottom: 20
    }
})

//di react gabisa baca div kalo di reactJS pakai div
//export componentnya
export default App;