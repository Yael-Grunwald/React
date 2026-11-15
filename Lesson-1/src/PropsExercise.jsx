function PersonDetails () {
  return(
    <>
    <h1>יעלי</h1>
    <h2>15</h2>
    <CourseDetails courseName="React" grade={95}/>
    <CourseDetails courseName="c#" grade={90}/>
    </>
  )
}
function CourseDetails(props) {
  return(
    <>
    <h2>{props.courseName}</h2>
    <h3>{props.grade}</h3>
    </>
  )
}
export default PersonDetails