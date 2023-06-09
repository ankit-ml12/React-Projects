import SingleItem from './SingleItem'
import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'
const Items = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/')
      return data
    },
  })
  // const { isLoading, data } = useQuery({
  //   queryKey: ['tasks'],
  //   queryFn: () => customFetch.get('/'),
  // })

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
