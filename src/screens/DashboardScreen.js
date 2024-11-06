import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet, } from "react-native";

const DashboardScreen = () => {
	return (
	<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<Text style={styles.text}>
					{"Tên APP"}
				</Text>
				<Text style={styles.text2}>
					{"abcxyz abc abca bcxyz abc abc!"}
				</Text>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text3}>
						{"Bắt đầu tạo tài khoản"}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button2}>
					<Text style={styles.text4}>
						{"Đăng nhập"}
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#1FE494",
		borderRadius: 100,
		paddingVertical: 15,
		marginBottom: 23,
		marginHorizontal: 14,
	},
	button2: {
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 100,
		borderWidth: 1,
		paddingVertical: 16,
		marginHorizontal: 14,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		borderColor: "#00000080",
		borderWidth: 1,
		paddingTop: 81,
	},
	text: {
		color: "#000000",
		fontSize: 36,
		fontWeight: "bold",
		marginBottom: 377,
		marginLeft: 123,
	},
	text2: {
		color: "#000000",
		fontSize: 20,
		textAlign: "center",
		marginBottom: 40,
		marginHorizontal: 85,
		width: 218,
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
	},
	text4: {
		color: "#242424",
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default DashboardScreen;