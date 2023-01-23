export default function handler(req, res) {
  //* res is an instance of http.ServerResponse plus some helper function
  res.status(200).json({ text: "Hello" });
  //*  I wonder how you send text as a res just like Django's HTTPResponse

  //* req is an instance of http.incomingMessage and some middleware
}
