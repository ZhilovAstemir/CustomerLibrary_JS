import Customer from '../src/Entities/Customer'
import Address from '../src/Entities/Address'

const address = new Address({
  firstLine: 'zcb',
  secondLine: 'vcvc',
  type: 2,
  city: '01xcv',
  postalCode: '321321',
  state: 'cx',
  country: 'USA',
})
const customer = new Customer({
  firstName: 'Mark',
  lastName: 'Smith',
  addresses: [address],
  phoneNumber: '+11111111111',
  email: 'dvdvvddd@gmail.com',
  notes: ['kjg'],
  totalPurchasesAmount: 45.6,
  lastPurchaseDate: new Date('2022-10-06'),
})

describe('right customer', () => {
  it('create customer', () => {
    expect(customer).toBeDefined()
  })
  it('create customer address field', () => {
    expect(customer.Addresses[0]).toBeDefined()
  })
})
