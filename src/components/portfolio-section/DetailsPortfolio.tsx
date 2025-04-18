import Link from "next/link"
interface DataFormate {
    title: string,
    project_name: string,
    website: string,
    paragraph: string,
    app: string,

}
const DetailsPortfolio = ({ title, project_name, website, paragraph, app }: DataFormate) => {
    return (
        <main style={{ marginBottom: "100px" }} className="container">
            <div className="ontario-homes">
                <h1 className="display-4 fw-bold mb-4">{title}</h1>

                <div className="row info-section mb-4">
                    <div className="col-md-3">
                        <p className="text-primary mb-1">Client :</p>
                        <p className="fw-medium">Samar Turabi</p>
                    </div>

                    <div className="col-md-3">
                        <p className="text-primary mb-1">Category :</p>
                        <p className="fw-medium">{project_name}</p>
                    </div>

                    <div className="col-md-3">
                        <p className="text-primary mb-1">Technologies :</p>
                        <p className="fw-medium"></p>
                    </div>

                    <div className=" gap-5 col-md-3">
                        <p className="text-primary mb-1">ProjectDemoLink :</p>
                        <div className="d-flex gap-2">

                            {website && (
                                <a href={website} className="btn btn-primary px-4" target="_blank" rel="noopener noreferrer">
                                    Click here
                                </a>
                            )}
                            {app && (
                                <a href={app} className="btn btn-primary px-4" target="_blank" rel="noopener noreferrer">
                                    Click here
                                </a>
                            )}
                        </div>


                    </div>
                </div>

                <hr className="my-4" />

                <div className="description mt-4">
                    <p className="text-muted">
                        {paragraph}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default DetailsPortfolio