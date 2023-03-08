export default function handler(req, res) {
  const { email, eventId } = req.body;
  const { method } = req;
  if (method === "POST") {
    res.status(200).json({message:`You have been successfully registered with the email : ${email} to ${eventId} function.`});
  }
}
