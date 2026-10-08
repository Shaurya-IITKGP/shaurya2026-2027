"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import styles from "./teams.module.css";

type TeamMember = {
  name: string;
  phone: string;
  image: string;
};

type Department = {
  name: string;
  members: TeamMember[];
};

type ContactLink = {
  label: string;
  href: string;
};

type Edition = "2023" | "2024" | "2025" | "2026";

const imageBase2025 = "/teams/team2025/";
const imageBase2024 = "/teams/team2024/";
const imageBase2023 = "/teams/team2023/";
const imageBase = "/teams/team2025/";

const departments: Department[] = [
  {
    name: "Executive Heads",
    members: [
      {
        name: "Sidharth Reddy",
        phone: "8639775835",
        image: `${imageBase2025}Sidharth Reddy.PNG`,
      },
      {
        name: "Mayank Singh",
        phone: "8814943708",
        image: `${imageBase2025}Mayank Yadav.webp`,
      },
      {
        name: "Jyoti",
        phone: "6367363093",
        image: `${imageBase2025}jyoti.jpg`,
      },
    ],
  },
  {
    name: "Finance Heads",
    members: [
      {
        name: "Namanya Pant",
        phone: "9004487822",
        image: `${imageBase2025}Namanya Pant.jpg`,
      },
      {
        name: "Saksham Aggarwal",
        phone: "7304368246",
        image: `${imageBase2025}Saksham Aggarwal.jpg`,
      },
    ],
  },
  {
    name: "Event Heads",
    members: [
      {
        name: "Navadeep Nandedapu",
        phone: "8179575909",
        image: `${imageBase2025}Navadeep.jpg`,
      },
      {
        name: "Yayavaram Vivekadithya",
        phone: "8328271915",
        image: `${imageBase2025}Vivek.jpg`,
      },
      {
        name: "Surekha",
        phone: "6350603609",
        image: `${imageBase2025}surekha.jpg`,
      },
      {
        name: "Sabita Kumari",
        phone: "7667578864",
        image: `${imageBase2025}sabita kumari.jpg`,
      },
      {
        name: "Budida Abhinav",
        phone: "6300068771",
        image: `${imageBase2025}Budida Abhinav.jpg`,
      },
      {
        name: "MS Karthik",
        phone: "9845916377",
        image: `${imageBase2025}MS Karthik.jpg`,
      },
    ],
  },
  {
    name: "Publicity & Marketing Heads",
    members: [
      {
        name: "Rupali Hingankar",
        phone: "8830220583",
        image: `${imageBase2025}rupali.jpg`,
      },
      {
        name: "Shivraj Gulve",
        phone: "8421115807",
        image: `${imageBase2025}Shivraj.png`,
      },
      {
        name: "Vangala Akshay Reddy",
        phone: "8309403808",
        image: `${imageBase2025}Akshay.jpg`,
      },
    ],
  },
  {
    name: "Sponsorship Heads",
    members: [
      {
        name: "Ayush Kumar",
        phone: "9304203012",
        image: `${imageBase2025}ayush.webp`,
      },
      {
        name: "Akash Kolanti",
        phone: "9542309116",
        image: `${imageBase2025}Akash Kolanti.jpg`,
      },
      {
        name: "Sauparna Das",
        phone: "9330578069",
        image: `${imageBase2025}sauparnadas.jpg`,
      },
    ],
  },
  {
    name: "Web Heads",
    members: [
      {
        name: "Ananye Kachhap",
        phone: "9931319395",
        image: `${imageBase2025}Ananye Kachhap.jpg`,
      },
      {
        name: "Jeet Anand",
        phone: "9122233011",
        image: `${imageBase2025}jeet.jpg`,
      },
    ],
  },
  {
    name: "Media and Public Relations",
    members: [
      {
        name: "Rasamalla Charan Prakash",
        phone: "8309483130",
        image: `${imageBase2025}Rasamalla Charan Prakash.png`,
      },
      {
        name: "Nudvip Tale",
        phone: "8142999166",
        image: `${imageBase2025}Nudvip Tale.jpg`,
      },
      {
        name: "Annangi Neeraj Kumar",
        phone: "8328003149",
        image: `${imageBase2025}Annangi Neeraj Kumar.jpg`,
      },
    ],
  },
];

const historicalDepartments: Department[] = [
  {
    name: "Executive Heads",
    members: [
      {
        name: "Tejashwi Kumar Jha",
        phone: "8102400147",
        image: `${imageBase2024}Tejashwi Kumar Jha.jpg`,
      },
      {
        name: "Jival Chorawala",
        phone: "7378655738",
        image: `${imageBase2024}Jival Chorawala.jpeg`,
      },
      {
        name: "Chavi Agarwal",
        phone: "8801027905",
        image: `${imageBase2024}Chavi Agarwal.jpeg`,
      },
    ],
  },
  {
    name: "Finance Heads",
    members: [
      {
        name: "Brij Patel",
        phone: "7698817843",
        image: `${imageBase2024}Brij Patel.jpeg`,
      },
      {
        name: "Pranjal Paliwal",
        phone: "7988270765",
        image: `${imageBase2024}Pranjal Paliwal.jpeg`,
      },
    ],
  },
  {
    name: "Event Heads",
    members: [
      {
        name: "Indrajeet Kumar",
        phone: "7275282141",
        image: `${imageBase2024}default.png`,
      },
      {
        name: "Sudhanshu Kumar",
        phone: "9931682446",
        image: `${imageBase2024}Sudhanshu Kumar.jpeg`,
      },
      {
        name: "Matthews Bonthu",
        phone: "8688324518",
        image: `${imageBase2024}Matthews Bonthu.jpeg`,
      },
    ],
  },
  {
    name: "Publicity & Marketing Heads",
    members: [
      {
        name: "Hemant Kamble",
        phone: "9372838349",
        image: `${imageBase2024}Hemant Kamble.jpeg`,
      },
      {
        name: "Tuhsin Suhana Rahman",
        phone: "6002515029",
        image: `${imageBase2024}Tuhsin Suhana Rahman.jpeg`,
      },
      {
        name: "Rakesh Tella",
        phone: "9640519184",
        image: `${imageBase2024}Rakesh Tella.jpeg`,
      },
    ],
  },
  {
    name: "Sponsorship Heads",
    members: [
      {
        name: "Shaurya Pratap Singh",
        phone: "8003192648",
        image: `${imageBase2024}Shaurya Pratap Singh.png`,
      },
      {
        name: "Samrat Koushik Shaw",
        phone: "7047740198",
        image: `${imageBase2024}Samrat.jpg`,
      },
      {
        name: "Preet Panchal",
        phone: "7383456780",
        image: `${imageBase2024}Preet.jpeg`,
      },
    ],
  },
  {
    name: "Logistics Heads",
    members: [
      {
        name: "Ayush Garg",
        phone: "9461950422",
        image: `${imageBase2024}Ayush_Garg.jpg`,
      },
      {
        name: "Kushal Kushwaha",
        phone: "9594620693",
        image: `${imageBase2024}Kushal.jpg`,
      },
      {
        name: "Pranjal Kanodia",
        phone: "9610978218",
        image: `${imageBase2024}Pranjal Kanodia.jpeg`,
      },
    ],
  },
  {
    name: "Web Heads",
    members: [
      {
        name: "Pranjul Shukla",
        phone: "6307455279",
        image: `${imageBase2024}Pranjul_Shukla.jpg`,
      },
      {
        name: "Sahil Sinha",
        phone: "7856845083",
        image: `${imageBase2024}Sahil_Sinha.jpg`,
      },
    ],
  },
  {
    name: "Design and Media Heads",
    members: [
      {
        name: "Bhuvan Raj Guguloth",
        phone: "9392885490",
        image: `${imageBase2024}bhuvan.jpg`,
      },
      {
        name: "Sai Chetan Kumar",
        phone: "7702026854",
        image: `${imageBase2024}default.png`,
      },
      {
        name: "Deepak Mina",
        phone: "8696784547",
        image: `${imageBase2024}Deepak Mina.png`,
      },
    ],
  },
];

