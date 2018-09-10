
const head_card = {
    "role": "machine learning engineer / front end developer",
    "name": "Darshan Parsana",
    "email": "darshan.dap2@abc.com",
    "contact": "7405851415",
    "skype_id": "darshan_parsana",
    "img":"abc.src",

};

const scroller_data = [
	{
		title: 'Darsan Parsana(DAP)',
		description: 'this page will be online soon',
		iname: 'ud'
	}, {
		title: 'Frontend Developer',
		description: 'dap, this is',
		iname: 'javascript'
	},{
		title: 'Machine Learning Engineer',
		description: 'this is dap',
		iname: 'dl'
	}
];

const timeline_data = [{
	axisdata: {
		icn     : 'university',
		icnclr  : 'blue',
		time    : "June'18 - ongoing",
		position: 'right'
	},
	content : {
		title: 'Research Assistant',
		text : '',
		links: [],
		tags : ['DL', 'Research']
	}
}, {
	axisdata: {
		icn     : 'programming',
		icnclr  : 'pink',
		time    : "Nov'17 - May'18",
		position: 'left'
	},
	content : {
		title: 'Machine Learning Engineer',
		text : '',
		links: [{
			name: 'cs231n',
			url : 'https://d-a-p.github.io/profile'
		}],
		tags : ['ML', 'DL', 'Freelance']
	}
}, {
	axisdata : {
		icn:'website',
		icnclr: 'blue',
		time:"Jan'17 - Feb'18",
		position:'right'
		},
		content :{
			title:'Product Developer',
			text:'',
			links:[],
			tags:['ES6', 'React', 'Redux']
		}
	}
];

const right_pdata = {
     "about": "This webpage is under developement by DAP",
    "skills":  {"cpp":5, "python":7, "javascript":8, "react":8},
    "project":[
        {
            "name":"abc detector",
            "description":"The many different conceptions of God, and competing claims as to God's characteristics, aims, and actions, have led to the development of ideas of omnitheism, pandeism,[8] or a perennial philosophy, which postulates that there is one underlying theological truth, of which all religions express a partial understanding, and as to which \"the devout in the various great world religions are in fact worshipping that one God, but through different, overlapping concepts or mental images of Him.",
            "link":"abc.com",
            "timestamp":[123424123, 12432124],
        }
    ]
};

export default {head_card, right_pdata, scroller_data, timeline_data};
