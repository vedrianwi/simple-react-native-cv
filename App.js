// import Module 
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.root}>
                <Container>
                    <View style={styles.container_topOne}>
                        <Text style={styles.textName}>Vedrian Wijaya</Text>
                        <Text style={styles.textJob}>FullStack Developer || Mobile Developer</Text>
                        <Text style={styles.textLocation}>Indonesia, Jakarta</Text>
                        <Image style={styles.img} source={require('./image/clipart4455229.png')}/>
                        <View style={styles.innerContainer}>
                            <View style={styles.addres}>
                                <Text style={styles.text}>Number : +625715275152</Text>
                            </View>
                            <View style={styles.addres}>
                                <Text style={styles.text}>Email : vedrianwijayas@gmail.com</Text>
                            </View>
                            <View style={styles.addres}>
                                <Text style={styles.text}>Birthday : 13-10-1997</Text>
                            </View>
                            <View style={styles.addres}>
                                <Text style={styles.text}>Address : Jl.Kemandoran 7, Jakarta</Text>
                            </View>
                        </View>
                    </View>
                </Container>
                <Container_bottom>
                    <View style={styles.container_bottomOne}>
                        <View style={styles.innerBottom}>
                            <Text style={styles.findme}>Find Me On : </Text>
                            <Image style={styles.image} source={require('./image/pngwing.com.png')}/>
                            <Image style={styles.image2} source={require('./image/kisspng-social-media-computer-icons-youtube-twitter-5ab7139f487a27.3233020415219475512969.png')}/>
                            <Image style={styles.image2} source={require('./image/v.png')}/>
                        </View>
                    </View>
                </Container_bottom>
            </View>
        );
    }
}


function Container(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}
function Container_bottom(props) {
    return (
        <View style={styles.container_bottom}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        display: "flex",
        backgroundColor: "white",
        height: "100%",
    },
    textName : {
        marginTop : 30,
        alignSelf : "center",
        fontSize : 20,
        fontWeight : "700",
        color : "#c23616",
    },
    textJob : {
        alignSelf : "center",
        fontSize : 13,
        fontWeight : "300",
        color : "#c23616",
        marginTop : 5
    },
    textLocation : {
        alignSelf : "center",
        fontSize : 12,
        fontWeight : "300",
        color : "#c23616",
    },
    text : {
        marginTop : 13,
        color : "#f5f6fa",
        fontSize : 14,
        alignSelf : "center",
        fontWeight : "bold"
    },
    img : {
        width : 85,
        height : 100,
        alignSelf : "center",
        marginTop : 60,

    },
    innerContainer : {
        // backgroundColor : "lightblue",
        display : "flex",
        flexBasis : "50%",
        flexDirection : "column",
        justifyContent : "space-evenly"
    },
    addres : {
        marginTop : 30,
        backgroundColor : "#c23616",
        marginLeft :60,
        marginRight :60,
        height : 50,
        borderRadius : 20
    },
    container: {
        backgroundColor: "#EE5A24",
        width: "100%",
        flexBasis: "80%",
        position: "relative",
        zIndex: -1
    },
    container_bottom: {
        backgroundColor: "#ffeaa7",
        width: "100%",
        flexBasis: "30%",
        position: "relative",
        zIndex: -1
    },
    container_bottomOne: {
        backgroundColor: "#EE5A24",
        height: "100%",
        width: "100%",
        borderTopLeftRadius:60,
    },
    innerBottom : {
        display : "flex",
        flexDirection : "row"
    },
    container_topOne: {
        backgroundColor: "#ffeaa7",
        height: "100%",
        width: "100%",
        borderBottomRightRadius : 60,
        display : "flex"
    },
    findme : {
        color : "#f5f6fa",
        fontSize : 20,
        marginLeft : 50,
        marginTop : 60,
        fontWeight : "bold"
    },
    image : {
        // backgroundColor : "white"
        marginTop : 65,
        marginLeft : 15,
        width : 20,
        height : 20
    },
    image2 : {
        // backgroundColor : "white"
        marginTop : 65,
        marginLeft : 15,
        width : 30,
        height : 25
    }
})


export default App;