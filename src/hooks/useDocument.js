import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


const useDocument = (docRef) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: "",
    });

    useEffect(() => {
        const getDocDnapshot = async () => {
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists())
                    setState({
                        ...state,
                        loading: false,
                        data: docSnap.data(),
                    });
                else
                    setState({
                        ...state,
                        loading: false,
                        error: "document does not exist!",
                    });
            } catch (error) {
                console.log(error);
            }
        };
		getDocDnapshot();
    }, []);

	return [state.loading, state.data, state.error]
};
export default useDocument;