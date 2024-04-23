import Header from "../components/Header"
import CardCandidats from "../components/CardCandidats"
import Banniere from "../components/Banierre"

const  ListesCandidats = () => {
    return (<>
        <Header/>
        <Banniere/>
        <div className={"flex  justify-between items-center p-8"}>
            <h1 className={"text-2xl font-bold text-green-800"}>Liste des candidats</h1>
            <div>
                <input type="text" placeholder={"Rechercher un candidat"} className={"border p-2 rounded-md w-96"} />
            </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 p-8">
            <CardCandidats/>
            <CardCandidats/>
            <CardCandidats/>
        </div>

    </>)
}

export default ListesCandidats