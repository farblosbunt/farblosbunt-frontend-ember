import Config from 'farblosbunt-frontend-ember/config/environment';

export default function() {
  this.timing = 1;      // delay for each request, automatically set to 0 during testing

  this.urlPrefix = Config.apiHost;
  this.namespace = Config.apiNamespace;


  // index
  this.get('/tags',(schema, {queryParams})=>{
    if(queryParams.query){
      let queryLabel = queryParams.query.toLowerCase();
      return schema.tags.where((tag)=>{
        let tagLabel = tag.word.toLowerCase();
        return tagLabel.indexOf(queryLabel) >= 0;
      });
    }else {
      return schema.tags.all();
    }
  });

  // show
  this.get('/tags/:id');

  this.get('/popular-tags',(schema)=>{
    return schema.tags.find([
      "bund",
      "usbundesrichter",
      "spdbundesvorsitzende",
      "verbunden"
    ]);
  });


  function getEntryForSide(side, sMin, sMax){
    this.get(`${side}-entries`, (schema, request)=>{
      let tagId = request.queryParams.tag_id;
      if(!tagId){return {};}
      let tag = schema.tags.find(tagId);
      return schema.entries.where((el)=>{
        let a = el.tag_id === tag.id;
        let b = el.political_score >= sMin;
        let c = el.political_score <= sMax;
        return a && b && c;
      });
    });
  }

  getEntryForSide.call(this, 'right', -100, 0);
  getEntryForSide.call(this, 'left', 0, 100);



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
