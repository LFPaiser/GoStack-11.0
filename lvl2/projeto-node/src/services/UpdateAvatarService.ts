import User from '../models/User'
import { getRepository } from 'typeorm'
import uploadConfig from '../config/upload'
import path from 'path'
import fs from 'fs'
import AppError from '../errors/AppError'

interface Request{
  user_id: string
  avatarFilename: string

}


class UpdateAvatarService{
  public async run({user_id, avatarFilename}: Request): Promise<User>{
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne(user_id)

    if(!user){
      throw new AppError('You will need to login to change your avatar', 401)
    }

    if(user.avatar){
      const avatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const currentAvatarFile = await fs.promises.stat(avatarFilePath)

      if (currentAvatarFile){
        await fs.promises.unlink(avatarFilePath)
      }
    }

    user.avatar = avatarFilename

    await usersRepository.save(user)

    delete user.password

    return user
  }
}

export default UpdateAvatarService