const team2023Departments: Department[] = [
  {
    name: "Executive Heads",
    members: [
      {
        name: "S S V K S S Jyothiraditya",
        phone: "7675007236",
        image: `${imageBase2023}S S V K S S Jyothiraditya.jpeg`,
      },
      {
        name: "Shreya Mishra",
        phone: "9475621028",
        image: `${imageBase2023}Shreya Mishra.jpeg`,
      },
      {
        name: "Soujanaya Nayak",
        phone: "7506136455",
        image: `${imageBase2023}Soujanaya Nayak.jpeg`,
      },
    ],
  },
  {
    name: "Finance Heads",
    members: [
      {
        name: "Jatin Motwani",
        phone: "9424533623",
        image: `${imageBase2023}Jatin Motwani.jpeg`,
      },
      {
        name: "Lokesh Agarwala",
        phone: "7728018715",
        image: `${imageBase2023}Lokesh Agarwala.jpeg`,
      },
    ],
  },
  {
    name: "Event Heads",
    members: [
      {
        name: "Archie Avirati",
        phone: "7024385271",
        image: `${imageBase2023}Archie Avirati.jpeg`,
      },
      {
        name: "Himanshu",
        phone: "7348701571",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Nikhil Bharat Rajani",
        phone: "7020096806",
        image: `${imageBase2023}Nikhil Bharat Rajani.jpeg`,
      },
      {
        name: "Priyanshu Shaw",
        phone: "9073808624",
        image: `${imageBase2023}Priyanshu Shaw.jpeg`,
      },
      {
        name: "Rishi Dhoble",
        phone: "9205704432",
        image: `${imageBase2023}Rishi Dhoble.jpeg`,
      },
    ],
  },
  {
    name: "Publicity & Marketing Heads",
    members: [
      {
        name: "Atharva Chilwarwar",
        phone: "7796557031",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Prashant Tripathi",
        phone: "7398149866",
        image: `${imageBase2023}Prashant Tripathi.jpeg`,
      },
      {
        name: "S. Siddharth",
        phone: "9789422444",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Yashwanth Kumar Kallepalli",
        phone: "9347865123",
        image: `${imageBase2023}Yashwanth Kumar.jpeg`,
      },
    ],
  },
  {
    name: "Sponsorship Heads",
    members: [
      {
        name: "Aditya G Gaikwad",
        phone: "9980090567",
        image: `${imageBase2023}Aditya G Gaikwad.png`,
      },
      {
        name: "Akshat Dilip Lade",
        phone: "9920378336",
        image: `${imageBase2023}Akshat Dilip Lade.jpeg`,
      },
      {
        name: "Chalamalla Sahithi",
        phone: "6300290977",
        image: `${imageBase2023}Chalamalla Sahithi.png`,
      },
      {
        name: "Nimish Gadge",
        phone: "9819755685",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Prajay",
        phone: "9391738281",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Raghuvar Srivastava",
        phone: "9811097343",
        image: `${imageBase2023}default.png`,
      },
    ],
  },
  {
    name: "Logistics Heads",
    members: [
      {
        name: "Akula Tejaswini",
        phone: "7396066011",
        image: `${imageBase2023}Akula Tejaswini.jpeg`,
      },
      {
        name: "Neeraj Patel",
        phone: "7987752913",
        image: `${imageBase2023}Neeraj Patel.jpeg`,
      },
    ],
  },
  {
    name: "Web Heads",
    members: [
      {
        name: "Rohan R. Barsagade",
        phone: "8263932614",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Somyajeet Gupta Chowdhury",
        phone: "9113340204",
        image: `${imageBase2023}Somyajeet Gupta Chowdhury.jpeg`,
      },
    ],
  },
  {
    name: "Design and Media Heads",
    members: [
      {
        name: "Gauransh Agarwal",
        phone: "7063730072",
        image: `${imageBase2023}Gauransh Agarwal.jpeg`,
      },
      {
        name: "Malla Harshavardhan",
        phone: "9392551557",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Shubham Dilawar",
        phone: "9893662396",
        image: `${imageBase2023}Shubham Dilawar.jpeg`,
      },
      {
        name: "Vaibhav Joshi",
        phone: "9535734903",
        image: `${imageBase2023}Vaibhav Joshi.jpeg`,
      },
    ],
  },
  {
    name: "Accommodation and Guest Reception Heads",
    members: [
      {
        name: "Anushka Singh",
        phone: "9335225142",
        image: `${imageBase2023}Anushka Singh.jpeg`,
      },
      {
        name: "Dhiya Mariam Thomas",
        phone: "8851996747",
        image: `${imageBase2023}default.png`,
      },
      {
        name: "Jayansh Maheshwari",
        phone: "8655701340",
        image: `${imageBase2023}default.png`,
      },
    ],
  },
];

const departments2026: Department[] = [
  {
    name: "Executive Heads",
    members: [
      {
        name: "Executive Head 1",
        phone: "+91 98765 43210",
        image: `${imageBase}default.png`,
      },
      {
        name: "Executive Head 2",
        phone: "+91 98765 43211",
        image: `${imageBase}default.png`,
      },
      {
        name: "Executive Head 3",
        phone: "+91 98765 43212",
        image: `${imageBase}default.png`,
      },
    ],
  },
  {
    name: "Finance Heads",
    members: [
      {
        name: "Finance Head 1",
        phone: "+91 98765 43213",
        image: `${imageBase}default.png`,
      },
    ],
  },
  {
    name: "Web Heads",
    members: [
      {
        name: "Web Head 1",
        phone: "+91 98765 43214",
        image: `${imageBase}default.png`,
      },
      {
        name: "Web Head 2",
        phone: "+91 98765 43215",
        image: `${imageBase}default.png`,
      },
    ],
  },
  {
    name: "Event Heads",
    members: [
      {
        name: "Event Head 1",
        phone: "+91 98765 43216",
        image: `${imageBase}default.png`,
      },
      {
        name: "Event Head 2",
        phone: "+91 98765 43217",
        image: `${imageBase}default.png`,
      },
    ],
  },
  {
    name: "Publicity & Marketing Heads",
    members: [
      {
        name: "Publicity & Marketing Head 1",
        phone: "+91 98765 43218",
        image: `${imageBase}default.png`,
      },
      {
        name: "Publicity & Marketing Head 2",
        phone: "+91 98765 43219",
        image: `${imageBase}default.png`,
      },
      {
        name: "Publicity & Marketing Head 3",
        phone: "+91 98765 43220",
        image: `${imageBase}default.png`,
      },
    ],
  },
];

