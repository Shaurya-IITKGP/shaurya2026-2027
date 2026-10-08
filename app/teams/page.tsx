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

type Edition = "2024" | "2025" | "2026";

const imageBase = "https://www.shauryaiitkgp.in/images/teams/";

const departments: Department[] = [
  {
    name: "Executive Heads",
    members: [
      {
        name: "Sidharth Reddy",
        phone: "8639775835",
        image: `${imageBase}Sidharth Reddy.PNG`,
      },
      {
        name: "Mayank Singh",
        phone: "8814943708",
        image: `${imageBase}Mayank Yadav.webp`,
      },
      { name: "Jyoti", phone: "6367363093", image: `${imageBase}jyoti.jpg` },
    ],
  },
  {
    name: "Finance Heads",
    members: [
      {
        name: "Namanya Pant",
        phone: "9004487822",
        image: `${imageBase}Namanya Pant.jpg`,
      },
      {
        name: "Saksham Aggarwal",
        phone: "7304368246",
        image: `${imageBase}Saksham Aggarwal.jpg`,
      },
    ],
  },
  {
    name: "Event Heads",
    members: [
      {
        name: "Navadeep Nandedapu",
        phone: "8179575909",
        image: `${imageBase}Navadeep.jpg`,
      },
      {
        name: "Yayavaram Vivekadithya",
        phone: "8328271915",
        image: `${imageBase}Vivek.jpg`,
      },
      {
        name: "Surekha",
        phone: "6350603609",
        image: `${imageBase}surekha.jpg`,
      },
      {
        name: "Sabita Kumari",
        phone: "7667578864",
        image: `${imageBase}sabita kumari.jpg`,
      },
      {
        name: "Budida Abhinav",
        phone: "6300068771",
        image: `${imageBase}Budida Abhinav.jpg`,
      },
      {
        name: "MS Karthik",
        phone: "9845916377",
        image: `${imageBase}MS Karthik.jpg`,
      },
    ],
  },
  {
    name: "Publicity & Marketing Heads",
    members: [
      {
        name: "Rupali Hingankar",
        phone: "8830220583",
        image: `${imageBase}rupali.jpg`,
      },
      {
        name: "Shivraj Gulve",
        phone: "8421115807",
        image: `${imageBase}Shivraj.png`,
      },
      {
        name: "Vangala Akshay Reddy",
        phone: "8309403808",
        image: `${imageBase}Akshay.jpg`,
      },
    ],
  },
  {
    name: "Sponsorship Heads",
    members: [
      {
        name: "Ayush Kumar",
        phone: "9304203012",
        image: `${imageBase}ayush.webp`,
      },
      {
        name: "Akash Kolanti",
        phone: "9542309116",
        image: `${imageBase}Akash Kolanti.jpg`,
      },
      {
        name: "Sauparna Das",
        phone: "9330578069",
        image: `${imageBase}sauparnadas.jpg`,
      },
    ],
  },
  {
    name: "Web Heads",
    members: [
      {
        name: "Ananye Kachhap",
        phone: "9931319395",
        image: `${imageBase}Ananye Kachhap.jpg`,
      },
      {
        name: "Jeet Anand",
        phone: "9122233011",
        image: `${imageBase}jeet.jpg`,
      },
    ],
  },
  {
    name: "Media and Public Relations",
    members: [
      {
        name: "Rasamalla Charan Prakash",
        phone: "8309483130",
        image: `${imageBase}Rasamalla Charan Prakash.png`,
      },
      {
        name: "Nudvip Tale",
        phone: "8142999166",
        image: `${imageBase}Nudvip Tale.jpg`,
      },
      {
        name: "Annangi Neeraj Kumar",
        phone: "8328003149",
        image: `${imageBase}Annangi Neeraj Kumar.jpg`,
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
        image: `${imageBase}Tejashwi Kumar Jha.jpg`,
      },
      {
        name: "Jival Chorawala",
        phone: "7378655738",
        image: `${imageBase}Jival Chorawala.jpeg`,
      },
      {
        name: "Chavi Agarwal",
        phone: "8801027905",
        image: `${imageBase}Chavi Agarwal.jpeg`,
      },
    ],
  },
  {
    name: "Finance Heads",
    members: [
      {
        name: "Brij Patel",
        phone: "7698817843",
        image: `${imageBase}Brij Patel.jpeg`,
      },
      {
        name: "Pranjal Paliwal",
        phone: "7988270765",
        image: `${imageBase}Pranjal Paliwal.jpeg`,
      },
    ],
  },
  {
    name: "Event Heads",
    members: [
      {
        name: "Indrajeet Kumar",
        phone: "7275282141",
        image: `${imageBase}default.png`,
      },
      {
        name: "Sudhanshu Kumar",
        phone: "9931682446",
        image: `${imageBase}Sudhanshu Kumar.jpeg`,
      },
      {
        name: "Matthews Bonthu",
        phone: "8688324518",
        image: `${imageBase}Matthews Bonthu.jpeg`,
      },
    ],
  },
  {
    name: "Publicity & Marketing Heads",
    members: [
      {
        name: "Hemant Kamble",
        phone: "9372838349",
        image: `${imageBase}Hemant Kamble.jpeg`,
      },
      {
        name: "Tuhsin Suhana Rahman",
        phone: "6002515029",
        image: `${imageBase}Tuhsin Suhana Rahman.jpeg`,
      },
      {
        name: "Rakesh Tella",
        phone: "9640519184",
        image: `${imageBase}Rakesh Tella.jpeg`,
      },
    ],
  },
  {
    name: "Sponsorship Heads",
    members: [
      {
        name: "Shaurya Pratap Singh",
        phone: "8003192648",
        image: `${imageBase}Shaurya Pratap Singh.png`,
      },
      {
        name: "Samrat Koushik Shaw",
        phone: "7047740198",
        image: `${imageBase}Samrat.jpg`,
      },
      {
        name: "Preet Panchal",
        phone: "7383456780",
        image: `${imageBase}Preet.jpeg`,
      },
    ],
  },
  {
    name: "Logistics Heads",
    members: [
      {
        name: "Ayush Garg",
        phone: "9461950422",
        image: `${imageBase}Ayush_Garg.jpg`,
      },
      {
        name: "Kushal Kushwaha",
        phone: "9594620693",
        image: `${imageBase}Kushal.jpg`,
      },
      {
        name: "Pranjal Kanodia",
        phone: "9610978218",
        image: `${imageBase}Pranjal Kanodia.jpeg`,
      },
    ],
  },
  {
    name: "Web Heads",
    members: [
      {
        name: "Pranjul Shukla",
        phone: "6307455279",
        image: `${imageBase}Pranjul_Shukla.jpg`,
      },
      {
        name: "Sahil Sinha",
        phone: "7856845083",
        image: `${imageBase}Sahil_Sinha.jpg`,
      },
    ],
  },
  {
    name: "Design and Media Heads",
    members: [
      {
        name: "Bhuvan Raj Guguloth",
        phone: "9392885490",
        image: `${imageBase}bhuvan.jpg`,
      },
      {
        name: "Sai Chetan Kumar",
        phone: "7702026854",
        image: `${imageBase}default.png`,
      },
      {
        name: "Deepak Mina",
        phone: "8696784547",
        image: `${imageBase}Deepak Mina.png`,
      },
    ],
  },
];

