export default function(server) {
  server.loadFixtures();


  let tags = server.schema.tags.all();

  for (var i = 0; i < 20; i++) {
    let tag = tags.models[Math.floor(tags.length * Math.random())];

    let rightEntries = server.createList('entry', Math.floor(Math.random() * 10 + 10), {
      tag_id: tag.id,
      political_score: Math.random() * 100
    });

    let leftEntries = server.createList('entry', Math.floor(Math.random() * 10 + 10), {
      tag_id: tag.id,
      political_score: Math.random() * -100
    });

    tag.entries = [].concat.apply([], leftEntries, rightEntries);
  }
}
