module.exports = {
	content: ["./src/**/*.{pug,html,js}"],
	theme: {
		container: {
			center: true,
			maxWidth: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
			screens: {
				sm: "600px",
				md: "767.9",
				lg: "1023.67",
				xl: "calc(1260/1920 * 100 * 1rem)",
				"2xl": "calc(1620/1920 * 100 * 1rem)",
			},
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			2: "calc(2/1920 * 100 * 1rem)",
			3: "calc(3/1920 * 100 * 1rem)",
			4: "calc(4/1920 * 100 * 1rem)",
			6: "calc(6/1920 * 100 * 1rem)",
			8: "calc(8/1920 * 100 * 1rem)",
		},
		maxWidth: {
			"1/2": "50%",
			"60%": "60%",
			"70%": "70%",
			"960px": "calc(960/1920 * 100 * 1rem)",
			"1200px": "calc(1200/1920 * 100 * 1rem)",
		},
		fontSize: {
			xs: "calc(12/1920 * 100 * 1rem)",
			sm: "calc(14/1920 * 100 * 1rem)",
			base: "calc(16/1920 * 100 * 1rem)",
			lg: "calc(18/1920 * 100 * 1rem)",
			xl: "calc(20/1920 * 100 * 1rem)",
			"2xl": "calc(24/1920 * 100 * 1rem)",
			"3xl": "calc(30/1920 * 100 * 1rem)",
			"4xl": "calc(36/1920 * 100 * 1rem)",
			"5xl": "calc(48/1920 * 100 * 1rem)",
			"6xl": "calc(60/1920 * 100 * 1rem)",
			"7xl": "calc(72/1920 * 100 * 1rem)",
		},
		spacing: {
			0: "calc(0/1920*100*1rem)",
			1: "calc(1/1920*100*1rem)",
			0.5: "calc(2/1920*100*1rem)",
			1: "calc(4/1920*100*1rem)",
			1.5: "calc(6/1920*100*1rem)",
			2: "calc(8/1920*100*1rem)",
			2.5: "calc(10/1920*100*1rem)",
			3: "calc(12/1920*100*1rem)",
			3.5: "calc(14/1920*100*1rem)",
			4: "calc(16/1920*100*1rem)",
			5: "calc(20/1920*100*1rem)",
			6: "calc(24/1920*100*1rem)",
			7: "calc(28/1920*100*1rem)",
			8: "calc(32/1920*100*1rem)",
			9: "calc(36/1920*100*1rem)",
			10: "calc(40/1920*100*1rem)",
			11: "calc(44/1920*100*1rem)",
			12: "calc(48/1920*100*1rem)",
			14: "calc(56/1920*100*1rem)",
			16: "calc(64/1920*100*1rem)",
			20: "calc(80/1920*100*1rem)",
			24: "calc(96/1920*100*1rem)",
			28: "calc(112/1920*100*1rem)",
			32: "calc(128/1920*100*1rem)",
			36: "calc(144/1920*100*1rem)",
			40: "calc(160/1920*100*1rem)",
			44: "calc(176/1920*100*1rem)",
			48: "calc(192/1920*100*1rem)",
			52: "calc(208/1920*100*1rem)",
			56: "calc(224/1920*100*1rem)",
			60: "calc(240/1920*100*1rem)",
			64: "calc(256/1920*100*1rem)",
			72: "calc(288/1920*100*1rem)",
			80: "calc(320/1920*100*1rem)",
			96: "calc(384/1920*100*1rem)",
		},
		extend: {
			fontFamily: {
				Gilroy: ["SVN-Gilroy"],
				Tahoma: ["Tahoma"],
			},
			dropShadow: {
				primary: "0px 0px 0.78125rem rgba(0,0,0,0.1)",
			},
			borderRadius: {
				"40px": "calc(40/1920*100*1rem)",
				"30px": "calc(30/1920*100*1rem)",
				"10px": "calc(10/1920*100*1rem)",
				"8px": "calc(8/1920*100*1rem)",
				"3px": "calc(3/1920*100*1rem)",
			},
			maxHeight: {
				"100px": "calc(100/1920*100*1rem)",
				"300px": "calc(300/1920*100*1rem)",
				"200px": "calc(200/1920*100*1rem)",
				"350px": "calc(350/1920*100*1rem)",
				"450px": "calc(450/1920*100*1rem)",
				"500px": "calc(500/1920*100*1rem)",
			},
			minWidth: {
				"100px": "calc(100/1920*100*1rem)",
				"150px": "calc(150/1920*100*1rem)",
				"180px": "calc(180/1920*100*1rem)",
				"200px": "calc(200/1920*100*1rem)",
				"250px": "calc(250/1920*100*1rem)",
				"300px": "calc(300/1920*100*1rem)",
				"340px": "calc(340/1920*100*1rem)",
				"350px": "calc(350/1920*100*1rem)",
				"500px": "calc(500/1920*100*1rem)",
			},
			minHeight: {
				"80px": "calc(80/1920*100*1rem)",
				"100px": "calc(100/1920*100*1rem)",
				"200px": "calc(200/1920*100*1rem)",
				"300px": "calc(300/1920*100*1rem)",
				"350px": "calc(350/1920*100*1rem)",
				"450px": "calc(450/1920*100*1rem)",
				"500px": "calc(500/1920*100*1rem)",
				"600px": "calc(600/1920*100*1rem)",
				"700px": "calc(700/1920*100*1rem)",
			},
			maxWidth: {
				"370px": "calc(370/1920*100*1rem)",
				"500px": "calc(500/1920*100*1rem)",
			},
			colors: {
				primary: "#FCB813",
				secondary: "#762F0B",
				gray: "#848484",
			},
			fontSize: {
				"10px": "calc(10/1920 * 100 * 1rem)",
				"12px": "calc(12/1920 * 100 * 1rem)",
				"13px": "calc(13/1920 * 100 * 1rem)",
				"15px": "calc(15/1920 * 100 * 1rem)",
				"18px": "calc(18/1920 * 100 * 1rem)",
				"20px": "calc(20/1920 * 100 * 1rem)",
				"25px": "calc(25/1920 * 100 * 1rem)",
				"27px": "calc(27/1920 * 100 * 1rem)",
				"28px": "calc(28/1920 * 100 * 1rem)",
				"32px": "calc(32/1920 * 100 * 1rem)",
				"35px": "calc(35/1920 * 100 * 1rem)",
				"40px": "calc(40/1920 * 100 * 1rem)",
				"45px": "calc(45/1920 * 100 * 1rem)",
				"50px": "calc(50/1920 * 100 * 1rem)",
				"55px": "calc(55/1920 * 100 * 1rem)",
				"60px": "calc(60/1920 * 100 * 1rem)",
				"64px": "calc(64/1920 * 100 * 1rem)",
				"80px": "calc(80/1920 * 100 * 1rem)",
				"100px": "calc(100/1920 * 100 * 1rem)",
				"120px": "calc(120/1920 * 100 * 1rem)",
				"125px": "calc(125/1920 * 100 * 1rem)",
				"140px": "calc(140/1920 * 100 * 1rem)",
				"147px": "calc(147/1920 * 100 * 1rem)",
				"150px": "calc(150/1920 * 100 * 1rem)",
				"172px": "calc(172/1920 * 100 * 1rem)",
			},
			spacing: {
				"1px": "calc(1/1920 * 100 * 1rem)",
				"2px": "calc(2/1920 * 100 * 1rem)",
				"4px": "calc(4/1920 * 100 * 1rem)",
				"5px": "calc(5/1920 * 100 * 1rem)",
				"6px": "calc(6/1920 * 100 * 1rem)",
				"10px": "calc(10/1920 * 100 * 1rem)",
				"12px": "calc(12/1920 * 100 * 1rem)",
				"14px": "calc(14/1920 * 100 * 1rem)",
				"15px": "calc(15/1920 * 100 * 1rem)",
				"16px": "calc(16/1920 * 100 * 1rem)",
				"18px": "calc(18/1920 * 100 * 1rem)",
				"19px": "calc(19/1920 * 100 * 1rem)",
				"20px": "calc(20/1920 * 100 * 1rem)",
				"21px": "calc(21/1920 * 100 * 1rem)",
				"22px": "calc(22/1920 * 100 * 1rem)",
				"24px": "calc(24/1920 * 100 * 1rem)",
				"25px": "calc(25/1920 * 100 * 1rem)",
				"27px": "calc(27/1920 * 100 * 1rem)",
				"30px": "calc(30/1920 * 100 * 1rem)",
				"33px": "calc(33/1920 * 100 * 1rem)",
				"34px": "calc(34/1920*100*1rem)",
				"35px": "calc(35/1920*100*1rem)",
				"37px": "calc(37/1920*100*1rem)",
				"40px": "calc(40/1920*100*1rem)",
				"45px": "calc(45/1920*100*1rem)",
				"50px": "calc(50/1920*100*1rem)",
				"55px": "calc(55/1920*100*1rem)",
				"58px": "calc(58/1920*100*1rem)",
				"60px": "calc(60/1920 * 100 * 1rem)",
				"63px": "calc(63/1920 * 100 * 1rem)",
				"65px": "calc(65/1920 * 100 * 1rem)",
				"70px": "calc(70/1920 * 100 * 1rem)",
				"80px": "calc(80/1920 * 100 * 1rem)",
				"85px": "calc(85/1920 * 100 * 1rem)",
				"90px": "calc(90/1920 * 100 * 1rem)",
				"95px": "calc(95/1920 * 100 * 1rem)",
				"100px": "calc(100/1920 * 100 * 1rem)",
				"108px": "calc(108/1920 * 100 * 1rem)",
				"120px": "calc(120/1920 * 100 * 1rem)",
				"125px": "calc(125/1920 * 100 * 1rem)",
				"130px": "calc(130/1920 * 100 * 1rem)",
				"150px": "calc(150/1920 * 100 * 1rem)",
				"170px": "calc(170/1920 * 100 * 1rem)",
				"180px": "calc(180/1920 * 100 * 1rem)",
				"200px": "calc(200/1920 * 100 * 1rem)",
				"208px": "calc(208/1920 * 100 * 1rem)",
				"250px": "calc(250/1920 * 100 * 1rem)",
				"279px": "calc(279/1920 * 100 * 1rem)",
				"300px": "calc(300/1920 * 100 * 1rem)",
				"340px": "calc(340/1920 * 100 * 1rem)",
				"350px": "calc(350/1920 * 100 * 1rem)",
				"360px": "calc(360/1920 * 100 * 1rem)",
				"500px": "calc(500/1920 * 100 * 1rem)",
				"609px": "calc(609/1920 * 100 * 1rem)",
				"658px": "calc(658/1920 * 100 * 1rem)",
				"690px": "calc(690/1920 * 100 * 1rem)",
				"700px": "calc(700/1920 * 100 * 1rem)",
				"960px": "calc(960/1920 * 100 * 1rem)",
			},
		},
	},
	plugins: [],
};
