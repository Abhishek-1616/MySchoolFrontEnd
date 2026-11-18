// All copy below is PLACEHOLDER marketing content. Replace freely.
import {
  GraduationCap, UserPlus, CalendarCheck, Wallet, ClipboardList, CalendarClock,
  Presentation, MessagesSquare, NotebookPen, Bus, Library, BarChart3,
  MousePointerClick, Clock, ShieldCheck, Activity, Building2, School, Users, Baby,
} from "lucide-react";

export const brand = { name: "Campusly", email: "hello@campusly.example", phone: "+00 000 000 0000", address: "Your address here" };

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const schools = ["Greenfield Academy", "Riverstone School", "Oakwood International", "Sunrise Public School", "Maple Valley High", "Horizon Convent"];

export const features = [
  { icon: GraduationCap, title: "Student Information", text: "One profile per student with records, documents, history and guardians." },
  { icon: UserPlus, title: "Online Admissions", text: "Enquiry forms, application tracking and seat allotment without paperwork." },
  { icon: CalendarCheck, title: "Attendance", text: "Mark attendance in seconds and alert parents about absences automatically." },
  { icon: Wallet, title: "Fee Management", text: "Fee structures, online payments, receipts and dues reminders." },
  { icon: ClipboardList, title: "Examinations & Results", text: "Schedule exams, enter marks and publish report cards." },
  { icon: CalendarClock, title: "Timetable", text: "Build clash-free timetables and handle substitutions quickly." },
  { icon: Presentation, title: "Teacher Management", text: "Staff profiles, workloads, leave and performance in one place." },
  { icon: MessagesSquare, title: "Parent Communication", text: "Notices, messages and event updates that reach every family." },
  { icon: NotebookPen, title: "Homework & Assignments", text: "Assign work, collect submissions and give feedback online." },
  { icon: Bus, title: "Transport", text: "Routes, vehicles, drivers and student pick-up lists." },
  { icon: Library, title: "Library", text: "Catalogue, issue and return books and track late fines." },
  { icon: BarChart3, title: "Reports & Analytics", text: "Clear reports on attendance, fees and academic progress." },
];

export const whyUs = [
  { icon: MousePointerClick, title: "Easy to use", text: "Staff are productive on day one, with no long training." },
  { icon: Clock, title: "Time saving", text: "Automate attendance, fee reminders and report cards." },
  { icon: ShieldCheck, title: "Secure data", text: "Role-based access and encrypted storage for student records." },
  { icon: Activity, title: "Real-time insights", text: "Live numbers for attendance, collections and results." },
  { icon: Building2, title: "Centralised operations", text: "Every department works from the same up-to-date data." },
  { icon: MessagesSquare, title: "Better communication", text: "Teachers and parents stay connected without sharing phone numbers." },
];

export const steps = [
  { title: "Book a demo", text: "Tell us about your school and see the platform in action." },
  { title: "Set up your school", text: "We import your students, staff and fee structures." },
  { title: "Train your team", text: "Short sessions for admins, teachers and office staff." },
  { title: "Go live", text: "Invite parents and students and start running on one platform." },
];

export const solutions = [
  { icon: School, who: "School administrators", points: ["Live view of admissions, fees and attendance", "Fewer manual registers and spreadsheets", "Reports ready for management and boards"] },
  { icon: Presentation, who: "Teachers", points: ["Attendance and marks in a few taps", "Homework and class notes online", "More time for teaching, less for paperwork"] },
  { icon: Users, who: "Parents", points: ["Attendance, results and fee status at a glance", "Instant notices and messages", "Pay fees online and download receipts"] },
  { icon: Baby, who: "Students", points: ["Timetable and homework in one place", "Track marks and progress", "Access to library and resources"] },
];

export const stats = [
  { value: "500+", label: "Schools" },
  { value: "100K+", label: "Students" },
  { value: "5K+", label: "Teachers" },
  { value: "99.9%", label: "Platform availability" },
];

export const testimonials = [
  { quote: "Fee collection used to take our office a full week each term. Now most of it is done before the due date.", name: "Anita Verma", role: "Principal, Greenfield Academy" },
  { quote: "Attendance takes under a minute per class, and parents are notified straight away.", name: "Rohan Mehta", role: "Class Teacher, Riverstone School" },
  { quote: "Admissions season was calmer than ever. Every application was tracked in one place.", name: "Sara Thomas", role: "Admissions Head, Oakwood International" },
  { quote: "Report cards that took days now publish in an afternoon.", name: "Imran Qureshi", role: "Vice Principal, Maple Valley High" },
];

export const plans = [
  { name: "Basic", price: "$49", note: "per month, up to 300 students", features: ["Student information", "Attendance", "Fee management", "Parent notices", "Email support"], cta: "Get started" },
  { name: "Professional", price: "$129", note: "per month, up to 1,500 students", popular: true, features: ["Everything in Basic", "Online admissions", "Exams & report cards", "Timetable & homework", "Reports & analytics", "Priority support"], cta: "Book a free demo" },
  { name: "Enterprise", price: "Custom", note: "for large schools and groups", features: ["Everything in Professional", "Multiple campuses", "Transport & library", "Custom integrations", "Dedicated success manager"], cta: "Contact sales" },
];

export const faqs = [
  { q: "How long does implementation take?", a: "Most schools are live within two to four weeks, including data import and staff training." },
  { q: "Can you import our existing data?", a: "Yes. We import student, staff and fee data from spreadsheets so you do not start from scratch." },
  { q: "How is pricing calculated?", a: "Plans are based on student numbers and the modules you need. Enterprise pricing is custom." },
  { q: "What support do you offer?", a: "Every plan includes email support. Professional and Enterprise add priority and dedicated support." },
  { q: "Is our students' data secure?", a: "Data is encrypted, access is role-based, and each school's records are kept separate." },
  { q: "Can parents use it on their phones?", a: "Yes. The platform works on any device, so parents can check updates and pay fees from their phone." },
];
