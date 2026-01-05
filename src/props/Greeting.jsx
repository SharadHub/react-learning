export const Greeting = ({name = "Guest", message = "Namaste"}) => {  // used default values
    return(
        <h2>
            {message}, {name}
        </h2>
    )
}