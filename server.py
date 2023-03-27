from flask_app import app
from flask_frozen import Freezer
from flask_app.controllers import controller_routes
 
freezer = Freezer(app)

# keep this at the bottom of this file!!
if __name__=="__main__":	 
    freezer.freeze()
    app.run(debug=True)	