var BookView = (function(){
  var tmpl = _.template('<div class="address-book"><h1><%= contacts.length %> Users</h1><ul><% _.each(contacts, function(contact) { %><li><%= contact.model.name %></li><% }); %></ul>');
  
  return function(){
    this.tmpl = tmpl;
    this.collection = new BookCollection();
    this.el = $( this.render( this.collection.data ) ); 
  }
})(); 

BookView.prototype.render = function(contacts){
  return this.tmpl({contacts: contacts});
}