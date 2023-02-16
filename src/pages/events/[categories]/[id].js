import { SingleEvent } from "@/components/events/SingleEvent";

const EventPage = ({ data }) => {
  return <SingleEvent key={data.id} data={data} />;
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((event) => {
    return {
      params: {
        id: event.id,
        categories: event.city,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((event) => event.id === id);
  return { props: { data: eventData } };
}
