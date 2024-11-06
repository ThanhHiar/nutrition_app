import React from "react";
import { SafeAreaView, View, ScrollView, TouchableOpacity, Image, Text, TextInput, StyleSheet, } from "react-native";
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
					<View style={styles.box}>
					</View>
					<View style={styles.box}>
					</View>
				</View>
				<Text style={styles.text2}>
					{"Vui lòng chọn giới tính mà chúng tôi sẽ sử dụng để tính toán nhu cầu calo của bạn:"}
				</Text>
				<View style={styles.row3}>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.text3}>
							{"Nam"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button2}>
						<Text style={styles.text3}>
							{"Nữ"}
						</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.text4}>
					{"Bạn bao nhiêu tuổi?"}
				</Text>
				<TextInput
					value={""}
					placeholder={"Tuổi"}
					style={styles.input}
				/>
				<Text style={styles.text5}>
					{"Bạn cao bao nhiêu?"}
				</Text>
				<ScrollView 
					horizontal style={styles.scrollView2}>
					<Text style={styles.text6}>
						{"Chiều cao"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</ScrollView>
				<Text style={styles.text5}>
					{"Bạn nặng bao nhiêu?"}
				</Text>
				<ScrollView 
					horizontal style={styles.scrollView3}>
					<Text style={styles.text6}>
						{"Cân nặng"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
				</ScrollView>
				<View style={styles.view}>
					<Text style={styles.text7}>
						{"Tiếp tục"}
					</Text>
				</View>
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
	button: {
		width: 172,
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		borderWidth: 1,
		paddingVertical: 19,
	},
	button2: {
		width: 172,
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10,
		borderWidth: 1,
		paddingVertical: 19,
	},
	buttonImage: {
		width: 30,
		height: 25,
		marginRight: 18,
	},
	image: {
		width: 20,
		height: 20,
	},
	input: {
		color: "#000000",
		fontSize: 16,
		marginBottom: 23,
		marginHorizontal: 21,
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 17,
		paddingHorizontal: 27,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F6F6F6",
		paddingVertical: 17,
		paddingHorizontal: 10,
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
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 32,
		marginHorizontal: 22,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderColor: "#00000080",
		borderWidth: 1,
	},
	scrollView2: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 27,
		marginBottom: 23,
		marginHorizontal: 21,
	},
	scrollView3: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 27,
		marginBottom: 208,
		marginHorizontal: 21,
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
		marginBottom: 34,
		marginHorizontal: 23,
		width: 342,
	},
	text3: {
		color: "#000000",
		fontSize: 16,
	},
	text4: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 21,
		marginLeft: 23,
	},
	text5: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 20,
		marginLeft: 23,
	},
	text6: {
		color: "#000000",
		fontSize: 16,
		marginRight: 4,
		flex: 1,
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
	view: {
		alignItems: "center",
		backgroundColor: "#07FF9A",
		borderRadius: 100,
		paddingVertical: 18,
		marginHorizontal: 22,
	},
});