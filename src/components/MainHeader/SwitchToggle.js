import { useContext } from "react"
import AuthContext from "../../store/auth-context"
import  './SwitchToggle.css'

const SwitchToggle = () => {
    const context = useContext(AuthContext)

    return (
        <label className="switch">
            <input type ='checkbox' onClick ={() => context.setSwitch((prev) => !prev)} />
            <span className='slider'></span>
        </label>

        
    )
}

export default SwitchToggle