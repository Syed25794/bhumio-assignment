import Image from "next/image";
import Link from "next/link";

export const Events = ({ data }) => (
  <div>
    <Link href={`/events/${data.id}`} alt={data.title}>
      <h2>{data.title}</h2>
      <Image priority={true} src={data.image} alt={data.title} width={300} height={300} />
    </Link>
  </div>
);
