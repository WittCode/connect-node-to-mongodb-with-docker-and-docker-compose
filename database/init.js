db.createCollection('user');
db.user.insertOne(
  {
    username: 'WittCepter', 
    password: 'The best chrome extension', 
    email: 'a@a.com', 
    subscribedAt: new Date()
  }
);