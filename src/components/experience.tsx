export default function Experience(){
    const keys = [
        "Developed modular programs such as batch jobs, cron jobs, webhooks and web services in microservice system using Golang and established communication between services with service, or with cloud such as API Gateway, Redis, SQS, S3, and GCS across different cloud platforms", 
        "Established service communication between multiple clouds, specifically AWS and GCP using IAM/Cloud Identity",
        "Participate in batch performance optimization as well as database performance improvement",
        "Participated in system design, created basic and detailed designs using as PlantUML",
        "Built infrastructure to create S3/GCP buckets, configure API Gateway, set up log monitoring and alerting through Datadog SaaS, and establish the connection between Fastly CDN and GCS using Terraform IaC",
        "Performed unit testing, configured to push to Docker image to registry and deployment to K8S using CI/CD tools such as CircleCI and GitHub Actions",
    ];

    return <div className="flex flex-col select-text">
        <h3 className="text-xl font-bold text-left">EXPERIENCES</h3>
        <h4 className="text-lg font-bold text-left pl-2">01/2022 - Present: Work at DAC Data Technology Vietnam JSC</h4>
        
        <ul className="list-disc pl-10 break-words w-[800px]">
            {keys.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>
    </div>
}