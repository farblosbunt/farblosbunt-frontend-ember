export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('tag'),
    this.media('(min-width: 640px)'),
    this.use('toUp', {duration: 300}),
    this.reverse('toDown', {duration: 300})
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('tag'),
    this.media('(max-width: 639px)'),
    this.use('toLeft', {duration: 200}),
    this.reverse('toRight', {duration: 200})
  );

  this.transition(
    this.childOf('.right-column'),
    this.use('crossFade',{duration: 600})
  );

  this.transition(
    this.childOf('.left-column'),
    this.use('crossFade',{duration: 600})
  );

  this.transition(
    this.hasClass('popular-tags-conditional'),
    this.toValue(false),
    this.use('crossFade')
  );

  this.transition(
    this.hasClass('tag-show-right-column'),
    this.toValue(false),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
