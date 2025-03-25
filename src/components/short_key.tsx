export default function ShortKey(){
    const keys = [
        "Proficient in Golang, could implement with high concurrency services and high performance", 
        "Proficient in Terraform IaC, experienced in building infrastructure for projects using Terraform in combination with CI/CD tools such as GitHub Actions or CircleCI",
        "Experienced with the Linux operating system",
        "Experienced in working with service deployment tools such as Docker and container orchestration and management tools such as K8S",
        "Experienced in working with both GCP and AWS, capable of setting up multi-cloud communication through Cloud Identity",
    ];

    return <div className="flex flex-col select-text">
        <h3 className="text-xl font-bold text-left">KEY CAPABILITIES</h3>
        <ul className="list-disc text-lg pl-10 break-words w-[800px] ">
            {keys.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>
    </div>
}