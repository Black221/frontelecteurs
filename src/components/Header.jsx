import {NavLink} from "react-router-dom";

const Header = () => {
    return (<>

        <div className={`h-16 absolute  flex items-center justify-between shadow w-full md:px-8 sticky top-0 bg-white z-50`}>
            <div className={`font-bold text-main text-center`}>
                <div className={""}>
                    <span className="text-green-500">Un peuple </span>
                    <span className="text-yellow-500">- Un but - </span>
                    <span className="text-red-500">Une foi</span>
                </div>
                <div className={"text-xs font-light"}>
                    Direction Générale des Elections
                </div>
            </div>
            <div className={`flex items-center space-x-4 text-main text-xl`}>


            </div>
        </div>
    </>)
}

export default Header;