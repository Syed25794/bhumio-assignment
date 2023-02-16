import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <main>
    {data.map((event) => {
      return (
        <Link key={event.id} href={`/events/${event.id}`} passHref>
          <Image
            width={200}
            height={200}
            src={event.image}
            alt={event.title}
            priority={true}
          />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      );
    })}
  </main>
);
