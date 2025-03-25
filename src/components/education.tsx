export default function Education(){
    const keys = [
        "Another certificates achieved: PSM I (2022), JLPT N3 (2023)", 
    ];
    return <div className="flex flex-col select-text">
        <h3 className="text-xl font-bold text-left">EDUCATION</h3>
        <h4 className="text-lg font-bold text-left pl-2">04/2022: Graduated from Danang University of Science and Technology</h4>
        <ul className="list-disc pl-10 break-words w-[800px]">
            {keys.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
        ))}
        </ul>
    </div>
}