import { useState } from 'react'
import AppRoutes from './routes'


function App() {
    const [user, setUser] = useState()

    return(
        
        <AppRoutes user={user} setUser={setUser} />
    )
}

export default App
