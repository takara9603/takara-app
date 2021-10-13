import Image from 'next/image'

const Card = (props) => {
    return(
        <div className="h-full p-3">
            <Image src={props.src} alt={props.alt} height={180} width={180} className="object-contain h-2/5 m-auto" />
            <h3 className="">{props.title}</h3>
            <p className="">{props.text}</p>
        </div>
    )
};

export default Card;