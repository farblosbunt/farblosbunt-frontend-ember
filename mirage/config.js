export default function() {



  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing


  // index
  this.get('/tags',(schema, {queryParams})=>{
    if(!!queryParams.query){
      let queryLabel = queryParams.query.toLowerCase();
      return schema.tags.where((tag)=>{
        let tagLabel = tag.label.toLowerCase();
        return tagLabel.indexOf(queryLabel) >= 0;
      });
    }else {
      return schema.tags.all();
    }
  });

  // show
  this.get('/tags/:id');

  this.get('/popular-tags',(schema)=>{
    let result = schema.tags.where((tag)=>{
      return [1,2,3,4].includes(parseInt(tag.id));
    });
    result.modelName = "popularTag";
    result.models.map((mdl)=>{
      mdl.modelName = "popularTag";
      return mdl;
    });
    return result;
  });


  this.get('entries',(schema)=>{
    return schema.entries.all();
  });

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
