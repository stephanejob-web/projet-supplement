import { FC } from "react";

type ListProps = {
  items: string[];
  color: string;
};

type ImageProps = {
  url: string;
  alt?: string;
};

type CardProps = {
  leftItems: string[];
  rightItems: string[];
  color: string;
  url: string;
  alt?: string;
};

const List: FC<ListProps> = ({ items, color }) => {
  return (
    <div className={`${color} flex justify-center`}>
      <ul className="list-none flex flex-col justify-around">
        {items.map((item, index) => (
          <li key={index} className="text-2xl">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Image: FC<ImageProps> = ({ url, alt }) => {
  return (
    <img
      src={url}
      alt={alt ?? "card image"}
      className="object-cover w-full h-full"
    />
  );
};

const Cards: FC<CardProps> = ({ leftItems, rightItems, color, url, alt }) => {
  return (
    <div className="min-h-screen grid sm:grid-cols-3">
      <List items={leftItems} color={color} />
      <Image url={url} alt={alt} />
      <List items={rightItems} color={color} />
    </div>
  );
};

export default Cards;
