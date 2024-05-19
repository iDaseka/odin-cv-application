import {v4 as uuidv4} from 'uuid';

export const generalDefault = {
    fullName: 'First Last',
    email: 'template@me.com',
    phone: '123-456-7890'
}

export const educationDefault = [{
    schoolName: 'School',
    schoolTitle: 'Title',
    studyDateFrom: '01/01/2020',
    studyDateTo: '02/01/2020',
    id: uuidv4()
}]

export const practiceDefault = [{
    companyName: 'Company',
    companyPosition: 'Position',
    practiceDateFrom: '03/01/2020',
    practiceDateTo: '04/01/2020',
    id: uuidv4()
}]