const historicalEmails: Record<string, string> = {
  "S S V K S S Jyothiraditya": "jyothiradityas@kgpian.iitkgp.ac.in",
  "Shreya Mishra": "mshreya1210@gmail.com",
  "Soujanaya Nayak": "soujanya@kgpian.iitkgp.ac.in",
  "Jatin Motwani": "jatinmotwani000@gmail.com",
  "Lokesh Agarwala": "lokeshagarwala30@gmail.com",
  "Archie Avirati": "Aviratiarchie@gmail.com",
  "Himanshu": "golusai9465@gmail.com",
  "Nikhil Bharat Rajani": "nikhilrajani309@gmail.com",
  "Priyanshu Shaw": "priyanshushaw2807@gmail.com",
  "Rishi Dhoble": "Rishi.dhoble03@gmail.com",
  "Atharva Chilwarwar": "Chilwarwar.atharva@gmail.com",
  "Prashant Tripathi": "prashant01510@gmail.com",
  "S. Siddharth": "Siddharthsabhari@gmail.com",
  "Yashwanth Kumar Kallepalli": "yashwanth.18.iitkgp@gmail.com",
  "Aditya G Gaikwad": "adityagaikwad.iitkgp@gmail.com",
  "Akshat Dilip Lade": "akshatlade@gmail.com",
  "Chalamalla Sahithi": "sahithi.chalamalla@gmail.com",
  "Nimish Gadge": "nimishgadge98@gmail.com",
  "Prajay": "mudavathprajay@gmail.com",
  "Raghuvar Srivastava": "raghuvarsrivastava@gmail.com",
  "Akula Tejaswini": "akulatejaswini23@gmail.com",
  "Neeraj Patel": "neeraj.patel2703@gmail.com",
  "Rohan R. Barsagade": "therohan84@gmail.com",
  "Somyajeet Gupta Chowdhury": "isomya13@gmail.com",
  "Gauransh Agarwal": "gauransh.iitkgp@gmail.com",
  "Malla Harshavardhan": "harshavardhanmalla1729@gmail.com",
  "Shubham Dilawar": "shubhamdilawar23@gmail.com",
  "Anushka Singh": "asingh29052003@gmail.com",
  "Dhiya Mariam Thomas": "dhiyamt2003@gmail.com",
  "Jayansh Maheshwari": "jayanshmaheshwari@gmail.com",
  "Tejashwi Kumar Jha": "tkjha2468@gmail.com",
  "Jival Chorawala": "jivalchorawala13@gmail.com",
  "Chavi Agarwal": "agarwalchavi04@gmail.com",
  "Brij Patel": "brijpatel475@gmail.com",
  "Pranjal Paliwal": "pranjalpaliwal.05@kgpian.iitkgp.ac.in",
  "Indrajeet Kumar": "knp.indrajeetkumar@gmail.com",
  "Sudhanshu Kumar": "mrsudhanshu756@gmail.com",
  "Matthews Bonthu": "matthews27@kgpian.iitkgp.ac.in",
  "Hemant Kamble": "hemantsoham111@gmail.com",
  "Tuhsin Suhana Rahman": "tuhsin13@gmail.com",
  "Rakesh Tella": "rakeshtella8@gmail.com",
  "Shaurya Pratap Singh": "shaurya29@kgpian.iitkgp.ac.in",
  "Samrat Koushik Shaw": "shawkoushik8776@gmail.com",
  "Preet Panchal": "panchalpreet090304@gmail.com",
  "Ayush Garg": "gargayush.2412@gmail.com",
  "Kushal Kushwaha": "kushalkushwaha96@gmail.com",
  "Pranjal Kanodia": "pranjalkanodia11@gmail.com",
  "Pranjul Shukla": "captaincoro444@gmail.com",
  "Sahil Sinha": "sahilsinha247742@gmail.com",
  "Bhuvan Raj Guguloth": "bhuvanrajnaik@gmail.com",
  "Sai Chetan Kumar": "chetankumar10021@gmail.com",
  "Deepak Mina": "deepak2020ibs@gmail.com",
  "Sidharth Reddy": "sidharthreddy32@gmail.com",
  "Mayank Singh": "ms9421837@gmail.com",
  "Jyoti": "jyotibhamboo2518@gmail.com",
  "Namanya Pant": "namanyapant2630@gmail.com",
  "Saksham Aggarwal": "sakshamaggarwal.shaurya.iitkgp@gmail.com",
  "Navadeep Nandedapu": "navadeepnandedapu@gmail.com",
  "Yayavaram Vivekadithya": "vivekadithyayayavaram2005@gmail.com",
  "Surekha": "surekha.shaurya.iitkgp@gmail.com",
  "Sabita Kumari": "sabita.shauryaiitkgp23@gmail.com",
  "Budida Abhinav": "abhinavbudida.shaurya.iitkgp@gmail.com",
  "MS Karthik": "mskarthik.shaurya.iitkgp@gmail.com",
  "Rupali Hingankar": "rupalihingankar.shaurya.iitkgp@gmail.com",
  "Shivraj Gulve": "shivrajgulve.shaurya.iitkgp@gmail.com",
  "Vangala Akshay Reddy": "akshayreddy.shaurya.iitkgp@gmail.com",
  "Ayush Kumar": "ayushkr092004@gmail.com",
  "Akash Kolanti": "akash.k2104@gmail.com",
  "Sauparna Das": "sauparnadas@gmail.com",
  "Ananye Kachhap": "ajitkachhap005@kgpian.iitkgp.ac.in",
  "Jeet Anand": "jeetaana123@gmail.com",
  "Rasamalla Charan Prakash": "rasamallacharanprakash0@gmail.com",
  "Nudvip Tale": "nudviptale@gmail.com",
  "Annangi Neeraj Kumar": "neerajannangi4@gmail.com"
};

