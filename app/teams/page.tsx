"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./teams.module.css";
import heads2023Data from "@/public/assets/heads2023_24.json";
import heads2024Data from "@/public/assets/heads2024_25.json";
import heads2025Data from "@/public/assets/heads2025_26.json";
import heads2026Data from "@/public/assets/heads2026_27.json";

type TeamMember = {
  name: string;
  phone: string;
  image: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
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

type RawHeadItem = {
  name: string;
  number?: string;
  phone?: string;
  email?: string;
  image?: string;
  photo?: string;
  linkedin?: string;
  instagram?: string;
};

function parseHeadsJson(jsonData: Record<string, RawHeadItem[]>): Department[] {
  return Object.entries(jsonData).map(([deptName, members]) => ({
    name: deptName,
    members: members.map((m) => ({
      name: m.name,
      phone: m.phone || m.number || "",
      image: m.image || m.photo || "",
      email: m.email || "",
      linkedin: m.linkedin || "",
      instagram: m.instagram || "",
    })),
  }));
}

const team2023Departments = parseHeadsJson(heads2023Data as Record<string, RawHeadItem[]>);
const historicalDepartments = parseHeadsJson(heads2024Data as Record<string, RawHeadItem[]>);
const departments = parseHeadsJson(heads2025Data as Record<string, RawHeadItem[]>);
const departments2026 = parseHeadsJson(heads2026Data as Record<string, RawHeadItem[]>);


const historicalEmails: Record<string, string> = {
  "S S V K S S Jyothiraditya": "jyothiradityas@kgpian.iitkgp.ac.in",
  "Shreya Mishra": "mshreya1210@gmail.com",
  "Soujanaya Nayak": "soujanya@kgpian.iitkgp.ac.in",
  "Jatin Motwani": "jatinmotwani000@gmail.com",
  "Lokesh Agarwala": "lokeshagarwala30@gmail.com",
  "Archie Avirati": "Aviratiarchie@gmail.com",
  Himanshu: "golusai9465@gmail.com",
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
  Prajay: "mudavathprajay@gmail.com",
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
  Jyoti: "jyotibhamboo2518@gmail.com",
  "Namanya Pant": "namanyapant2630@gmail.com",
  "Saksham Aggarwal": "sakshamaggarwal.shaurya.iitkgp@gmail.com",
  "Navadeep Nandedapu": "navadeepnandedapu@gmail.com",
  "Yayavaram Vivekadithya": "vivekadithyayayavaram2005@gmail.com",
  Surekha: "surekha.shaurya.iitkgp@gmail.com",
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
  "Annangi Neeraj Kumar": "neerajannangi4@gmail.com",
};

const contactLinks: Record<string, ContactLink[]> = {
  Daksh: [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=phogatha@gmail.com" },
  ],
  "Aparajita Sarkar": [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=aparajitasarkar2709@gmail.com" },
  ],
  "Vejendla Vaishnavi": [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vaishnavi-vejendla-194527336?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { label: "Instagram", href: "https://www.instagram.com/vaishnavi_3106?stkn=MXY3dzlhc2Y4dTBhOA==" },
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=vejendlavaishnavi15@gmail.com" },
  ],
  "Chadaram Mohith": [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=Mohithchadaram2@gmail.com" },
  ],
  "Abhijit Roy": [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhijit-roy-695402326" },
    { label: "Instagram", href: "https://www.instagram.com/__abhijit.roy__/" },
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=royabhijit59478@gmail.com" },
  ],
  "Angothu Gopichand": [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=Sirisrinivas464@gmail.com" },
  ],
  "Sutirtha Jana": [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=sutirthajana107@gmail.com" },
  ],
  "Aravind Naik": [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=aravindnaikkethavth2@gmail.com" },
  ],
  "Premnadh Reddy": [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=premnadh.akkala@gmail.com" },
  ],
  "Sativada Karthik": [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/karthik-sativada" },
    { label: "Instagram", href: "https://www.instagram.com/karthik.sativada?stkn=YmN1MHVodTB3b21n" },
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=1647karthik@gmail.com" },
  ],
  "Ankit Debnath": [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=debnathankit52@gmail.com" },
  ],
  "Rohit Bej": [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mr-rohit-/" },
    { label: "Instagram", href: "https://www.instagram.com/imrohitbej/" },
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=rohit098bej@gmail.com" },
  ],
  "S S V K S S Jyothiraditya": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7675007236",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=jyothiradityas@kgpian.iitkgp.ac.in",
    },
  ],
  "Shreya Mishra": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9475621028",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=mshreya1210@gmail.com",
    },
  ],
  "Soujanaya Nayak": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7506136455",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=soujanya@kgpian.iitkgp.ac.in",
    },
  ],
  "Jatin Motwani": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9424533623",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=jatinmotwani000@gmail.com",
    },
  ],
  "Lokesh Agarwala": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7728018715",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=lokeshagarwala30@gmail.com",
    },
  ],
  "Archie Avirati": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7024385271",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=Aviratiarchie@gmail.com",
    },
  ],
  Himanshu: [
    {
      label: "WhatsApp",
      href: "https://wa.me/7348701571",
    },
    {
      label: "Email",
      href: "https://www.shauryaiitkgp.in/",
    },
  ],
  "Nikhil Bharat Rajani": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7020096806",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=nikhilrajani309@gmail.com",
    },
  ],
  "Priyanshu Shaw": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9073808624",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=priyanshushaw2807@gmail.com",
    },
  ],
  "Rishi Dhoble": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9205704432",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=Rishi.dhoble03@gmail.com",
    },
  ],
  "Atharva Chilwarwar": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7796557031",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=Chilwarwar.atharva@gmail.com",
    },
  ],
  "Prashant Tripathi": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7398149866",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=prashant01510@gmail.com",
    },
  ],
  "S. Siddharth": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9789422444",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=Siddharthsabhari@gmail.com",
    },
  ],
  "Yashwanth Kumar Kallepalli": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9347865123",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=yashwanth.18.iitkgp@gmail.com",
    },
  ],
  "Aditya G Gaikwad": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9980090567",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=adityagaikwad.iitkgp@gmail.com",
    },
  ],
  "Akshat Dilip Lade": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9920378336",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=akshatlade@gmail.com",
    },
  ],
  "Chalamalla Sahithi": [
    {
      label: "WhatsApp",
      href: "https://www.shauryaiitkgp.in/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=sahithi.chalamalla@gmail.com",
    },
  ],
  "Nimish Gadge": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9819755685",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=nimishgadge98@gmail.com",
    },
  ],
  Prajay: [
    {
      label: "WhatsApp",
      href: "https://wa.me/9391738281",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=mudavathprajay@gmail.com",
    },
  ],
  "Raghuvar Srivastava": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9811097343",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=raghuvarsrivastava@gmail.com",
    },
  ],
  "Akula Tejaswini": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7396066011",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=akulatejaswini23@gmail.com",
    },
  ],
  "Neeraj Patel": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7987752913",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=neeraj.patel2703@gmail.com",
    },
  ],
  "Rohan R. Barsagade": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8263932614",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=therohan84@gmail.com",
    },
  ],
  "Somyajeet Gupta Chowdhury": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9113340204",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=isomya13@gmail.com",
    },
  ],
  "Gauransh Agarwal": [
    {
      label: "WhatsApp",
      href: "https://www.shauryaiitkgp.in/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=gauransh.iitkgp@gmail.com",
    },
  ],
  "Malla Harshavardhan": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9392551557",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=harshavardhanmalla1729@gmail.com",
    },
  ],
  "Shubham Dilawar": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9893662396",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=shubhamdilawar23@gmail.com",
    },
  ],
  "Vaibhav Joshi": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9535734903",
    },
  ],
  "Anushka Singh": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9335225142",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=asingh29052003@gmail.com",
    },
  ],
  "Dhiya Mariam Thomas": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8851996747",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=dhiyamt2003@gmail.com",
    },
  ],
  "Jayansh Maheshwari": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8655701340",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=jayanshmaheshwari@gmail.com",
    },
  ],
  "Tejashwi Kumar Jha": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8102400147",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=tkjha2468@gmail.com",
    },
  ],
  "Jival Chorawala": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7378655738",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=jivalchorawala13@gmail.com",
    },
  ],
  "Chavi Agarwal": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8801027905",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=agarwalchavi04@gmail.com",
    },
  ],
  "Brij Patel": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7698817843",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=brijpatel475@gmail.com",
    },
  ],
  "Pranjal Paliwal": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7988270765",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=pranjalpaliwal.05@kgpian.iitkgp.ac.in",
    },
  ],
  "Indrajeet Kumar": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7275282141",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=knp.indrajeetkumar@gmail.com",
    },
  ],
  "Sudhanshu Kumar": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9931682446",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=mrsudhanshu756@gmail.com",
    },
  ],
  "Matthews Bonthu": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8688324518",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=matthews27@kgpian.iitkgp.ac.in",
    },
  ],
  "Hemant Kamble": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9372838349",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=hemantsoham111@gmail.com",
    },
  ],
  "Tuhsin Suhana Rahman": [
    {
      label: "WhatsApp",
      href: "https://wa.me/6002515029",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=tuhsin13@gmail.com",
    },
  ],
  "Rakesh Tella": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9640519184",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=rakeshtella8@gmail.com",
    },
  ],
  "Shaurya Pratap Singh": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8003192648",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=shaurya29@kgpian.iitkgp.ac.in",
    },
  ],
  "Samrat Koushik Shaw": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7047740198",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=shawkoushik8776@gmail.com",
    },
  ],
  "Preet Panchal": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7383456780",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=panchalpreet090304@gmail.com",
    },
  ],
  "Ayush Garg": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9461950422",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=gargayush.2412@gmail.com",
    },
  ],
  "Kushal Kushwaha": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9594620693",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=kushalkushwaha96@gmail.com",
    },
  ],
  "Pranjal Kanodia": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9610978218",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=pranjalkanodia11@gmail.com",
    },
  ],
  "Pranjul Shukla": [
    {
      label: "WhatsApp",
      href: "https://wa.me/6307455279",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=captaincoro444@gmail.com",
    },
  ],
  "Sahil Sinha": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7856845083",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=sahilsinha247742@gmail.com",
    },
  ],
  "Bhuvan Raj Guguloth": [
    {
      label: "WhatsApp",
      href: "https://wa.me/9392885490",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=bhuvanrajnaik@gmail.com",
    },
  ],
  "Sai Chetan Kumar": [
    {
      label: "WhatsApp",
      href: "https://wa.me/7702026854",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=chetankumar10021@gmail.com",
    },
  ],
  "Deepak Mina": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8696784547",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=deepak2020ibs@gmail.com",
    },
  ],
  "Sidharth Reddy": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8639775835",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/8814943708",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mayank-singh-8b9199303/",
    },
    {
      label: "Instagram",
      href: "https://www.shauryaiitkgp.in/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=ms9421837@gmail.com",
    },
  ],
  Jyoti: [
    {
      label: "WhatsApp",
      href: "https://wa.me/6367363093",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/9004487822",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/namanya-pant/",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/7304368246",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/saksham-aggarwal-a35648293/",
    },
    {
      label: "Instagram",
      href: "https://www.shauryaiitkgp.in/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=sakshamaggarwal.shaurya.iitkgp@gmail.com",
    },
  ],
  "Navadeep Nandedapu": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8179575909",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/8328271915",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/6350603609",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/7667578864",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/6300068771",
    },
    {
      label: "LinkedIn",
      href: "https://www.shauryaiitkgp.in/",
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
    {
      label: "WhatsApp",
      href: "https://wa.me/9845916377",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/8830220583",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/8421115807",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shivraj-gulve-6583952bb/",
    },
    {
      label: "Instagram",
      href: "https://www.shauryaiitkgp.in/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=shivrajgulve.shaurya.iitkgp@gmail.com",
    },
  ],
  "Vangala Akshay Reddy": [
    {
      label: "WhatsApp",
      href: "https://wa.me/8309403808",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/9304203012",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/9542309116",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/9330578069",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sauparnadas/",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/9931319395",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/9122233011",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/8309483130",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/8142999166",
    },
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
    {
      label: "WhatsApp",
      href: "https://wa.me/8328003149",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/annangi-neeraj-kumar-4ab546259/",
    },
    {
      label: "Instagram",
      href: "https://www.shauryaiitkgp.in/",
    },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=neerajannangi4@gmail.com",
    },
  ],
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
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function getContactIcon(label: string) {
  const normalized = label.toLowerCase();
  if (normalized.includes("whatsapp")) return <WhatsAppIcon />;
  if (normalized.includes("linkedin")) return <LinkedInIcon />;
  if (normalized.includes("instagram")) return <InstagramIcon />;
  if (normalized.includes("email") || normalized.includes("mail"))
    return <EmailIcon />;
  if (normalized.includes("call") || normalized.includes("phone"))
    return <PhoneIcon />;
  return null;
}

