const assert = require('assert')
const { Pact, Matchers } = require('@pact-foundation/pact')
const { fetchTodos } = require('../../services/todo.service')
const { eachLike } = Matchers

describe('Pact with To Do API', () => {
    const provider = new Pact({
        port: 1234,
        consumer: 'TodoClient',
        provider: 'TodoApi'
    })

    beforeAll(() => provider.setup())

    afterAll(() => provider.finalize())

    describe('when a call to the API is made', () => {
        beforeEach(async () => {
            return provider.addInteraction({
                state: 'there are todos',
                uponReceiving: 'a request for todos',
                withRequest: {
                    path: '/todos',
                    method: 'GET'
                },
                willRespondWith: {
                    body: eachLike({
                        id: 1,
                        title: 'Do homework',
                        is_done: true
                    }),
                    status: 200
                }
            })
        })

        it('will receive the list of current todos', async () => {
            const result = await fetchTodos()

            console.log(result.data);
            assert.ok(result.data.length)
        })
    })

})