import { createContext, useState, useEffect, useContext } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getUserOnload()
    },[])

    const getUserOnload = async ()=>{
        try{
            const accountDetails = await account.get();
            console.log(accountDetails)
            setUser(accountDetails)
        }catch(error){
            console.info(error)

        }
        setLoading(false)

    }

    const handleUserLogin = async (e, credentials) => {
        e.preventDefault()

        try {
            const response = await account.createEmailSession(credentials.email, credentials.password)
            console.log("LOGGEDIN:", response)
            const accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')

        } catch (error) {
            console.log(error)
        }

    }

    const handleUserLogOut = async() =>{
        await account.deleteSession('current')
        setUser(null)

    }

    const handleUserRegister = async(e, credentials) => {
        e.preventDefault()

        if(credentials.password1 !== credentials.password2){
            alert('Password does not match!')
            return
        }

        try{ 
            let response = await account.create(
                ID.unique(),
                credentials.email,
                credentials.password1,
                credentials.name,
                )

                 await account.createEmailSession(credentials.email, credentials.password1)

                const accountDetails = await account.get();
                console.log(accountDetails)
                setUser(accountDetails)
                navigate('/')

                //console.log("REGISTERED:", response)

        }catch(error){
            console.log(error)
        }


    }

    const contextData = {
        user,
        handleUserLogin,
        handleUserLogOut,
        handleUserRegister,

    }

    return <AuthContext.Provider value={contextData} >
        {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
}

export const userAuth = () => { return useContext(AuthContext) }
export default AuthContext