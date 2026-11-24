function Student(props){
    let mark="";

    if(props.average>90)
        mark="תלמיד מצטיין"
    else if(props.average<60)
        mark="טעון שיפור"
    function exitSchool(){
            let time = new Date();
            let hour = time.getHours();
            let minutes = time.getMinutes().toString().padStart(2, '0');

            console.log(props.name + " - יצאת בשעה: " + hour + ":" + minutes);
            
            props.onExit();
    }
    return(
        <div>
            <h2>פרטי התלמיד</h2>
            <p>שם: {props.name}</p>
            <p>גיל: {props.age}</p>
            <p>ממוצע: {props.average}</p>
            <p>{mark}</p>

            <button onClick={exitSchool}>יציאה מבית הספר</button>
        </div>
    );
}

export default Student