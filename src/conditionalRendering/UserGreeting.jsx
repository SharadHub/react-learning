export const UserGreeting = (props) => {
    return(

        props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please try again later!</h2>

    )
}