const intialUrl = 'https://fakestoreapi.com'

export const getData = async (data: string) => {
    const res = await fetch(`${intialUrl}/${data}`)
    return await res.json()
}