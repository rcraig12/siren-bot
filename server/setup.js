const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/userModel');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/sirendb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connection successful'))
.catch((err) => console.error('Database connection error:', err));

const setupAdminUser = async () => {

  // Hash password for default admin user
  const hashedPassword = await bcrypt.hash('password123', 10);
  
// Create default admin user
  const adminUser = new User({
    name: 'Admin',
    email: 'admin@example.com',
    password: hashedPassword,
  });

  // Save default admin user to database
  await adminUser.save()
  .then((savedUser) => {
    console.log('User saved successfully:', savedUser);
  })
  .catch((err) => {

    if (err.code === 11000) {
      console.error('Duplicate record - already exists');
    } else {
      console.error('Error saving user:', err);
    }
    
  });

  console.log('Disconnecting from database');
  mongoose.disconnect();

}

setupAdminUser();
