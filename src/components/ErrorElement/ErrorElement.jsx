import { Link, useRouteError } from "react-router-dom"


function ErrorElement() {
    const error = useRouteError()

    if (localStorage.getItem('visited') === 'true') {
        location.assign('/')
        localStorage.removeItem('visited')
    }
    else {
        localStorage.setItem('visited', 'true')
    }

    return (
        <section className="flex items-center justify-center p-24 text-center bg-[#252525] text-white h-screen">
            <div>
                <div>
                    <h1 className="text-3xl font-extrabold">Oops!</h1>
                    <p className="my-5">Sorry, an unexpected error has occurred.</p>
                    <p className="text-red-700 font-bold my-5">
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
                <div>
                    <Link to='/'>
                        <button
                            className="bg-[#fa4c52] text-white font-semibold py-2 md:py-3 px-3 md:px-5 rounded"
                        >Go to the home page</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorElement