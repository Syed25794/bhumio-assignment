import { Events } from "@/components/events/Events";

const EventsPage = ({ data }) => {
  return (
    <div>
      {data.map((event) => {
        return <Events key={event.id} data={event} />;
      })}
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
