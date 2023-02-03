import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    boxInput: {
        marginBottom: 50,
        width: 270,
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "black",
        paddingHorizontal: 10,
    },
    inputText: {
        textAlign: "center",
        width: "100%",
    },
    ButtonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        backgroundColor: "black",
        paddingTop: 10,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 15,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    boxGeral: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "auto",
        paddingTop: 20
    },
    messageError: {
        backgroundColor: "#ff6961",
        top: -265,
        width: "70%",
        borderRadius: 12,
        height: 40,
        fontSize: 18,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.8
    },
});

export default styles