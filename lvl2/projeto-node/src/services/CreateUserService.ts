import User from '../models/User'
import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface Request {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async run({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User)

    const checkEmail = await usersRepository.findOne({
      where: { email },
    })

    if (checkEmail) {
      throw new Error('Email address already in use')
    }

    const hashedPassword = await hash(password, 12)

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService
