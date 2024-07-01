const URL = 'https://api.rawg.io/api'
const API_KEY = '57fcb5b818f744d79d1a936f5f2e2af8'

const getData = async <T>(
  endpoint: string,
  params?: Record<string, string>,
) => {
  if (API_KEY !== undefined) {
    const searchParams = new URLSearchParams(params).toString()
    const response = await fetch(
      `${URL}/${endpoint}?${searchParams}&key=${API_KEY}`,
    )

    if (!response.ok) throw new Error(response.statusText)

    const data = (await response.json()) as Promise<T>

    return data
  }
  console.log(API_KEY)
  throw new Error('Api key is undefined')
}

export default getData
