// This is the app's initial state. Note that reducers each handle a slice of this state.
// Composing all initial state here gives us a clear spot of reference that displays the shape
// of our entire store.
export default {
  initialRequest: {
    payment: {
      request: {
        accountId: 6,
        dealerId: 100,
        zipCode: 94063,
        vehicle: {
          condition: "NEW",
          styleId: 382032
        },
        terms: [36,48,60,72],
        dealerMSRP: 42000,
        financeType: "LOAN",
        creditScore: 800,
        downPayment: 0,
        netTradeIn: 0,
        price: 39715
      }
    }
  },
  session: {
    id: null,
    payment: {
      request: {},
      incentives: {},
      terms: [],
      selected: {}
    }
  }
};
