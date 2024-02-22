
function Home (objeto) {
    function view_register() {
        window.location.href = "/register_page"        
    }
    function view_consult() {
        window.location.href = "/consult_page"
    }
    return(
        <div>
            <h1> HOME PAGE </h1>
            <button className="button-home" onClick={view_register}> Register User </button>
            <button className="button-home" onClick={view_consult}> Consult User </button>
            <h3> {objeto.mensaje} </h3>
        </div>
    )
}

export default Home