const contactLinks: Record<string, ContactLink[]> = {
  "S S V K S S Jyothiraditya": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7675007236"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=jyothiradityas@kgpian.iitkgp.ac.in"
    }
  ],
  "Shreya Mishra": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9475621028"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=mshreya1210@gmail.com"
    }
  ],
  "Soujanaya Nayak": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7506136455"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=soujanya@kgpian.iitkgp.ac.in"
    }
  ],
  "Jatin Motwani": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9424533623"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=jatinmotwani000@gmail.com"
    }
  ],
  "Lokesh Agarwala": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7728018715"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=lokeshagarwala30@gmail.com"
    }
  ],
  "Archie Avirati": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7024385271"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=Aviratiarchie@gmail.com"
    }
  ],
  "Himanshu": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7348701571"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=golusai9465@gmail.com"
    }
  ],
  "Nikhil Bharat Rajani": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7020096806"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=nikhilrajani309@gmail.com"
    }
  ],
  "Priyanshu Shaw": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9073808624"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=priyanshushaw2807@gmail.com"
    }
  ],
  "Rishi Dhoble": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9205704432"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=Rishi.dhoble03@gmail.com"
    }
  ],
  "Atharva Chilwarwar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7796557031"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=Chilwarwar.atharva@gmail.com"
    }
  ],
  "Prashant Tripathi": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7398149866"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=prashant01510@gmail.com"
    }
  ],
  "S. Siddharth": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9789422444"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=Siddharthsabhari@gmail.com"
    }
  ],
  "Yashwanth Kumar Kallepalli": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9347865123"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=yashwanth.18.iitkgp@gmail.com"
    }
  ],
  "Aditya G Gaikwad": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9980090567"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=adityagaikwad.iitkgp@gmail.com"
    }
  ],
  "Akshat Dilip Lade": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9920378336"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=akshatlade@gmail.com"
    }
  ],
  "Chalamalla Sahithi": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/6300290977"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=sahithi.chalamalla@gmail.com"
    }
  ],
  "Nimish Gadge": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9819755685"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=nimishgadge98@gmail.com"
    }
  ],
  "Prajay": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9391738281"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=mudavathprajay@gmail.com"
    }
  ],
  "Raghuvar Srivastava": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9811097343"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=raghuvarsrivastava@gmail.com"
    }
  ],
  "Akula Tejaswini": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7396066011"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=akulatejaswini23@gmail.com"
    }
  ],
  "Neeraj Patel": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7987752913"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=neeraj.patel2703@gmail.com"
    }
  ],
  "Rohan R. Barsagade": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8263932614"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=therohan84@gmail.com"
    }
  ],
  "Somyajeet Gupta Chowdhury": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9113340204"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=isomya13@gmail.com"
    }
  ],
  "Gauransh Agarwal": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7063730072"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=gauransh.iitkgp@gmail.com"
    }
  ],
  "Malla Harshavardhan": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9392551557"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=harshavardhanmalla1729@gmail.com"
    }
  ],
  "Shubham Dilawar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9893662396"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=shubhamdilawar23@gmail.com"
    }
  ],
  "Vaibhav Joshi": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9535734903"
    }
  ],
  "Anushka Singh": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9335225142"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=asingh29052003@gmail.com"
    }
  ],
  "Dhiya Mariam Thomas": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8851996747"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=dhiyamt2003@gmail.com"
    }
  ],
  "Jayansh Maheshwari": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8655701340"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=jayanshmaheshwari@gmail.com"
    }
  ],
  "Tejashwi Kumar Jha": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8102400147"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=tkjha2468@gmail.com"
    }
  ],
  "Jival Chorawala": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7378655738"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=jivalchorawala13@gmail.com"
    }
  ],
  "Chavi Agarwal": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8801027905"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=agarwalchavi04@gmail.com"
    }
  ],
  "Brij Patel": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7698817843"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=brijpatel475@gmail.com"
    }
  ],
  "Pranjal Paliwal": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7988270765"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=pranjalpaliwal.05@kgpian.iitkgp.ac.in"
    }
  ],
  "Indrajeet Kumar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7275282141"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=knp.indrajeetkumar@gmail.com"
    }
  ],
  "Sudhanshu Kumar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9931682446"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=mrsudhanshu756@gmail.com"
    }
  ],
  "Matthews Bonthu": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8688324518"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=matthews27@kgpian.iitkgp.ac.in"
    }
  ],
  "Hemant Kamble": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9372838349"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=hemantsoham111@gmail.com"
    }
  ],
  "Tuhsin Suhana Rahman": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/6002515029"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=tuhsin13@gmail.com"
    }
  ],
  "Rakesh Tella": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9640519184"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=rakeshtella8@gmail.com"
    }
  ],
  "Shaurya Pratap Singh": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8003192648"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=shaurya29@kgpian.iitkgp.ac.in"
    }
  ],
  "Samrat Koushik Shaw": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7047740198"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=shawkoushik8776@gmail.com"
    }
  ],
  "Preet Panchal": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7383456780"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=panchalpreet090304@gmail.com"
    }
  ],
  "Ayush Garg": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9461950422"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=gargayush.2412@gmail.com"
    }
  ],
  "Kushal Kushwaha": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9594620693"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=kushalkushwaha96@gmail.com"
    }
  ],
  "Pranjal Kanodia": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9610978218"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=pranjalkanodia11@gmail.com"
    }
  ],
  "Pranjul Shukla": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/6307455279"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=captaincoro444@gmail.com"
    }
  ],
  "Sahil Sinha": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7856845083"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=sahilsinha247742@gmail.com"
    }
  ],
  "Bhuvan Raj Guguloth": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9392885490"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=bhuvanrajnaik@gmail.com"
    }
  ],
  "Sai Chetan Kumar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7702026854"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=chetankumar10021@gmail.com"
    }
  ],
  "Deepak Mina": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8696784547"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=deepak2020ibs@gmail.com"
    }
  ],
  "Sidharth Reddy": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8639775835"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/sidharth-reddy-552596336/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/sidharthreddy_32?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=sidharthreddy32@gmail.com"
    }
  ],
  "Mayank Singh": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8814943708"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/mayank-singh-8b9199303/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/mayanksingh_08?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=ms9421837@gmail.com"
    }
  ],
  "Jyoti": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/6367363093"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/jyoti-bhamboo-8955a5290/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/__jyoti_bhamboo__/?utm_source=ig_web_button_share_sheet"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=jyotibhamboo2518@gmail.com"
    }
  ],
  "Namanya Pant": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9004487822"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/namanya-pant/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/namanya_1239/?utm_source=ig_web_button_share_sheet"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=namanyapant2630@gmail.com"
    }
  ],
  "Saksham Aggarwal": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7304368246"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/saksham-aggarwal-a35648293/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/sakshamm_1301/?utm_source=ig_web_button_share_sheet"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=sakshamaggarwal.shaurya.iitkgp@gmail.com"
    }
  ],
  "Navadeep Nandedapu": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8179575909"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/navadeep-nandedapu-b7b592291/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/navadeep._.7241?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=navadeepnandedapu@gmail.com"
    }
  ],
  "Yayavaram Vivekadithya": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8328271915"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/vivekadithya-yayavaram-8002a2291/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/vivekadithya7/?utm_source=ig_web_button_share_sheet"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=vivekadithyayayavaram2005@gmail.com"
    }
  ],
  "Surekha": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/6350603609"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/surekha-b055392ab/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/surekhabaindha/?utm_source=ig_web_button_share_sheet"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=surekha.shaurya.iitkgp@gmail.com"
    }
  ],
  "Sabita Kumari": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/7667578864"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/sabita-marandi-75b06b28b/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/sabbimarandi/?utm_source=ig_web_button_share_sheet"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=sabita.shauryaiitkgp23@gmail.com"
    }
  ],
  "Budida Abhinav": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/6300068771"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/abhinav-budida-8958492b5/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/abhinav._.7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=abhinavbudida.shaurya.iitkgp@gmail.com"
    }
  ],
  "MS Karthik": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9845916377"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/ms-karthik-a242b4291/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/ms.karthik_01/?utm_source=ig_web_button_share_sheet"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=mskarthik.shaurya.iitkgp@gmail.com"
    }
  ],
  "Rupali Hingankar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8830220583"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/rupali-hingankar-7363ba288/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/hingankarrupali?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=rupalihingankar.shaurya.iitkgp@gmail.com"
    }
  ],
  "Shivraj Gulve": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8421115807"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/shivraj-gulve-6583952bb/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/_shiv.__07_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=shivrajgulve.shaurya.iitkgp@gmail.com"
    }
  ],
  "Vangala Akshay Reddy": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8309403808"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/vangalaakshayreddy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/vangala_akshay_reddy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=akshayreddy.shaurya.iitkgp@gmail.com"
    }
  ],
  "Ayush Kumar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9304203012"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/ayush-kumar-519a6328b/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/ayush018_kr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=ayushkr092004@gmail.com"
    }
  ],
  "Akash Kolanti": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9542309116"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/akash-kolanti-0a063b281/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/akashk__21?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=akash.k2104@gmail.com"
    }
  ],
  "Sauparna Das": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9330578069"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/sauparnadas/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/dassauparna?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=sauparnadas@gmail.com"
    }
  ],
  "Ananye Kachhap": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9931319395"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/ananye-kachhap-513263288/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/sh_r_e_dd_e_r?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=ajitkachhap005@kgpian.iitkgp.ac.in"
    }
  ],
  "Jeet Anand": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/9122233011"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/jeet-anand-950493284/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/jeetan.and?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=jeetaana123@gmail.com"
    }
  ],
  "Rasamalla Charan Prakash": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8309483130"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/rasamalla-charan-prakash-71256728a/"
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=rasamallacharanprakash0@gmail.com"
    }
  ],
  "Nudvip Tale": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8142999166"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/nudvip-tale-a9904a312/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/nudvip_tale?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=nudviptale@gmail.com"
    }
  ],
  "Annangi Neeraj Kumar": [
    {
      "label": "WhatsApp",
      "href": "https://wa.me/8328003149"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/annangi-neeraj-kumar-4ab546259/"
    },
    {
      "label": "Instagram",
      "href": "https://www.instagram.com/neerajkumar_809?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      "label": "Email",
      "href": "https://mail.google.com/mail/?view=cm&to=neerajannangi4@gmail.com"
    }
  ]
};

