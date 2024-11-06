import React from "react";
import { SafeAreaView, View, ScrollView, Text, ImageBackground, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"Hôm nay"}
					</Text>
					<View style={styles.box}>
					</View>
				</View>
				<View style={styles.column}>
					<View style={styles.row2}>
						<Text style={styles.text2}>
							{"Calories"}
						</Text>
						<Text style={styles.text2}>
							{"Chỉ số BMI"}
						</Text>
					</View>
					<View style={styles.view}>
						<Text style={styles.text3}>
							{"Nặng lượng khuyến nghị 1384 Kcal"}
						</Text>
					</View>
					<View style={styles.row3}>
						<View style={styles.column2}>
							<Text style={styles.text4}>
								{"0"}
							</Text>
							<Text style={styles.text5}>
								{"Ăn vào"}
							</Text>
						</View>
						<ImageBackground 
							source={{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {'stretch'}
							style={styles.box2}
							>
						</ImageBackground>
						<View style={styles.column3}>
							<Text style={styles.text6}>
								{"0"}
							</Text>
							<Text style={styles.text5}>
								{"Tập luyện"}
							</Text>
						</View>
					</View>
					<View style={styles.row4}>
						<Text style={styles.text7}>
							{"Carbs"}
						</Text>
						<Text style={styles.text8}>
							{"Protein"}
						</Text>
						<View style={styles.box}>
						</View>
						<Text style={styles.text8}>
							{"Fat"}
						</Text>
					</View>
					<View style={styles.row5}>
						<View style={styles.box3}>
						</View>
						<View style={styles.box3}>
						</View>
						<View style={styles.box3}>
						</View>
					</View>
					<View style={styles.row6}>
						<Text style={styles.text9}>
							{"0g/190 g"}
						</Text>
						<Text style={styles.text9}>
							{"0g/69 g"}
						</Text>
						<Text style={styles.text9}>
							{"0g/38 g"}
						</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.buttonColumn}>
					<View style={styles.row7}>
						<View style={styles.box4}>
						</View>
						<Text style={styles.text10}>
							{"Bữa sáng"}
						</Text>
						<View style={styles.box}>
						</View>
						<Text style={styles.text11}>
							{"Khuyến nghị 421 Kcal"}
						</Text>
					</View>
					<View style={styles.view2}>
						<Text style={styles.text12}>
							{"Thêm món ăn"}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn}>
					<View style={styles.row7}>
						<View style={styles.box5}>
						</View>
						<Text style={styles.text10}>
							{"Bữa trưa"}
						</Text>
						<View style={styles.box}>
						</View>
						<Text style={styles.text13}>
							{"Khuyến nghị 492 Kcal"}
						</Text>
					</View>
					<View style={styles.view2}>
						<Text style={styles.text12}>
							{"Thêm món ăn"}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn}>
					<View style={styles.row7}>
						<View style={styles.box6}>
						</View>
						<Text style={styles.text10}>
							{"Bữa tối"}
						</Text>
						<View style={styles.box}>
						</View>
						<Text style={styles.text11}>
							{"Khuyến nghị 351 Kcal"}
						</Text>
					</View>
					<View style={styles.view2}>
						<Text style={styles.text12}>
							{"Thêm món ăn"}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn}>
					<View style={styles.row7}>
						<View style={styles.box7}>
						</View>
						<Text style={styles.text10}>
							{"Bữa phụ"}
						</Text>
						<View style={styles.box}>
						</View>
						<Text style={styles.text14}>
							{"Khuyến nghị 140 Kcal"}
						</Text>
					</View>
					<View style={styles.view2}>
						<Text style={styles.text12}>
							{"Thêm món ăn"}
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn}>
					<View style={styles.row7}>
						<View style={styles.box8}>
						</View>
						<Text style={styles.text10}>
							{"Tập luyện"}
						</Text>
						<View style={styles.box}>
						</View>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text15}>
							{"0"}
						</Text>
						<Text style={styles.text16}>
							{"/300 Kcal"}
						</Text>
						<View style={styles.box}>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonColumn2}>
					<View style={styles.row7}>
						<View style={styles.box9}>
						</View>
						<Text style={styles.text10}>
							{"Nước"}
						</Text>
						<View style={styles.box}>
						</View>
					</View>
					<View style={styles.row8}>
						<Text style={styles.text15}>
							{"0"}
						</Text>
						<Text style={styles.text16}>
							{"/2500 ml"}
						</Text>
						<View style={styles.box}>
						</View>
					</View>
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
		flex: 1,
		alignSelf: "stretch",
	},
	box2: {
		width: 175,
		height: 176,
		paddingVertical: 63,
	},
	box3: {
		width: 101,
		height: 9,
		backgroundColor: "#4D4B65",
		borderRadius: 100,
	},
	box4: {
		width: 25,
		height: 25,
		backgroundColor: "#0CD5A2",
		borderRadius: 10,
		marginRight: 10,
	},
	box5: {
		width: 25,
		height: 25,
		backgroundColor: "#FDD162",
		borderRadius: 10,
		marginRight: 10,
	},
	box6: {
		width: 25,
		height: 25,
		backgroundColor: "#0376EC",
		borderRadius: 10,
		marginRight: 10,
	},
	box7: {
		width: 25,
		height: 25,
		backgroundColor: "#A2D346",
		borderRadius: 10,
		marginRight: 10,
	},
	box8: {
		width: 25,
		height: 25,
		backgroundColor: "#F04470",
		borderRadius: 10,
		marginRight: 10,
	},
	box9: {
		width: 25,
		height: 25,
		backgroundColor: "#21A7F6",
		borderRadius: 10,
		marginRight: 10,
	},
	buttonColumn: {
		width: 358,
		height: 93,
		backgroundColor: "#252437",
		borderColor: "#525068",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginBottom: 22,
		marginLeft: 21,
	},
	buttonColumn2: {
		width: 358,
		height: 93,
		backgroundColor: "#252437",
		borderColor: "#525068",
		borderRadius: 15,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 20,
		marginLeft: 21,
	},
	column: {
		backgroundColor: "#252437",
		borderColor: "#525068",
		borderRadius: 15,
		borderWidth: 1,
		paddingTop: 18,
		paddingBottom: 36,
		marginBottom: 25,
		marginLeft: 16,
	},
	column2: {
		width: 44,
		alignSelf: "flex-start",
		marginTop: 54,
	},
	column3: {
		width: 61,
		alignSelf: "flex-start",
		marginTop: 54,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 38,
		marginLeft: 11,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 8,
		marginHorizontal: 16,
	},
	row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 39,
		marginHorizontal: 16,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
		marginHorizontal: 44,
	},
	row5: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12,
		marginHorizontal: 15,
	},
	row6: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 47,
	},
	row7: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 16,
	},
	row8: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#151329",
		paddingTop: 18,
		paddingRight: 11,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
		marginRight: 11,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 14,
		fontWeight: "bold",
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 10,
		marginRight: 4,
		flex: 1,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 4,
		marginLeft: 15,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 14,
	},
	text6: {
		color: "#FFFFFF",
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 7,
		marginLeft: 20,
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 15,
		marginRight: 67,
	},
	text8: {
		color: "#FFFFFF",
		fontSize: 15,
	},
	text9: {
		color: "#FFFFFF",
		fontSize: 11,
	},
	text10: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
	},
	text11: {
		color: "#FFFFFF",
		fontSize: 12,
		marginRight: 23,
	},
	text12: {
		color: "#FFFFFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text13: {
		color: "#FFFFFF",
		fontSize: 12,
		marginRight: 21,
	},
	text14: {
		color: "#FFFFFF",
		fontSize: 12,
		marginRight: 22,
	},
	text15: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
		marginRight: 4,
	},
	text16: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	view: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 28,
		marginHorizontal: 13,
	},
	view2: {
		flexDirection: "row",
		alignItems: "center",
	},
});