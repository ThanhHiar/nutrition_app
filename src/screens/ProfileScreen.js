import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet, } from "react-native";
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
				<View style={styles.row2}>
					<View style={styles.box2}>
					</View>
					<Text style={styles.text2}>
						{"Chào Hải"}
					</Text>
					<View style={styles.box}>
					</View>
				</View>
				<View style={styles.column}>
					<Text style={styles.text3}>
						{"Kế hoạch của bạn"}
					</Text>
					<View style={styles.row3}>
						<View style={styles.box3}>
						</View>
						<Text style={styles.text4}>
							{"Mục tiêu"}
						</Text>
					</View>
					<View style={styles.view}>
						<View style={styles.column2}>
							<Text style={styles.text5}>
								{"Giảm cân"}
							</Text>
							<View style={styles.row4}>
								<View style={styles.box4}>
								</View>
								<Text style={styles.text6}>
									{"Câng nặng hiện tại"}
								</Text>
							</View>
							<Text style={styles.text7}>
								{"62kg"}
							</Text>
						</View>
					</View>
					<View style={styles.row5}>
						<View style={styles.box5}>
						</View>
						<Text style={styles.text4}>
							{"Cân nặng mục tiêu"}
						</Text>
					</View>
					<Text style={styles.text8}>
						{"58kg"}
					</Text>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.text9}>
							{"Cập nhật cân nặng"}
						</Text>
					</TouchableOpacity>
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
		flex: 1,
		alignSelf: "stretch",
	},
	box2: {
		width: 59,
		height: 54,
		backgroundColor: "#FFFFFF",
		borderRadius: 10000,
		paddingHorizontal: 5,
		marginRight: 24,
	},
	box3: {
		width: 17,
		height: 22,
		backgroundColor: "#FDD162",
		borderRadius: 100,
		marginRight: 10,
	},
	box4: {
		width: 17,
		height: 22,
		backgroundColor: "#00D69F",
		borderRadius: 100,
	},
	box5: {
		width: 17,
		height: 21,
		backgroundColor: "#F24373",
		borderRadius: 100,
		marginRight: 12,
	},
	button: {
		width: 295,
		height: 41,
		alignItems: "center",
		backgroundColor: "#4D4B65",
		borderColor: "#403E55",
		borderRadius: 100,
		borderWidth: 1,
		paddingVertical: 15,
		marginHorizontal: 24,
	},
	column: {
		backgroundColor: "#252437",
		borderColor: "#525068",
		borderRadius: 15,
		borderWidth: 1,
		paddingTop: 19,
		paddingBottom: 38,
		marginHorizontal: 16,
	},
	column2: {
		width: 133,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 40,
		marginHorizontal: 11,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 40,
		marginHorizontal: 28,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 3,
		marginHorizontal: 24,
	},
	row4: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 31,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 28,
		marginHorizontal: 24,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#151329",
		paddingTop: 18,
	},
	text: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
		marginRight: 11,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 25,
		fontWeight: "bold",
	},
	text3: {
		color: "#FFFFFF",
		fontSize: 17,
		fontWeight: "bold",
		marginBottom: 14,
		marginLeft: 15,
	},
	text4: {
		color: "#FFFFFF",
		fontSize: 12,
		flex: 1,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 25,
		marginLeft: 6,
	},
	text6: {
		color: "#FFFFFF",
		fontSize: 12,
	},
	text7: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
		marginLeft: 11,
	},
	text8: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 29,
		marginLeft: 35,
	},
	text9: {
		color: "#FFFFFF",
		fontSize: 13,
		fontWeight: "bold",
	},
	view: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 5,
		marginHorizontal: 14,
	},
});