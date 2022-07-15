# Grubdash API

Welcome to the Grubdash API which allows you to create, read, update, and delete dishes and orders in an organized manner.

# Dishes

Dishes have the following properties: `name`, `description`, `price`, and `image_url`. All properties must be valid. A unique ID will be generated for you. Dishes can be created and updated but not deleted.

Sample data:

    {data:
    	{
    		id:  "d351db2b49b69679504652ea1cf38241",
    		name:  "Dolcelatte and chickpea spaghetti",
    		description: "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
    		price:  19,
    		image_url: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
    	}
    }

# Orders

Orders have the following properties: `deliverTo`, `mobileNumber`, `status`, and `dishes`. All properties must be valid. A unique ID will be generated for you. Orders can be created, updated, and deleted.

Sample data:

    {data:
        {
    	    id:  "f6069a542257054114138301947672ba",
    	    deliverTo:  "1600 Pennsylvania Avenue NW, Washington, DC 20500",
    	    mobileNumber:  "(202) 456-1111",
    	    status:  "out-for-delivery",
    	    dishes: [
    		    {
    		    id:  "90c3d873684bf381dfab29034b5bba73",
    		    name:  "Falafel and tahini bagel",
    		    description:  "A warm bagel filled with falafel and tahini",
    		    image_url: "https://images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&w=350",
    		    price:  6,
    		    quantity:  1,
    		    },
    		],
        }
    }

# Contact

If you have any questions, please contact me through GitHub or at roseanne.arcebido@gmail.com.
