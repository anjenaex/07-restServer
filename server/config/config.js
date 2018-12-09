// ====================
// puerto
// ====================

process.env.PORT = process.env.PORT || 3000

// ====================
// Entorno
// ====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ====================
// Base de datos
// ====================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost/cafe';
} else {
  urlDB = 'mongodb://cafe-user:abc123@ds129904.mlab.com:29904/cafe';
}
process.env.URLDB = urlDB;


// mongodb://localhost/cafe
// mongodb://<dbuser>:<dbpassword>@ds129904.mlab.com:29904/cafe
