import React from 'react'
import Card from './components/Card'
import User from './components/User'
import { Car } from 'lucide-react';

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$78/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=36099&format=png&color=000000",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=20519&format=png&color=000000",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=fO5yVwARGUEB&format=png&color=000000",
    companyName: "OpenAI",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=yqf95864UzeQ&format=png&color=000000",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=13677&format=png&color=000000",
    companyName: "Adobe",
    datePosted: "10 days ago",
    post: "Design Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://img.icons8.com/?size=100&id=18980&format=png&color=000000",
    companyName: "Stripe",
    datePosted: "1 month ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Remote",
  },
];

  return (
    <div className='parent'> 
      {jobOpenings.map(function(elem){
        return <Card brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}   />
      })}
    </div>
  )
}

export default App

