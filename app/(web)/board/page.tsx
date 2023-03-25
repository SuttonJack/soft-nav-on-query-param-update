import Board from '../../_modules/Board'

const getData = async () => {
  const url = `https://api.momenthousedev.com/api/v1/worlds/threads/main/bbd77a6f-8007-4292-b724-b03194011bee?page=1&sortKey=hot&scope=allTime`
  const res = await fetch(url)
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <Board data={data} />
}
