let names = [
        "Liam ",
        "Noah ",
        "William ",
        "James ",
        "Oliver ",
        "Benjamin ",
        "Elijah ",
        "Lucas ",
        "Mason ",
        "Logan ",
        "Gabriel ",
        "David ",
        "Alan ",
        "John ",
        "Andrew "
    ]
    //15 names



var rawSurnames = [
        "Doe",
        "English",

        "Smith",
        "English",

        "Johnson",
        "English, Scottish",

        "Williams",
        "English, Welsh",

        "Brown",
        "English, Scottish, Irish",

        "Jones",
        "English, Welsh",

        "Garcia",
        "Spanish",

        "Miller",
        "English, Scottish, German, French, Italian",

        "Davis",
        "English, Welsh",

        "Rodriguez",
        "Spanish",

        "Martinez",
        "Spanish",

        "Hernandez",
        "Spanish, Portuguese",

        "Lopez",
        "Spanish",


        "Gonzales",
        "Spanish",

        "Wilson",
        "English, Scottish",

        "Anderson",
        "Swedish, Danish, Norwegian, English",

        "Thomas",
        "English, Welsh",

        "Taylor",
        "English"
    ]
    //18 surnames

var sickness = {
    "Allergies": -10,
    "Conjunctivitis": -5,
    "Diarrhea": -5,
    "Headaches": -5,
    "Mononucleosis": -10,
    "Stomach Aches": -5,

    "Cancer": [-50,
        { "Lung": 15.5 },
        { "Prostate": 14.5 },
        { "Colorectal": 11.4 },
        { "Stomach": 7.8 },
        { "Liver": 6.8 },
        { "Bladder": 4.8 },
        { "Oesophagus": 4.5 },
        { "Non-Hodgkin lymphoma": 3.2 } //8
    ],
    "Celiac Disease": -10,
    "Heart Disease": -50,


    "Infectious Diseases": [-25, "Chickenpox",
        "Common cold",
        "Diphtheria",
        "E. coli",
        "Giardiasis",
        "HIV/AIDS",
        "Infectious mononucleosis",
        "Influenza"
    ],
    "Liver Disease": -50
};

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', "Oct", 'Nov', 'Dec'];



export { names, rawSurnames, monthNames, sickness };