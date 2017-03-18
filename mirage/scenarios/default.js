export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  for (var i = 0; i < 20; i++) {
    let tag = server.create('tag');
    let rightEntries = server.createList('entry', Math.floor(Math.random() * 10 + 10), {
      tag_id: tag.id,
      side: 'right'
    });

    let leftEntries = server.createList('entry', Math.floor(Math.random() * 10 + 10), {
      tag_id: tag.id,
      side: 'left'
    });

    tag.entries = [].concat.apply([], leftEntries, rightEntries);
  }
}
