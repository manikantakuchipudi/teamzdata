/**
 * 
 */var user_selectionApp = Backbone.View.extend({

		// Base the view on an existing element
		el: $('#main'),

		initialize: function(){

			// Cache these selectors
			this.total = $('#total span');
			this.list = $('#services');
			
			// Listen for the change event on the collection.
			// This is equivalent to listening on every one of the 
			// service objects in the collection.
    		this.listenTo(user_selectiondata, 'change', this.render);

			
			// Create views for every one of the services in the
			// collection and add them to the page

			user_selectiondata.each(function(user_selection){
				
			

				var view = new user_selection_view({ model: user_selection });
				
				
			
				this.list.append(view.render().el);

			}, this);	// "this" is the context in the callback
		},

		render: function(){

			// Calculate the total order amount by agregating
			// the prices of only the checked elements

			var total = 0;

			_.each(user_selectiondata.getChecked(), function(elem){
				total += elem.get('price');
			});

			// Update the total price
			this.total.text('$'+total);

			return this;

		}

	});
 new user_selectionApp();
