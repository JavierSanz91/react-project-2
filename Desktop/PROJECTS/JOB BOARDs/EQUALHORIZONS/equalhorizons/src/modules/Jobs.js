import "./Jobs.css";

export default function Jobs(props) {
  return ( 
    <div className="job-card">
        <div className="first-block flex-center">
            <p className="job_company_name">{props.jobs.job_company_name}</p>
            <div className="first-block-right flex-center">
                <p className="job_location">{props.jobs.job_location}</p>
                {props.jobs.job_remote !== "None" && 
                <p className="job_remote"><span className="or"> or </span>{props.jobs.job_remote}</p>
                }
            </div>
        </div>
        <div className="second-block flex-center">
            <p className="job_title">{props.jobs.job_title}</p>
        </div>
        <div className="third-block flex-center">
            <div className="tags flex-center">
                <span className="job_industry badge badge-pill badge-dark">{props.jobs.job_industry}</span>
                <span className="job_seniority badge badge-pill badge-dark">{props.jobs.job_seniority}</span>
            </div>
            <div className="third-block-hover flex-center">
                <button className="job_apply btn btn-outline-dark">Apply</button>
                <button className="job_view btn btn-outline-dark">View Job</button>
            </div>
        </div>
    </div>
  )
}
