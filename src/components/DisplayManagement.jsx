/* eslint-disable react/prop-types */
export function DisplayGeneral({generalData}){
    return(
        <div>
            <h1 style={{textAlign: "center"}}>{generalData.fullName}</h1>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <p><label style={{fontWeight: "bold"}}>Email: </label>{generalData.email}</p>
                <p><label style={{fontWeight: "bold"}}>Phone: </label>{generalData.phone}</p>
            </div>
            <p style={{border: "0.1rem solid black"}}></p>
         </div>
    )
}

export function DisplayEducation({educationData}){
    return(
        <div>
            <h2>Education</h2>
            <div>
                {educationData.map((education) => {
                    return(
                        <div key={education.id}>
                            <p>&#10148; <label  style={{fontWeight: "bold"}}>School Name and Title: </label>{education.schoolName} - {education.schoolTitle}</p>
                            <p>&#8193; <label  style={{fontWeight: "bold"}}>Study Date: </label>{education.studyDateFrom} - {education.studyDateTo}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function DisplayPractice({practiceData}){
    return(
        <div>
            <p style={{border: "0.1rem solid black"}}></p>
            <h2>Practices</h2>
            <div>
                {practiceData.map((practice) => {
                    return(
                        <div key={practice.id}>
                            <p>&#10148; <label  style={{fontWeight: "bold"}}>Company Name and Position: </label>{practice.companyName} - {practice.companyPosition}</p>
                            <p>&#8193; <label  style={{fontWeight: "bold"}}>Practice date: </label>{practice.practiceDateFrom} - {practice.practiceDateTo}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}