import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm'

interface Request {
  provider: string
  date: Date
}

class CreateAppointmentService {
  //   private repository: AppointmentsRepository

  //   constructor(appointmentsRepository: AppointmentsRepository) {
  //     this.repository = appointmentsRepository
  //   }

  public async run({ provider, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentDate = startOfHour(date)

    const availability = await appointmentsRepository.checkDateAvailability(
      appointmentDate,
    )

    if (availability) {
      throw Error('There is already another appointment on this date')
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    })

    await appointmentsRepository.save(appointment)

    return appointment
  }
}

export default CreateAppointmentService