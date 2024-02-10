import { useEffect, useState } from "react";


function useFetch ( url ) {

    let [ data, setData ] = useState( null );
    let [ loading, setLoading ] = useState ( false );
    let [ error, setError ] = useState ( null );


    useEffect ( () => {

        setLoading( true );
        fetch( url )
        .then ( res => {
        
            if ( !res.ok ) {
               throw Error ( " Something went wrong....." )
            } return res.json()
        } )
        .then ( data => {
             setData(data);
             setLoading(false);
             setError(null);
        })
        .catch ( err => {
            setError( err.message )
        })

    }, [ url ] )

    return { data, loading, error }

}

export default useFetch;