import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    boxBalance: {
        width: "100%",
        height: "15%",
        color: "black",
        alignItems: "flex-start",
        justifyContent:"center",
    },
    titleBalance: {
        paddingLeft: 30,
        fontSize: 21
    },
    boxValueBalance: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    valueBalance: {
        paddingLeft: 30,
        paddingTop: 5,
        fontSize: 25,
        fontWeight: "bold",
    },
    iconBalance: {
        paddingRight: 30,
        fontSize:20,
        color: "#999"
    }
});

export default styles