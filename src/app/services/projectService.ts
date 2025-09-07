import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projects: Project[] = [
    {
      id: 1,
      category: 'DATA ANALYSIS & MACHINE LEARNING',
      title: 'WhatsApp Chat Analysis',
      description: `<h2 class="text-3xl font-semibold">Description</h2>
<p>A web-based tool built with Python Flask that analyzes WhatsApp chat history to detect communication patterns and classify chats into positive or negative sentiments.</p>

<h2 class="text-3xl font-semibold">🔑 Core Features</h2>

<ul>
  <li><b>Message Count Analysis</b> – Shows number of messages sent by each participant and helps find the most active person.</li>
  <li><b>Sentiment Analysis</b> – Detects whether a person’s messages are generally positive or negative and gives a simple mood trend of the chat.</li>
  <li><b>Peak Messaging Time</b> – Finds the hours of the day when chats are most active and shows chat activity patterns.</li>
  <li><b>Participant Count</b> – Displays total number of people in the group chat.</li>
  <li><b>Most Engaging Person</b> – Identifies the participant who interacts the most with others.</li>
</ul>


<h2 class="text-3xl font-semibold">📊 Visualization</h2>
<ul>
Used charts and graphs (maybe with Matplotlib / Plotly / Chart.js) to represent:

<li>Messages per user</li>

<li>Sentiment distribution (positive vs negative)</li>

<li>Peak message hours</li>

<li>Engagement ranking</li>
</ul>
<h2 class="text-3xl font-semibold">🛠 Tech Stack</h2>
<ul>
<li>Python Flask → Backend & API</li>

<li>Natural Language Processing (NLP) (e.g., TextBlob or NLTK) → Sentiment analysis</li>

<li>Matplotlib / Plotly / Chart.js → Charts & visualizations</li>

HTML + CSS + JS (frontend) → For displaying results
<ul>
      `,
      image: 'https://i.ibb.co/skJ7D21/chatanalysis.jpg',
      bannerImage: ''
    },
    {
      id: 2,
      category: 'COMPUTER VISION',
      title: 'Smart Parking System',
      description: 'A computer vision-based project that detects available parking spaces and records vehicle entry and exit times.',
      image: 'https://i.ibb.co/jv01pv4R/car-parking.png',
      bannerImage: ''
    },
    {
      id: 3,
      category: 'WEB DEVELOPMENT',
      title: 'Car Rental System',
      description: `<h2 class="text-2xl font-semibold">Description</h2>
<p>Dubai Car Rental Management System to keep track of fleet and staff - Complete Admin Dashboard.</p>

<h2 class="text-2xl font-semibold">🔑 Core Features</h2>

<ul>
  <li><b>Car Analysis</b> – Shows the number of cars, including those available and under service.</li>
  <li><b>Staff Analysis</b> – Tracks staff records, attendance, and related details.</li>
  <li><b>Admin Dashboard</b> – Displays cash inflow and outflow with filters such as date and specific cars.</li>
  <li><b>Task Management</b> – Assigns tasks to staff such as car maintenance, refueling, and driver management.</li>
  <li><b>Car Financials</b> – Tracks car lease details, tokens, and maintenance costs.</li>
  <li><b>Car Booking</b> – Provides a booking link for customers to reserve cars based on their requirements.</li>
</ul>

<h2 class="text-2xl font-semibold">📊 Visualization</h2>
<ul>
  <li>Used charts and graphs</li>
  <li>Income per car</li>
  <li>Total cost spent on maintenance</li>
  <li>Order frequency</li>
  <li>Staff attendance</li>
</ul>

<h2 class="text-2xl font-semibold">🛠 Tech Stack</h2>
<ul>
  <li>.NET (Code First approach, LINQ queries) → Backend & API</li>
  <li>AngularJS → Frontend</li>
  <li>SQL → Database</li>
<ul>
`,
      image: 'https://i.ibb.co/bR8M6mnV/fleetmanagmentsystem.png',
      bannerImage: ''
    },
    {
      id: 4,
      category: 'COMPUTER VISION & HR',
      title: 'Attendance Management System',
      description: `
      <h2 class="text-2xl font-semibold">Description</h2>
<p>Dubai Car Rental Management System to keep track of fleet and staff - Complete Admin Dashboard.</p>

<h2 class="text-2xl font-semibold">🔑 Core Features</h2>

<ul style="Padding-left: 200px;">
  <li><b>Automated Door Access</b> – Servo motor unlocks the door only when a registered face is recognized, ensuring secure access to the classroom.</li>
  <li><b>Facial Recognition</b> – Advanced face detection algorithms identify students and staff with high accuracy, even in varying light conditions..</li>
  <li><b>Time Tracking</b> – Precisely records entry and exit times, automatically flagging late arrivals based on predefined schedule parameters..</li>
  <li><b>Attendance Analytics</b> – Comprehensive reporting on attendance patterns, punctuality trends, and individual student records..</li>
  <li><b>Data Export</b> – Export attendance records to CSV or Excel format for further analysis or integration with other systems..</li>
  <li><b>Real-time Alerts</b> – Instant notifications for tardiness, absences, or other critical events, helping teachers maintain discipline and respond promptly to issues.</li>
</ul>

<h2 class="text-2xl font-semibold">📊 Data Flow Process</h2>
<ul>
  <li>1) User approaches the door</li>
  <li>2) Camera captures face image</li>
  <li>3) System verifies against database</li>
  <li>4) If match found, door unlocks</li>
  <li>5) Attendance recorded with timestamp</li>
  <li>6) Alerts generated for tardiness or absences</li>
</ul>

<h2 class="text-2xl font-semibold">🛠 Tech Stack</h2>
<ul>
  <li>.Python → Backend & API</li>
  <li>Flask → Frontend</li>
  <li>MySQL → Database</li>
  <li>Python Library → Face Detection</li>
<ul>
`,
      image: 'https://i.ibb.co/JWcKJfzm/AMS.png',
      bannerImage: ''
    },
    {
      id: 5,
      category: 'HEALTHCARE IT',
      title: 'EHR Systems',
      description: `
      <h2 class="text-2xl font-semibold">Description</h2>
<p>This was a big EHR system I worked as a Lead for some modules explained following.</p>

<h2 class="text-2xl font-semibold">🔑 Core Features</h2>

<ul>
  <li><b>Fax Management</b> – Shows the number of cars, including those available and under service.</li>
  <li><b>Flow Sheet</b> – Tracks staff records, attendance, and related details.</li>
  <li><b>Document Manager</b> – Displays cash inflow and outflow with filters such as date and specific cars.</li>
  <li><b>Appointment Sceduling</b> – Assigns tasks to staff such as car maintenance, refueling, and driver management.</li>
</ul>

<h2 class="text-2xl font-semibold">📊 Visualization</h2>
<ul>
  <li>Real time faxes incoming</li>
  <li>User can see the Fax Docs and edit them and save them in Document Manager</li>
  <li>Sceduling of appointment with doctors and resources</li>
  <li>Flowsheet is used by doctors to record patient data</li>
  <li>Document manager is used to manage documents from all over the EHR</li>
</ul>

<h2 class="text-2xl font-semibold">🛠 Tech Stack</h2>
<ul>
  <li>.NET (DB First approach,Microservices,Repository Pattern) → Backend & API</li>
  <li>Angular(16,17,18) → Frontend(Reactive Forms,Micro Frontends)</li>
  <li>SQL → Database</li>
<ul>
`,
      image: 'https://i.ibb.co/G4ydBKmq/alfamd.png',
      bannerImage: ''
    },
    {
      id: 6,
      category: 'DESKTOP & SECURITY',
      title: 'Folder Lock System',
      description: `
      <h2 class="text-2xl font-semibold">Description</h2>
<p>This project is a desktop application that allows users to lock and unlock folders on their computer.</p>

<h2 class="text-2xl font-semibold">🔑 Core Features</h2>

<ul>
  <li><b>Encrypted Data</b> – The data is present in encrypted form and can only be decrypted using a password.</li>
  <li><b>Secure backup</b> – The data is backed up to a secure location and can be restored if needed.</li>
  <li><b>Secure deletion</b> – The data is deleted from the computer and cannot be recovered.</li>
  <li><b>Protect USB</b> – This feature is used to implement the password on the USB.</li>
</ul>

<h2 class="text-2xl font-semibold"> Tech Stack</h2>
<ul>
  <li>C++ → Backend & API used for encryption and decryption</li>
  <li>htmlayout → Frontend</li>
<ul>
`,
      image: 'https://i.ibb.co/KcffxWDX/folderloc.png',
      bannerImage: ''
    }
  ];

  get projects(): Project[] {
    return this._projects;
  }
}
