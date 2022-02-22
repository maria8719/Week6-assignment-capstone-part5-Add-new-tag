import React, {useEffect, useState} from 'react';
import './App.css';

const URL = "https://api.hatchways.io/assessment/students";

function App() {

  const [studentData, setStudentData] = useState([]); 
  
  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => setStudentData(data.students))
      .catch(error => alert('Something went wrong!'));
  }


function averageGrades(grades){
  let sum = 0;
    for (let i=0; i < grades.length; i++) {
        sum += parseInt(grades[i]);
    }
        return  sum / grades.length;

}

  useEffect(() => {
    getStudents(URL);
  }, []); 

  
  return (
    <main>
    <ul>
     {
       studentData && 
        studentData.map((student) => {
          return (
            <div> <img src = {student.pic} /> 
               <h2>{student.firstName} {student.lastName}
               </h2> 
               <div>
                Email: {student.email} 
                </div>
                <div>
                Company: {student.company} 
                </div>
                <div>
                Skill: {student.skill} 
                </div>
                <div>
                Average: {averageGrades(student.grades)}%
                </div>
            </div>
             
           
          )
        })
     }
     </ul>
    </main>
  );
}

export default App;

