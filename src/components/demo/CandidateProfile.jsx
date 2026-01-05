export const CandidateProfile = () => {

    const name = "Tony Stark";
    const role = "Physicist";
    const experience = 13;
    const isAvailable = true;
    return(
        <>
        <h2>{name}</h2>
        <p>{role} with {experience} years of experience.</p>
        <p>Status:{isAvailable ? "Available to hire" : "Not Availabel"}</p>
        <p>Contact:{name.toLowerCase().replace(" ",".")}@email.com</p>
        </>
        
    )
}