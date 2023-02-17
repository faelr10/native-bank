import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  modalAll: {
    width: "80%",
    height: 250,
    backgroundColor: "black",
    alignItems: "center",
    position: "relative",
    top: 280,
    left: "10%",
    opacity: 0.6,
    borderRadius: 50,
  },
  confirmationTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    top: 25,
    position: "relative",
  },
  boxInput: {
    marginBottom: 50,
    width: 250,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingHorizontal: 10,
    top: 80,
    position: "relative",
    alignItems: "center",
  },
  inputText: {
    textAlign: "center",
    width: "100%",
  },
  ButtonCalculator: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 14,
    top: 55,
  },
  textButtonCalculator: {
    fontSize: 17,
    fontWeight:"bold"
},
});

export default styles;