const editionDepartments: Record<Edition, Department[]> = {
  "2023": team2023Departments,
  "2024": historicalDepartments,
  "2025": departments,
  "2026": departments2026,
};

// Contact SVG Icons
function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function getContactIcon(label: string) {
  const normalized = label.toLowerCase();
  if (normalized.includes('whatsapp')) return <WhatsAppIcon />;
  if (normalized.includes('linkedin')) return <LinkedInIcon />;
  if (normalized.includes('instagram')) return <InstagramIcon />;
  if (normalized.includes('email') || normalized.includes('mail')) return <EmailIcon />;
  if (normalized.includes('call') || normalized.includes('phone')) return <PhoneIcon />;
  return null;
}

function getMemberContactLinks(member: TeamMember) {
  const existing = contactLinks[member.name];
  const email =
    historicalEmails[member.name] ||
    `${member.name.toLowerCase().replace(/[^a-z0-9]/g, "")}@shauryaiitkgp.in`;

  if (existing && existing.length > 0) {
    const hasPhone = existing.some((l) => l.label.toLowerCase() === "call");
    const hasWA = existing.some((l) => l.label.toLowerCase() === "whatsapp");
    const hasLI = existing.some((l) => l.label.toLowerCase() === "linkedin");
    const hasIG = existing.some((l) => l.label.toLowerCase() === "instagram");
    const hasEmail = existing.some((l) => l.label.toLowerCase() === "email");

    const links = [...existing];
    if (!hasPhone && member.phone) {
      links.push({ label: "Call", href: `tel:${member.phone}` });
    }
    if (!hasWA && member.phone) {
      links.push({ label: "WhatsApp", href: `https://wa.me/${member.phone.replace(/[^0-9]/g, "")}` });
    }
    if (!hasLI) {
      links.push({ label: "LinkedIn", href: "https://www.linkedin.com/company/shaurya-iit-kharagpur/" });
    }
    if (!hasIG) {
      links.push({ label: "Instagram", href: "https://www.instagram.com/shaurya_iitkgp/" });
    }
    if (!hasEmail) {
      links.push({ label: "Email", href: `https://mail.google.com/mail/?view=cm&to=${email}` });
    }
    return links;
  }

  // Fallback / 2026 demo template with all 5 links
  const cleanPhone = member.phone ? member.phone.replace(/[^0-9]/g, "") : "919876543210";
  return [
    { label: "Call", href: `tel:${member.phone || "+919876543210"}` },
    { label: "WhatsApp", href: `https://wa.me/${cleanPhone}` },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/shaurya-iit-kharagpur/" },
    { label: "Instagram", href: "https://www.instagram.com/shaurya_iitkgp/" },
    { label: "Email", href: `https://mail.google.com/mail/?view=cm&to=${email}` },
  ];
}

