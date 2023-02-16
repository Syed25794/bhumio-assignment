import Image from "next/image";
import Link from "next/link";

export const CityEvents = ({ data }) => {
  return (
    <Link key={data.id} href={`/events/${data.city}/${data.id}`} passHref>
      <Image priority={true} src={data.image} alt={data.title} width={300} height={300} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </Link>
  );
};
