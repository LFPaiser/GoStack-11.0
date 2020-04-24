import Appointment from '../models/Appointment'
import { isEqual } from 'date-fns'

interface AppointmentDTO {
  provider: string
  date: Date
}

class AppointmentsRepository {
  private appointments: Appointment[]

  constructor() {
    this.appointments = []
  }

  public all(): Appointment[] {
    return this.appointments
  }

  public checkDateAvailability(date: Date): Appointment | null {
    const foundAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    )

    return foundAppointment || null
  }

  public create({ provider, date }: AppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date })

    this.appointments.push(appointment)

    return appointment
  }
}

export default AppointmentsRepository
