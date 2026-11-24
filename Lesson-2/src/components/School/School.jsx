import Student from '../Student/Student';

function School(){
    const students = [
    { name: "דני", age: 16, average: 95 },
    { name: "יוסי", age: 15, average: 80 },
    { name: "משה", age: 17, average: 58 }
];
    function openGate(){
        console.log("השער נפתח")
    }
    return(
        <div>
            <h1>בית הספר</h1>
            {students.map((student) => (
                <Student
                    key={student.name}
                    onExit={openGate}
                    name={student.name}
                    age={student.age}
                    average={student.average}
                />
            ))}
        </div>
    )
}
export default School;