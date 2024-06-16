import React from 'react'
import BorderHeading from './border-heading'
import StudentCard from './student-card'

const StudentsContainer = async() => {
  let studentList = await fetch("https://codewithsadiq.com/api/hallFrame")
  studentList = await studentList.json()
  return (
    <div>
        <BorderHeading title="Our Students"/>
        <div className='grid grid-cols-4 gap-5 p-5'>
          {studentList.data.map((student,i)=>(
            <StudentCard
             key={i} 
             name={student.name} 
             image={student.featured_image} 
             post={student.position} 
             company={student.industry}/>

          ))}
        </div>
    </div>
  )
}

export default StudentsContainer