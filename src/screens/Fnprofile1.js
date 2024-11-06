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
						{"Hoàn thành hồ sơ"}
					</Text>
				</View>
				<View style={styles.row2}>
					<View style={styles.box}>
					</View>
					<View style={styles.box2}>
					</View>
					<View style={styles.box2}>
					</View>
				</View>
				<Text style={styles.text2}>
					{"Để bắt đầu với các mục tiêu"}
				</Text>
				<Text style={styles.text3}>
					{"Chọn mục tiêu quan trọng đối với bạn, bao gồm một mục tiêu về cân nặng."}
				</Text>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text4}>
						{"Giảm cân"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}>
					<Text style={styles.text4}>
						{"Duy trì cân nặng"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button3}>
					<Text style={styles.text4}>
						{"Tăng cân"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button4}>
					<Text style={styles.text5}>
						{"Tiếp tục"}
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
	box: {
		width: 110,
		height: 3,
		backgroundColor: "#0066EE",
	},
	box2: {
		width: 110,
		height: 3,
		backgroundColor: "#0000004D",
	},
	button: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 28,
		marginBottom: 10,
		marginHorizontal: 22,
	},
	button2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 29,
		marginBottom: 10,
		marginHorizontal: 22,
	},
	button3: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 18,
		paddingHorizontal: 27,
		marginBottom: 395,
		marginHorizontal: 21,
	},
	button4: {
		alignItems: "center",
		backgroundColor: "#07FF9A",
		borderRadius: 100,
		paddingVertical: 18,
		marginHorizontal: 22,
	},
	buttonImage: {
		width: 30,
		height: 25,
		marginRight: 21,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F6F6",
		paddingVertical: 17,
		paddingHorizontal: 8,
		marginBottom: 33,
		shadowColor: "#0000001A",
		shadowOpacity: 0.1,
		shadowOffset: {
		    width: 0,
		    height: 4
		},
		shadowRadius: 4,
		elevation: 4,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 28,
		marginHorizontal: 25,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderColor: "#00000080",
		borderWidth: 1,
	},
	text: {
		color: "#000000",
		fontSize: 22,
		flex: 1,
	},
	text2: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 14,
		marginLeft: 24,
	},
	text3: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 34,
		marginHorizontal: 24,
		width: 340,
	},
	text4: {
		color: "#000000",
		fontSize: 16,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
});