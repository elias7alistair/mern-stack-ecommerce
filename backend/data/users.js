import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'adming@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'john doe',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456',10),

    },
    {
        name: 'sam young',
        email: 'sam@example.com',
        password: bcrypt.hashSync('123456',10),
     
    },
]

export default users