import './App.css'
import useGetCustomerQuery from './hooks/useGetCustomerQuery'

function App() {
  const { error, data, isLoading } = useGetCustomerQuery();


  return (
    <>
      <div>
        {
          data?.data.items.map(it => (<div><div>name:</div><div>{it.names}</div></div>))
        }
      </div>
    </>
  )
}

export default App
