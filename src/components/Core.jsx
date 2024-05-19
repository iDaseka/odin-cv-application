import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {General, Education, Practice} from "./DataManagement";
import {DisplayGeneral, DisplayEducation, DisplayPractice} from "./DisplayManagement";
import {generalDefault, educationDefault, practiceDefault} from "./DataDefault";
import '../styles/Core.css';

function Cv(){
    const [generalData, setGeneralData] = useState(generalDefault);
    const [educationData, setEducationData] = useState(educationDefault);
    const [practiceData, setPracticeData] = useState(practiceDefault);

    function generalChange(property, value){
        const newGeneral = {...generalData, [property]: value};
        setGeneralData(newGeneral);
    }

    function educationChange(actualEducationData){
        setEducationData(actualEducationData);
    }

    function educationDelete(actualEducationData, educationID){
        for (let i = 0; i < actualEducationData.length; i++){
            if (actualEducationData[i].id === educationID){
                actualEducationData.splice(i, 1);
                const newEducationData = [...actualEducationData];
                setEducationData(newEducationData);
            }
        }
    }

    function practiceChange(actualPracticeData){
        setPracticeData(actualPracticeData);
    }

    function practiceDelete(actualPracticeData, practiceID){
        for (let i = 0; i < actualPracticeData.length; i++){
            if (actualPracticeData[i].id === practiceID){
                actualPracticeData.splice(i, 1);
                const newPracticeData = [...actualPracticeData];
                setPracticeData(newPracticeData);
            }
        }
    }

    function handleAdd(actualData){
        if (actualData[0].schoolName){
            const newEducation = {
                schoolName: '',
                schoolTitle: '',
                studyDateFrom: '',
                studyDateTo: '',
                id: uuidv4()
            };
            actualData.push(newEducation);
            const newData = [...actualData];
            setEducationData(newData);
        }
        else if (actualData[0].companyName){
            const newPractice = {
                companyName: '',
                companyPosition: '',
                dateFrom: '',
                dateTo: '',
                id: uuidv4()
            };
            actualData.push(newPractice);
            const newData = [...actualData];
            setPracticeData(newData);
        }
    }

    const handlePrint = () => {
        window.print();
    }


    return (
        <>
            <h1 style={{textAlign: "center"}}>CV Application</h1>
            <div id="buttonContainer">
                <button id="printBtn" onClick={handlePrint}>Print</button>
            </div>
            <div id="mainContent">
                <div id="inputs">
                    <General generalData= {generalData} change={generalChange}/>
                    <Education educationData={educationData} educationAdd={handleAdd} educationDelete={educationDelete} change={educationChange}/>
                    <Practice practiceData={practiceData} practiceAdd={handleAdd} practiceDelete={practiceDelete} change={practiceChange}/>
                </div>
                <div id="display">
                    <DisplayGeneral generalData={generalData}/>
                    <DisplayEducation educationData={educationData}/>
                    <DisplayPractice practiceData={practiceData}/>
                </div>
            </div>
        </>
    )
}

export default Cv;