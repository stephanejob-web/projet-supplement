import { FC } from "react";
type HeaderPropos = {
    title:string
}

const Header: FC<HeaderPropos> = ({title}) => {
    return (
        <div className="bg-amber-500">
            <h1 className="text-8xl text-center text-shadow-white">{title}</h1>;
        </div>

    )
}

export default Header;