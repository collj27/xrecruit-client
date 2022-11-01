export function calculateAge(dob){
    let today = new Date();
    console.log(dob)
    let age = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate()))
    {
        age--;
    }
    return age;
}