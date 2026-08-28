export interface Enquiry {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  read: boolean
  createdAt: string
}

export async function getEnquiries(): Promise<Enquiry[]> {
  return []
}

export async function createEnquiry(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}): Promise<Enquiry> {
  return {
    id: `enq_${Date.now()}`,
    ...data,
    read: false,
    createdAt: new Date().toISOString(),
  }
}

export async function markEnquiryRead(_id: string) {
  return true
}

export async function deleteEnquiry(_id: string) {
  return true
}
