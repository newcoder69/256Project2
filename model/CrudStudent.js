import { MongoClient } from "mongodb";

export async function connectToCluster(URI){
    let mongoClient;

    try{
        mongoClient = new mongoClient(URI);
        console.log('Connecting to MongoDB Atlas cluster... ')
        await mongoClient.connect();
        console.log('Successfully connected to MongoDB Atlas!');
        
        return mongoClient;
    } catch(error){
        console.error('Connection to MongoDB Atlas Failed!',error);
        process.exit;
    }
    
}

export async function executeStudentCrudOperations() {
    const URI = process.env.DB_URI;
    let mongoClient;

    try{
        mongoClient = await connectToCluster(URI)
    }finally{
        await mongoClient.close();
    }
}

executeStudentCrudOperations();