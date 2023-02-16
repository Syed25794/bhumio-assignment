import { CityEvents } from "@/components/events/CityEvents";

const EventsCategoryPage = ({ data, title }) => {
  return (
    <div>
      <h1>Events in {title}</h1>
      <div>
        {data.map((event) => (
          <CityEvents key={event.id} data={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsCategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    const id = event.id.toString();
    return {
      params: {
        categories: id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const city = context?.params.categories;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((event) => event.city === city);
  return { props: { data, title: city } };
}
