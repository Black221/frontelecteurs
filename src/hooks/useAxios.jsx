import {useEffect, useState} from "react";
// import

const useAxios = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [controller, setController] = useState(null);


    const axiosFetch = async (configObj) => {

        setLoading(true);

        const ctrl = new AbortController();
        setController(ctrl);

        const {
            axiosInstance,
            method,
            url,
            requestConfig = []
        } = configObj;


        await  axiosInstance[method.toLowerCase()](url,
            ...requestConfig
        ).then( (res) => {
            setResponse(res.data);
        }).catch( (err ) => {
            setError(err?.response?.data || "Error Server");
        }).finally (() => {
            setLoading(false);
        })
    }

    useEffect(() => {

        //useEffect cleanup function
        if (controller)
            return () => controller.abort()
    }, [controller])

    return [response, error, (loading), axiosFetch];
}

export default useAxios;