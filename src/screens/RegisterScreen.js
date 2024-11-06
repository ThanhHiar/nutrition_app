import React from "react";
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<TouchableOpacity>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={styles.buttonImage}
						/>
					</TouchableOpacity>
					<Text style={styles.text}>
						{"Đăng ký"}
					</Text>
				</View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text2}>
						{"Email"}
					</Text>
				</TouchableOpacity>
				<View style={styles.view}>
					<Text style={styles.text3}>
						{"Mật khẩu"}
					</Text>
				</View>
				<TouchableOpacity style={styles.button2}>
					<Text style={styles.text4}>
						{"Đăng kí"}
					</Text>
				</TouchableOpacity>
				<Text style={styles.text5}>
					{"Hoặc"}
				</Text>
				<TouchableOpacity style={styles.buttonRow}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Text style={styles.text6}>
						{"Tiếp tục bằng Facebook"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonRow2}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text7}>
						{"Tiếp tục bằng Google"}
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
		backgroundColor: "#FFFFFF",
		borderColor: "#000000",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 24,
		paddingHorizontal: 38,
		marginBottom: 25,
		marginHorizontal: 22,
	},
	button2: {
		alignItems: "center",
		backgroundColor: "#1FE494",
		borderRadius: 100,
		paddingVertical: 16,
		marginBottom: 28,
		marginHorizontal: 22,
	},
	buttonImage: {
		width: 40,
		height: 34,
		marginRight: 9,
	},
	buttonRow: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#4067B1",
		borderRadius: 100,
		paddingVertical: 8,
		paddingHorizontal: 28,
		marginBottom: 36,
		marginHorizontal: 22,
	},
	buttonRow2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 100,
		borderWidth: 1,
		paddingVertical: 8,
		paddingHorizontal: 28,
		marginHorizontal: 22,
	},
	image: {
		width: 34,
		height: 34,
		marginRight: 29,
	},
	image2: {
		width: 34,
		height: 34,
		marginRight: 39,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F6F6",
		paddingVertical: 13,
		paddingHorizontal: 6,
		marginBottom: 88,
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderColor: "#00000080",
		borderWidth: 1,
	},
	text: {
		color: "#000000",
		fontSize: 24,
		flex: 1,
	},
	text2: {
		color: "#000000",
		fontSize: 15,
	},
	text3: {
		color: "#000000",
		fontSize: 15,
		marginRight: 4,
		flex: 1,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
	},
	text5: {
		color: "#242424",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 25,
		marginLeft: 178,
	},
	text6: {
		color: "#FFFFFF",
		fontSize: 15,
		fontWeight: "bold",
		flex: 1,
	},
	text7: {
		color: "#242424",
		fontSize: 15,
		fontWeight: "bold",
		flex: 1,
	},
	view: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#000000",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 23,
		paddingHorizontal: 36,
		marginBottom: 25,
		marginHorizontal: 22,
	},
});