import Image from "next/image";

export const SingleEvent = ({data}) => (
  <div>
    <h1>{data.title}</h1>
    <Image src={data.image} alt={data.title} width={300} height={300} priority={true} />
    <h2>{data.title}</h2>
    <p>{data.description}</p>
    <form>
        <label>Get Registration for this event!</label>
        <br/>
        <input style={{padding:"5px","margin-left":"10px"}} placeholder="Enter Email Address" type="text" />
        <input type='submit'  style={{padding:"5px 10px","margin-left":"10px"}} />
    </form>
  </div>
);
