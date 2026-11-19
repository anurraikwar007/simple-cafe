# CUP2EAT API

## Requirements
Node.js 18+ and MongoDB.

## Setup
1. `npm install`
2. Copy `.env.example` to `.env`, change the JWT secret and admin password, configure MongoDB.
3. `npm run seed` creates the owner account and initial product catalogue. Seeded stock values are zero; update inventory before publishing sale availability.
4. `npm run dev`

API base: `http://localhost:5000/api`

## Routes
- `GET /health`
- `POST /auth/login`
- `GET /products` public; `?admin=1` still should only be used by authenticated clients (the route currently supports a broad query view and is not an auth-enforced admin endpoint)
- `GET /products/:id`, `POST /products`, `PUT /products/:id`, `DELETE /products/:id` (CRUD protected except public read)
- `POST /orders` public order create; `GET /orders`, `PATCH /orders/:id` admin
- `POST /leads` public; `GET /leads`, `PATCH /leads/:id` admin
- `GET /dashboard` admin

## Security / implementation notes
- Configure production secrets, CORS allowlist, HTTPS, DB backups and monitoring before launch.
- Product images: image URL strings currently accepted; integrate a vetted upload provider and file validation before production.
- Stock decrements for order creation should be transactional in production (MongoDB replica set) to prevent race conditions.
- Payment gateways, invoicing, advanced analytics, audit logs and full product editor UI are not implemented in this starter.
