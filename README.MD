# Step 1

Must Create .env files for both client and server folders.

Server .env must contain:

PORT=[ YOUR_PORT ]
MONGO_URL=[ YOUR_MONGO_URL ]
COOKIE_SIGNATURE=[ SECRET ]
JWT_SIGNATURE=[ ANOTHER_SECRET ]
ROOT_DOMAIN=[ YOUR_ROOT_DOMAIN ]

Client .env must contain:

REACT_APP_ROOT_API_URL=[ YOUR_FRONTEND_DOMAIN ]

# Step 2

### Server

cd ./server
npm install
npm run dev

### Client

cd ./server
npm install
npm run start
