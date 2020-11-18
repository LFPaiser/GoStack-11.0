import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'
import CreateSessionService from '../services/CreateSessionService'

const sessionsRouter = Router()

sessionsRouter.post('/', async (request, response) => {
    const { email, password } = request.body

    const createSession = new CreateSessionService()

    const { user, token } = await createSession.run({
      email,
      password,
    })

    delete user.password

    return response.json({ user, token })
})

export default sessionsRouter
