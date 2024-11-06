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
					<View style={styles.box}>
					</View>
					<View style={styles.box2}>
					</View>
				</View>
				<Text style={styles.text2}>
					{"Mức độ hoạt động cơ bản của bạn là gì?"}
				</Text>
				<Text style={styles.text3}>
					{"Không bao gồm tập luyện"}
				</Text>
				<TouchableOpacity style={styles.buttonColumn}>
					<Text style={styles.text4}>
						{"Không hoạt động nhiều"}
					</Text>
					<Text style={styles.text5}>
						{"Phần lớn thời gian trong ngày để ngồi (ví dụ: giao dịch viên ngân hàng, công việc bàn giấy)."}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn}>
					<Text style={styles.text4}>
						{"Hoạt động nhẹ nhàng"}
					</Text>
					<Text style={styles.text5}>
						{"Dành phần lớn thời gian trong ngày cho đôi chân của bạn (ví dụ: giáo viên, nhân viên bán hàng)."}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn}>
					<Text style={styles.text4}>
						{"Tích cực"}
					</Text>
					<Text style={styles.text5}>
						{"Dành một phần thời gian trong ngày để thực hiện một số hoạt động thể chất (ví dụ: người phục vụ thức ăn, người vận chuyển bưu điện)."}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn2}>
					<Text style={styles.text4}>
						{"Rất tích cực"}
					</Text>
					<Text style={styles.text5}>
						{"Dành thời gian tốt trong ngày để thực hiện các hoạt động thể chất nặng nhọc (ví dụ: đi xe đạp, thợ mộc)."}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.text6}>
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
		alignItems: "center",
		backgroundColor: "#07FF9A",
		borderRadius: 100,
		paddingVertical: 18,
		marginHorizontal: 22,
	},
	buttonColumn: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 29,
		marginBottom: 10,
		marginHorizontal: 22,
	},
	buttonColumn2: {
		backgroundColor: "#FFFFFF",
		borderColor: "#0000004D",
		borderRadius: 10,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 29,
		marginBottom: 162,
		marginHorizontal: 22,
	},
	buttonImage: {
		width: 30,
		height: 25,
		marginRight: 19,
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
		marginLeft: 22,
	},
	text3: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 31,
		marginLeft: 24,
	},
	text4: {
		color: "#000000",
		fontSize: 14,
		fontWeight: "bold",
		marginBottom: 12,
	},
	text5: {
		color: "#000000",
		fontSize: 12,
		width: 284,
	},
	text6: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
});