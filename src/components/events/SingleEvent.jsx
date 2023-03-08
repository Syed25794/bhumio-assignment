import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

export const SingleEvent = ({ data }) => {
  const inputValue = useRef();
  const router = useRouter();
  const submitEmail = async (e) => {
    const emailValue = inputValue.current.value;
    const eventId = router?.query.id;
    e.preventDefault();
    try {
        let response = await fetch('/api/email-registration',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:emailValue,eventId})
        });
        if( !response.ok ){
            throw new Error(`Error:${response.status}`);
        }
        let data = await response.json();
        console.log(data);
        inputValue.current="";
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} alt={data.title} width={300} height={300} priority={true} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <form onSubmit={submitEmail}>
        <label>Get Registration for this event!</label>
        <br />
        <input ref={inputValue} style={{ padding: "5px", "margin-left": "10px" }} placeholder="Enter Email Address" type="text" />
        <input type="submit" style={{ padding: "5px 10px", "margin-left": "10px" }} />
      </form>
    </div>
  );
};
