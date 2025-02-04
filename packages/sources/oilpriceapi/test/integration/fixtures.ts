import nock from 'nock'

export const mockResponseSuccess = (): nock =>
  nock('https://api.oilpriceapi.com/v1', {
    encodedQueryParams: true,
  })
    .get('/prices/latest?by_code=BRENT_CRUDE_USD')
    .reply(
      200,
      (_, request) => ({
        status: 'success',
        data: {
          price: 70.71,
          formatted: '$70.71',
          currency: 'USD',
          code: 'BRENT_CRUDE_USD',
          created_at: '2021-12-03T04:48:02.817Z',
          type: 'spot_price',
        },
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
