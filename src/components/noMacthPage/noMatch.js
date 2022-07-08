export const NoMatch = () => {
    return (
    <>
        <div className="container_noPage">
            <h1 className="main_title_notFound">404</h1>
            <span className="subtitle_notFound">Page Not Found</span>
            <p>The Page you are looking for doesn't exist or an other error occurred.
            <a href="/" rel="noreferrer"> Go back,</a> to choose a new direction.
            </p>
        </div>
    </>
    )
}