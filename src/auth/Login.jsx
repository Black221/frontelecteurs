import { useState, useEffect } from "react";
import Button from "../components/Button";
import { endpoints } from "../api/endpoint";
import useAxiosFunction from "../hooks/useAxios";
import axios from "../api/axios";

const  Login = () => {
    const [response, error, loading, axiosFetch] = useAxiosFunction()

    const [steps, setSteps] = useState(0);
    const [cni, setCni] = useState('');
    const [numelec, setNumelec] = useState('');

    const handleSubmit = async () => {

        await axiosFetch({
            axiosInstance: axios,
            method: 'GET',
            url: endpoints.electeur.recherche + '/' +cni+'/'+numelec ,
            requestConfig: [
                // {
                //     headers:{
                //         'Accept' : '*/*',
                //         'Access-Control-Allow-Origin' : '*'}
                // }
            ]
        })
    }
    
    useEffect(() => {
        if (response !== null) {
            console.log(response)
        }
        // eslint-disable-next-line
    },[response])

    useEffect(() => {
        console.log(error)
        
    }, [error])

    return (<>
        <div className="flex flex-col space-y-4 items-center justify-center">
            
            <div className="border rounded-md p-6 min-w-[60vw] space-y-6">
                <div>
                    <div className="flex w-full justify-between items-center">
                        <div className={
                            `w-6 h-6 rounded-full ${steps >= 0 ? 'bg-green-500' : 'bg-gray-300'}`
                        }></div>
                        <div className={`flex-1 h-1 ${steps >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={
                            `w-6 h-6 rounded-full ${steps >= 1 ? 'bg-green-500' : 'bg-gray-300'}`
                        }></div>
                        <div className={`flex-1 h-1 ${steps >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <div className={
                            `w-6 h-6 rounded-full ${steps >= 2 ? 'bg-green-500' : 'bg-gray-300'}`
                        }></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <div className="w-1/3 text-start">Etape 1 </div>
                        <div className="w-1/3 text-center">Etape 2 </div>
                        <div className="w-1/3 text-end">Etape 3</div>
                    </div>
                </div>
                
                <hr />

                <div>
                    {steps === 0 && <div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Numéro Carte d'identité</label>
                                <input type="text" id="name" value={cni} onChange={
                                    (e) => setCni(e.target.value)
                                } className="border p-2 rounded-md" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name">Numéro Carte électeur</label>
                                <input type="text" id="name" value={numelec} onChange={
                                    (e) => setNumelec(e.target.value)
                                } className="border p-2 rounded-md" />
                            </div>
                            
                        </div>
                    </div>}

                    {steps === 1 && 
                    <div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Nom</label>
                            <label htmlFor="name">Prenom</label>
                            <label htmlFor="name">Bureau de vote</label>
                            <label htmlFor="name">Date de naissance</label>
                        </div>
                        
                    </div>}

                    {steps === 2 && 
                    <div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="name">Saisir le code d'authentification</label>
                            <input type="text" id="name" className="border p-2 rounded-md" />
                        </div>
                        
                    </div>}
                </div>

                <div className="flex justify-between">
                    <Button label="Précedent" action={() => setSteps(
                        (prev) => {
                            if (prev > 0) return prev - 1; return prev
                        }
                    )} active={steps > 0} />
                    <Button label={
                        steps === 2 ? "Terminer" : "Suivant"
                    } action={() => {
                        if (steps == 0) {
                            handleSubmit()
                        }
                        setSteps(
                            (prev) => {
                                if (prev < 2) return prev + 1; return prev
                            }
                        )
                    }} active={steps < 2} />
                </div>
            </div>
        </div>
    </>)
}

export default Login