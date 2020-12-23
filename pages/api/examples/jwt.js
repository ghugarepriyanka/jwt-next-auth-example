// This is an example of how to read a JSON Web Token from an API route
import jwt from 'next-auth/jwt'

const secret = process.env.SECRET

export default async (req, res) => {
const decoded = await jwt.getToken({ req, secret, encryption: true})
res.send(JSON.stringify({decoded}, null, 2))
} 







// REF:
//const encoded = await jwt.encode({secret, token, maxAge})
//const token = "eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiSiBTbWl0aCIsImVtYWlsIjoianNtaXRoQGV4YW1wbGUuY29tIiwiaWF0IjoxNjAzNDA5Mjk5LCJleHAiOjE2MDM0MTI4OTl9.O4kvWUFpBUvd2iXqNCyDyrNuWsSAdCC6tXW5d9znPGHKYNeruPg6zF_3Q4YLInlAw6SI6lNxjzoI2wVxdLks9g"
//const decoded = await jwt.decode({secret, token, maxAge})