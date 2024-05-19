/* eslint-disable react/prop-types */
import {useState} from 'react';

export function General({generalData, change}){
    return(
        <>
            <h2>General</h2>
            <form action="push">
                <div>
                    <label htmlFor="fullName">Full Name: </label>
                    <input id="fullName" type="text" name="fullName" value={generalData.fullName} onChange={(e) => {change("fullName", e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" name="email" value={generalData.email} onChange={(e) => {change("email", e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number: </label>
                    <input id="phone" type="text" name="phone" value={generalData.phone} onChange={(e) => {change("phone", e.target.value)}}/>
                </div>
            </form>
        </>
    )
}

export function Education({educationData, educationAdd, educationDelete, change}){
    const [temporaryEducationData, setTemporaryEducationData] = useState(educationData);

    function getIndex(array, id){
        for (let i = 0; i < array.length; i++){
            if (array[i].id === id){
                return i;
            }
        }
    };

    function storeInputs(educationID, property, value){
        const index = getIndex(temporaryEducationData, educationID)
        const temporaryStorage = [...temporaryEducationData];
        temporaryStorage[index] = {...temporaryStorage[index], [property]: value};
        setTemporaryEducationData(temporaryStorage);
    }

    function handleSave(actualData){
        const newEducationState = [...actualData];
        change(newEducationState);
    }

    return(
        <>
            <h2>Education</h2>
            <div>
                {temporaryEducationData.map((education) => {
                    return(
                        <form action="push" key={education.id}>
                            <div>
                                <label htmlFor="schoolName">School Name: </label>
                                <input id='schoolName' type="text" name="schoolName" value={education.schoolName} onChange={(e) => {storeInputs(education.id, "schoolName", e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="schoolTitle">Title of Study: </label>
                                <input id="schoolTitle" type="text" name="schoolTitle" value={education.schoolTitle} onChange={(e) => {storeInputs(education.id, "schoolTitle", e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="studyDateFrom">From: </label>
                                <input id="studyDateFrom" type="date" name="studyDateFrom" value={education.studyDateFrom} onChange={(e) => {storeInputs(education.id, "studyDateFrom", e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="studyDateTo">To: </label>
                                <input id="studyDateTo" type="date" name="studyDateTo" value={education.studyDateTo} onChange={(e) => {storeInputs(education.id, "studyDateTo", e.target.value)}}/>
                            </div>

                            <div>
                                <button onClick={(e) => {e.preventDefault(); handleSave(temporaryEducationData);}}>Save</button>
                                {temporaryEducationData.length > 1 && <button onClick={(e) => {e.preventDefault(); educationDelete(temporaryEducationData, education.id);}}>Delete</button>}
                            </div>
                        </form>
                    )
                })}
            </div>
            <form>
                <button onClick={(e) => {e.preventDefault(); educationAdd(temporaryEducationData)}}>Add</button>
            </form>
        </>
    )
}

export function Practice({practiceData, practiceAdd, practiceDelete, change}){
    const [temporaryPracticeData, setTemporaryPracticeData] = useState(practiceData);

    function getIndex(array, id){
        for (let i = 0; i < array.length; i++){
            if (array[i].id === id){
                return i;
            }
        }
    };

    function storeInputs(practiceID, property, value){
        const index = getIndex(temporaryPracticeData, practiceID);
        const temporaryStorage = [...temporaryPracticeData];
        temporaryStorage[index] = {...temporaryPracticeData[index], [property]: value};
        setTemporaryPracticeData(temporaryStorage);
    }

    function handleSave(actualPracticeData){
        const newPracticeState = [...actualPracticeData];
        change(newPracticeState);
    }

    return(
        <>
            <h2>Practice</h2>
            <div>
                {temporaryPracticeData.map((practice) => {
                    return(
                        <form action="push" key={practice.id}>
                            <div>
                                <label htmlFor="companyName">Company Name: </label>
                                <input id='companyName' type="text" name="companyName" value={practice.companyName} onChange={(e) => {storeInputs(practice.id, "companyName", e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="companyPosition">Position: </label>
                                <input id='companyPosition' type="text" name="companyPosition" value={practice.companyPosition} onChange={(e) => {storeInputs(practice.id, "companyPosition", e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="practiceDateFrom">From: </label>
                                <input id='practiceDateFrom' type="date" name="practiceDateFrom" value={practice.practicesDateFrom} onChange={(e) => {storeInputs(practice.id, "practiceDateFrom", e.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="practiceDateTo">To: </label>
                                <input id='practiceDateTo' type="date" name="practiceDateTo" value={practice.practicesDateTo} onChange={(e) => {storeInputs(practice.id, "practiceDateTo", e.target.value)}}/>
                            </div>

                            <div>
                                <button onClick={(e) => {e.preventDefault(); handleSave(temporaryPracticeData);}}>Save</button>
                                {temporaryPracticeData.length > 1 && <button onClick={(e) => {e.preventDefault(); practiceDelete(temporaryPracticeData, practice.id);}}>Delete</button>}
                            </div>
                        </form>
                    )
                })}
                </div>
                <form>
                    <button onClick={(e) => {e.preventDefault(); practiceAdd(temporaryPracticeData)}}>Add</button>
                </form>
        </>
    )
}