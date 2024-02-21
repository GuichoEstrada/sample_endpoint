# Sample Endpoint

## How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/GuichoEstrada/sample_endpoint.git
   
Install Dependencies:
cd sample_endpoint
npm install

Set Up MongoDB:
Create your own MongoDB database and collection.
Populate the collection with your own data.
Update MongoDB URI:

Open app.js and replace the MONGO_URI with your MongoDB URI:
const MONGO_URI = 'mongodb+srv://<username>:<password>@cluster0.mnc8coe.mongodb.net/<database>?retryWrites=true&w=majority';

Run the Application:
node app.js

Testing with Postman:

Use Postman to test the endpoints:
Getting Data Using ID: Send a GET request to http://localhost:3000/files/<id> to retrieve a specific file.
Getting All Data: Send a GET request to http://localhost:3000/files to retrieve all files.

Endpoint Status:
The endpoints should be working as expected.

## Screenshots
- **Getting Data Using ID:**
  <img width="374" alt="image" src="https://github.com/GuichoEstrada/sample_endpoint/assets/44462824/5c284bd7-93ed-4a1d-b23a-17d35defb381">

- **Getting All Data:**
  <img width="439" alt="image" src="https://github.com/GuichoEstrada/sample_endpoint/assets/44462824/c19fc5f7-df4d-4555-b01e-bd975975d370">


NOTES:
Make sure to replace `<username>`, `<password>`, and `<database>` in the MongoDB URI with your actual MongoDB credentials and database name.
