export default function handler(req, res) {
  //* res is an instance of http.ServerResponse plus some helper function
  res.status(200).json({ text: "Hello" });

  //* req is an instance of http.incomingMessage and some middleware
}
