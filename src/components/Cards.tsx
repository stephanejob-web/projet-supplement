import {FC, JSX} from "react";

type listeProps = {
    title: string
    title1: string
    title2: string
    color: string
}
type ImageProps = {
    url: string
}

type CardProps = {
    title: string
    title1: string
    title2: string
    title3: string
    color: string
    title4: string
    title5: string
    title6: string
    url: string
}

const List: FC<listeProps> = ({title, title1, title2, color}: titleProps) => {
    return (
        <div className={`${color} flex justify-center`}>
            <ul className="list-none flex flex-col justify-around ">
                <li className="text-2xl">{title}</li>
                <li className="text-2xl">{title1}</li>
                <li className="text-2xl">{title2}</li>
            </ul>
        </div>
    )
}
const Image: FC<ImageProps> = ({url}) => {
    return (
        <div
            className="bg-amber-500 bg-no-repeat bg-center"
            style={{backgroundImage: `url(${url})`}}
        ></div>
    );
};


const Cards: FC<CardProps> = ({title, title1, title2, title3, title4, title5, color, url}) => {
    return (
        <div className="min-h-screen grid sm:grid-cols-3">
            <List
                title={title}
                title1={title1}
                title2={title2}
                color={color}
            />
            <Image url={url}/>
            <List
                title={title3}
                title1={title4}
                title2={title5}
                color={color}
            />
        </div>
    )
}

export default Cards
