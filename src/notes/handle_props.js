// import Module 
import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
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
            <View style={styles.root}>
                {/* <Text style={styles.title}>Shopping List</Text>
                <Text style={styles.subTittle}>by Vedrian</Text>
                <View style={styles.list}>
                    <Text style={styles.text}>Body Lotion SPF 30</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>Facial Wash</Text>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>Shoes</Text>
                </View> */}
                <Header title="Shopping List" subtittle="by Vedrian"/>
                <List item="shoes"/>
                <List item="body lotion"/>
            </View>
        );
    }
}

//handle props?
function Header (props) {
    return (
       <View>
           <Text style={styles.title}>{props.title}</Text>
           <Text style={styles.subTittle}>{props.subtittle}</Text>
       </View> 
    )
}

function List (props) {
    return (
        <View style={styles.list}>
            <Text style={styles.item}>{props.item}</Text>
        </View>
    )
}

// PROPS CHILDREN

// styleSheet styling
const styles = StyleSheet.create({
    root : {
        padding : 20
    },
    title : {
        fontSize : 32,
        fontWeight : "bold",
        marginBottom : 10
    },
    subTittle : {
        fontSize : 20,
        marginBottom : 15
    },
    list : {
        padding : 10,
        marginTop : 5,
        marginBottom : 5,
        backgroundColor : "pink",
        borderRadius : 5
    },
    item : {
        fontSize : 14
    }
})

//direact gabisa baca div kalo di reactJS pakai div
//export componentnya

export default App;