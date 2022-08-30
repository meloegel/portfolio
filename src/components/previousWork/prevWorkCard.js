

export default function PrevWorkCard({ title, company, description }) {
    return (
        <div className='bg-zinc-700 rounded-3xl p-2 w-10/12 my-2 mx-auto'>
            <h4 className="text-white">{title}</h4>
            <h4 className="text-white">{company}</h4>
            <p className="text-white m-auto w-11/12">{description}</p>
        </div>
    )
}