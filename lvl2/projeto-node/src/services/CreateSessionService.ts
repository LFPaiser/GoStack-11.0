import User from '../models/User'
import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign, verify } from 'jsonwebtoken'
import authConfig from '../config/auth'

interface Request {
  email: string
  password: string
}
interface Response {
  user: User
  token: string
}

class CreateSessionService {
  public async run({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ where: { email } })

    if (!user) {
      throw new Error('Unmatched credentials')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error('Unmatched credentials')
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn: expiresIn,
    })

    return { user, token }
  }
}

export default CreateSessionService
