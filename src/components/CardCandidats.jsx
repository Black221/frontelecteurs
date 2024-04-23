import Button from './Button';
const  CardCandidats = () => {
    return (<>
        <div className="border rounded-xl shadow drop-shadow p-2  shadow-lg hover:shadow-md hover:shadow-yellow-700">
            <div className="flex"> 
                <div className="overflow-hidden ">
                    <img className="object-cover h-44 w-44 rounded-xl bg-red-200"/>
                </div>
                <div className="p-6 flex-1">
                    <div className="flex space-x-2">
                        <div>Nom</div>
                        <div>Prénom</div>
                    </div>
                    <div className=" text-sm ">
                        qfqsdfqsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab cumque, aspernatur laboriosam numquam maiores aliquam eveniet animi quo ullam molestias provident qui commodi, nisi natus aliquid iure veritatis obcaecati?
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <a>Mon programme</a>
                </div>
                <Button label='Parrainer' action={()=>null}/>
            </div>
        </div>
    
    </>)
}

export default CardCandidats