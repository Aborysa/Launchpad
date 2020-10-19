import express from 'express';
import fetch from 'node-fetch';

const server = express();

server.get('/spotify[\:]([/]{2})?:track[\:]:trackId', (query, res) => {
  const {track, trackId} = query.params;
  return res.redirect(`spotify:${track}:${trackId}`);
});

server.get('/https[\:]//open.spotify.com/track/:trackId', async (query, res) => {
  //https://open.spotify.com/track/4SLCy1yOCxeJ5dggSDawZZ?si=9X6zkTdwRaiGX76Dc2oLRQ
  const {trackId} = query.params;
  return res.redirect(`spotify:track:${trackId}`);
});

server.get('/test/:trackId', async (query, res) => {
  const {trackId} = query.params;
  const response = await fetch(`https://open.spotify.com/track/${trackId}`);
  const text = await response.text();
  return res.send(text.replaceAll('https://open.spotify.com', 'https://launchpad.spaceway.network'));
});

server.listen(process.env.PORT || 8080, process.env.HOSTNAME || "localhost", () => {
  console.log("Server running");
});