import { useLocation } from "react-router-dom"

function Dashboard(){
    const location = useLocation();
    const username = location.state?.username;

    return(
        <>
            <h1> Hello {username} </h1>
        </>
    );
}

export default Dashboard