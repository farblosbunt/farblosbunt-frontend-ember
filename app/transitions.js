export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('tag'),
    this.use('toUp'),
    this.reverse('toDown')
  );

  this.transition(
    this.childOf('.right-column'),
    this.use('crossFade',{duration: 400})
  );

  this.transition(
    this.childOf('.left-column'),
    this.use('crossFade',{duration: 400})
  );

  this.transition(
    this.hasClass('popular-tags-conditional'),
    this.toValue(false),
    this.use('toDown')
  );
}
