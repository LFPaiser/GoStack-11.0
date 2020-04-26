import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import {startOfHour} from 'date-fns'

interface Request {
  provider: string
  date: Date
}

class CreateAppointmentService {
  private repository: AppointmentsRepository

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.repository = appointmentsRepository
  }

  public run({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date)

    const availability = this.repository.checkDateAvailability(appointmentDate)

    if (availability) {
      throw Error('There is already another appointment on this date')
    }

    const appointment = this.repository.create({
      provider,
      date: appointmentDate,
    })

    return appointment
  }
}

export default CreateAppointmentService
