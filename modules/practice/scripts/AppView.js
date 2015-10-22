function AppView(id){
  this.el = $('#'+id);
  this.el.html( new BookView().el );
}