function isValidSocialUrl(url?: string): boolean {
  if (!url || !url.trim()) return false;
  const trimmed = url.trim();
  if (
    trimmed === "https://www.shauryaiitkgp.in/" ||
    trimmed === "https://www.shauryaiitkgp.in" ||
    trimmed === "https://www.linkedin.com/company/shaurya-iit-kharagpur/" ||
    trimmed === "https://www.instagram.com/shaurya_iitkgp/"
  ) {
    return false;
  }
  return true;
}

function getMemberContactLinks(member: TeamMember) {
  const existing = contactLinks[member.name] || [];
  const links: ContactLink[] = [];

  const phone = member.phone || "";
  const cleanPhone = phone.replace(/[^0-9]/g, "");

  // 1. Call
  const existingCall = existing.find(
    (l) => l.label.toLowerCase() === "call" && isValidSocialUrl(l.href),
  );
  if (existingCall) {
    links.push(existingCall);
  } else if (phone) {
    links.push({ label: "Call", href: `tel:${phone}` });
  }

  // 2. WhatsApp
  const existingWA = existing.find(
    (l) => l.label.toLowerCase() === "whatsapp" && isValidSocialUrl(l.href),
  );
  if (existingWA) {
    links.push(existingWA);
  } else if (cleanPhone) {
    links.push({
      label: "WhatsApp",
      href: `https://wa.me/${cleanPhone}`,
    });
  }

  // 3. LinkedIn
  const existingLI = existing.find(
    (l) => l.label.toLowerCase() === "linkedin" && isValidSocialUrl(l.href),
  );
  if (isValidSocialUrl(member.linkedin)) {
    links.push({ label: "LinkedIn", href: member.linkedin!.trim() });
  } else if (existingLI) {
    links.push(existingLI);
  }

  // 4. Instagram
  const existingIG = existing.find(
    (l) => l.label.toLowerCase() === "instagram" && isValidSocialUrl(l.href),
  );
  if (isValidSocialUrl(member.instagram)) {
    links.push({ label: "Instagram", href: member.instagram!.trim() });
  } else if (existingIG) {
    links.push(existingIG);
  }

  // 5. Email
  const existingEmail = existing.find(
    (l) => l.label.toLowerCase() === "email" && isValidSocialUrl(l.href),
  );
  const emailAddr =
    (isValidSocialUrl(member.email) ? member.email!.trim() : "") ||
    historicalEmails[member.name] ||
    "";

  if (existingEmail) {
    links.push(existingEmail);
  } else if (emailAddr && emailAddr.includes("@")) {
    links.push({
      label: "Email",
      href: `https://mail.google.com/mail/?view=cm&to=${emailAddr}`,
    });
  }

  return links;
}

export default function TeamsPage() {
  const [activeEdition, setActiveEdition] = useState<Edition>("2026");
  const [phoneModal, setPhoneModal] = useState<{
    name: string;
    phone: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const activeDepartments = editionDepartments[activeEdition];

  const handlePhoneClick = (
    e: React.MouseEvent,
    name: string,
    phone: string,
  ) => {
    // If on mobile device with touch / tel support, let native tel: handle it if user preferred,
    // otherwise show popup dialog for laptop / desktop users.
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        typeof navigator !== "undefined" ? navigator.userAgent : "",
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
                                  const isPhone =
                                    link.label.toLowerCase() === "call";
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
                                          ? (e) =>
                                              handlePhoneClick(
                                                e,
                                                member.name,
                                                member.phone,
                                              )
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
      <Footer />
    </main>
  );
}