export default function TeamsPage() {
  const [activeEdition, setActiveEdition] = useState<Edition>("2026");
  const [phoneModal, setPhoneModal] = useState<{ name: string; phone: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const activeDepartments = editionDepartments[activeEdition];

  const handlePhoneClick = (e: React.MouseEvent, name: string, phone: string) => {
    // If on mobile device with touch / tel support, let native tel: handle it if user preferred,
    // otherwise show popup dialog for laptop / desktop users.
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      typeof navigator !== "undefined" ? navigator.userAgent : ""
    );

    if (!isMobile) {
      e.preventDefault();
      setPhoneModal({ name, phone });
      setCopied(false);
    }
  };

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  const totalMembers = activeDepartments.reduce(
    (acc, dept) => acc + dept.members.length,
    0,
  );

  let memberGlobalIndex = 0;

  return (
    <main className={styles.page}>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Gallery", href: "/gallery" },
          { label: "Sponsors", href: "/sponsors" },
          { label: "Matches", href: "/matches" },
          { label: "Teams", href: "/teams" },
        ]}
      />

      <div className={styles.pageTexture} aria-hidden="true" />
      <section className={styles.teamHero}>
        <p className={styles.kicker}>SHAURYA {activeEdition}</p>
        <h1>Our Team</h1>
        <p className={styles.heroCopy}>
          The minds, hands, and hearts behind the biggest sports festival at IIT
          Kharagpur.
        </p>
        <label className={styles.editionControl}>
          <span>Edition</span>
          <select
            aria-label="Team edition"
            value={activeEdition}
            onChange={(event) => {
              const edition = event.target.value as Edition;
              setActiveEdition(edition);
            }}
          >
            <option value="2026">2026</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </label>
      </section>

      <section className={styles.directory} aria-label="Team members">
        {activeDepartments.length === 0 ? (
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>{activeEdition} / ROSTER PENDING</p>
              <h2>Shaurya {activeEdition} Team</h2>
            </div>
            <p>The updated 2026 team will be published here soon.</p>
          </div>
        ) : (
          <div className={styles.allTeamsContainer}>
            {activeDepartments.map((department) => (
              <div key={department.name} className={styles.departmentGroup}>
                <div className={styles.sectionHeading}>
                  <div>
                    {/* <p className={styles.kicker}>
                      {activeEdition} /{" "}
                      {String(department.members.length).padStart(2, "0")}{" "}
                      MEMBERS
                    </p> */}
                    <h2>{department.name}</h2>
                  </div>
                  <p>Meet the people turning ambition into action.</p>
                </div>

                <div className={styles.memberGrid}>
                  {department.members.map((member) => {
                    memberGlobalIndex += 1;
                    return (
                      <article className={styles.memberCard} key={member.name}>
                        <div className={styles.memberImageWrap}>
                          <div className={styles.imageInner}>
                            <img
                              src={member.image}
                              alt={member.name}
                              className={styles.memberImage}
                              onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = `/teams/team${activeEdition}/default.png`;
                              }}
                            />
                            <div className={styles.hoverOverlay}>
                              <div className={styles.iconBar}>
                                {getMemberContactLinks(member).map((link) => {
                                  const isPhone = link.label.toLowerCase() === "call";
                                  return (
                                    <a
                                      key={link.label}
                                      className={styles.iconBtn}
                                      href={link.href}
                                      title={`${link.label} - ${member.name}`}
                                      aria-label={`${link.label} - ${member.name}`}
                                      target={isPhone ? undefined : "_blank"}
                                      rel={isPhone ? undefined : "noreferrer"}
                                      onClick={
                                        isPhone
                                          ? (e) => handlePhoneClick(e, member.name, member.phone)
                                          : undefined
                                      }
                                    >
                                      {getContactIcon(link.label)}
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <img
                            src="/cardborder.png"
                            alt=""
                            aria-hidden="true"
                            className={styles.imageBorder}
                          />
                        </div>
                        <div className={styles.memberInfo}>
                          <p className={styles.memberDepartment}>
                            {department.name}
                          </p>
                          <h3>{member.name}</h3>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className={styles.footer}>
        <span>Shaurya {activeEdition}</span>
        <span>IIT Kharagpur</span>
      </footer>

      {phoneModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setPhoneModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="phone-modal-title"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={() => setPhoneModal(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className={styles.modalIconWrap}>
              <PhoneIcon />
            </div>
            <h4 id="phone-modal-title">{phoneModal.name}</h4>
            <p className={styles.modalPhoneNum}>{phoneModal.phone}</p>
            <div className={styles.modalActions}>
              <a
                href={`tel:${phoneModal.phone}`}
                className={styles.modalCallBtn}
              >
                Call Now
              </a>
              <button
                type="button"
                className={styles.modalCopyBtn}
                onClick={() => copyToClipboard(phoneModal.phone)}
              >
                {copied ? "Copied! ✓" : "Copy Number"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
