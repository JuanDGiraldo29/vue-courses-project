export type UserRole = 'student' | 'instructor' | 'admin'
export type UserStatus = 'active' | 'inactive' | 'suspended'

export interface User {
  id: string
  username: string
  name: string
  email: string
  password: string
  birth: string | null
  createdAt: string
  lastAccess: string | null
  role: UserRole
  status: UserStatus
  avatar: string | null
  phone: string | null
  department: string | null
  enrolledCourses: string[]
  completedCourses: string[]
}

export const users: User[] = [
  {
    id: 'usr-001',
    username: 'santiago',
    name: 'Santiago Castaño',
    email: 'santiago@example.com',
    password: 'Learn2026*',
    birth: '1998-05-15',
    createdAt: '2026-01-10T09:00:00.000Z',
    lastAccess: null,
    role: 'student',
    status: 'active',
    avatar: null,
    phone: null,
    department: 'Tecnología',
    enrolledCourses: ['course-001', 'course-002'],
    completedCourses: [],
  },
  {
    id: 'usr-002',
    username: 'docente',
    name: 'María Rodríguez',
    email: 'maria@example.com',
    password: 'Docente2026*',
    birth: '1990-08-20',
    createdAt: '2026-02-15T14:30:00.000Z',
    lastAccess: null,
    role: 'instructor',
    status: 'active',
    avatar: null,
    phone: null,
    department: 'Formación',
    enrolledCourses: ['course-003'],
    completedCourses: [],
  },
]