const editionDepartments: Record<Edition, Department[]> = {
  "2024": historicalDepartments,
  "2025": departments,
  "2026": [],
};

const historicalEmails: Record<string, string> = {
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
};

const contactLinks: Record<string, ContactLink[]> = {
  "Sidharth Reddy": [
    { label: "WhatsApp", href: "https://wa.me/8639775835" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sidharth-reddy-552596336/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/sidharthreddy_32?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=sidharthreddy32@gmail.com",
    },
  ],
  "Mayank Singh": [
    { label: "WhatsApp", href: "https://wa.me/8814943708" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mayank-singh-8b9199303/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mayanksingh_08?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=ms9421837@gmail.com",
    },
  ],
  Jyoti: [
    { label: "WhatsApp", href: "https://wa.me/6367363093" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jyoti-bhamboo-8955a5290/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/__jyoti_bhamboo__/?utm_source=ig_web_button_share_sheet",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=jyotibhamboo2518@gmail.com",
    },
  ],
  "Namanya Pant": [
    { label: "WhatsApp", href: "https://wa.me/9004487822" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/namanya-pant/" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/namanya_1239/?utm_source=ig_web_button_share_sheet",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=namanyapant2630@gmail.com",
    },
  ],
  "Saksham Aggarwal": [
    { label: "WhatsApp", href: "https://wa.me/7304368246" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saksham-aggarwal-a35648293/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/sakshamm_1301/?utm_source=ig_web_button_share_sheet",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=sakshamaggarwal.shaurya.iitkgp@gmail.com",
    },
  ],
  "Navadeep Nandedapu": [
    { label: "WhatsApp", href: "https://wa.me/8179575909" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/navadeep-nandedapu-b7b592291/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/navadeep._.7241?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=navadeepnandedapu@gmail.com",
    },
  ],
  "Yayavaram Vivekadithya": [
    { label: "WhatsApp", href: "https://wa.me/8328271915" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vivekadithya-yayavaram-8002a2291/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/vivekadithya7/?utm_source=ig_web_button_share_sheet",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=vivekadithyayayavaram2005@gmail.com",
    },
  ],
  Surekha: [
    { label: "WhatsApp", href: "https://wa.me/6350603609" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/surekha-b055392ab/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/surekhabaindha/?utm_source=ig_web_button_share_sheet",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=surekha.shaurya.iitkgp@gmail.com",
    },
  ],
  "Sabita Kumari": [
    { label: "WhatsApp", href: "https://wa.me/7667578864" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sabita-marandi-75b06b28b/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/sabbimarandi/?utm_source=ig_web_button_share_sheet",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=sabita.shauryaiitkgp23@gmail.com",
    },
  ],
  "Budida Abhinav": [
    { label: "WhatsApp", href: "https://wa.me/6300068771" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhinav-budida-8958492b5/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/abhinav._.7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=abhinavbudida.shaurya.iitkgp@gmail.com",
    },
  ],
  "MS Karthik": [
    { label: "WhatsApp", href: "https://wa.me/9845916377" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ms-karthik-a242b4291/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ms.karthik_01/?utm_source=ig_web_button_share_sheet",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=mskarthik.shaurya.iitkgp@gmail.com",
    },
  ],
  "Rupali Hingankar": [
    { label: "WhatsApp", href: "https://wa.me/8830220583" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rupali-hingankar-7363ba288/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/hingankarrupali?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=rupalihingankar.shaurya.iitkgp@gmail.com",
    },
  ],
  "Shivraj Gulve": [
    { label: "WhatsApp", href: "https://wa.me/8421115807" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shivraj-gulve-6583952bb/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/_shiv.__07_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=shivrajgulve.shaurya.iitkgp@gmail.com",
    },
  ],
  "Vangala Akshay Reddy": [
    { label: "WhatsApp", href: "https://wa.me/8309403808" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vangalaakshayreddy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/vangala_akshay_reddy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=akshayreddy.shaurya.iitkgp@gmail.com",
    },
  ],
  "Ayush Kumar": [
    { label: "WhatsApp", href: "https://wa.me/9304203012" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-kumar-519a6328b/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ayush018_kr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=ayushkr092004@gmail.com",
    },
  ],
  "Akash Kolanti": [
    { label: "WhatsApp", href: "https://wa.me/9542309116" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akash-kolanti-0a063b281/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/akashk__21?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=akash.k2104@gmail.com",
    },
  ],
  "Sauparna Das": [
    { label: "WhatsApp", href: "https://wa.me/9330578069" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sauparnadas/" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/dassauparna?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=sauparnadas@gmail.com",
    },
  ],
  "Ananye Kachhap": [
    { label: "WhatsApp", href: "https://wa.me/9931319395" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ananye-kachhap-513263288/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/sh_r_e_dd_e_r?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=ajitkachhap005@kgpian.iitkgp.ac.in",
    },
  ],
  "Jeet Anand": [
    { label: "WhatsApp", href: "https://wa.me/9122233011" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeet-anand-950493284/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/jeetan.and?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=jeetaana123@gmail.com",
    },
  ],
  "Rasamalla Charan Prakash": [
    { label: "WhatsApp", href: "https://wa.me/8309483130" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rasamalla-charan-prakash-71256728a/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=rasamallacharanprakash0@gmail.com",
    },
  ],
  "Nudvip Tale": [
    { label: "WhatsApp", href: "https://wa.me/8142999166" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nudvip-tale-a9904a312/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/nudvip_tale?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=nudviptale@gmail.com",
    },
  ],
  "Annangi Neeraj Kumar": [
    { label: "WhatsApp", href: "https://wa.me/8328003149" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/annangi-neeraj-kumar-4ab546259/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/neerajkumar_809?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=neerajannangi4@gmail.com",
    },
  ],
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

export default function TeamsPage() {
  const [activeEdition, setActiveEdition] = useState<Edition>("2025");
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
          { label: "Events", href: "/#events" },
          { label: "Gallery", href: "/gallery" },
          { label: "Sponsors", href: "/sponsors" },
          { label: "Matches", href: "/#matches" },
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
                                event.currentTarget.src = `${imageBase}default.png`;
                              }}
                            />
                            <div className={styles.hoverOverlay}>
                              <div className={styles.iconBar}>
                                {member.phone && (
                                  <a
                                    href={`tel:${member.phone}`}
                                    className={styles.iconBtn}
                                    title={`Call ${member.name}: ${member.phone}`}
                                    aria-label={`Call ${member.name}`}
                                    onClick={(e) => handlePhoneClick(e, member.name, member.phone)}
                                  >
                                    <PhoneIcon />
                                  </a>
                                )}
                                {(
                                  contactLinks[member.name] ?? [
                                    { label: "WhatsApp", href: `https://wa.me/${member.phone}` },
                                    ...(historicalEmails[member.name]
                                      ? [
                                          {
                                            label: "Email",
                                            href: `https://mail.google.com/mail/?view=cm&to=${historicalEmails[member.name]}`,
                                          },
                                        ]
                                      : []),
                                  ]
                                )
                                  .filter((link) => link.label.toLowerCase() !== "call")
                                  .map((link) => (
                                    <a
                                      className={styles.iconBtn}
                                      href={link.href}
                                      key={link.label}
                                      title={`${link.label} - ${member.name}`}
                                      aria-label={`${link.label} - ${member.name}`}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {getContactIcon(link.label)}
                                    </a>
                                  ))}
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
