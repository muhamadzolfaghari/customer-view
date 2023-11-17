import './App.css'
import ErrorDialog from './components/ErrorDialog';
import Loading from './components/Loading';
import View from './components/View';
import useGetCustomerQuery from './hooks/useGetCustomerQuery'

function App() {
  const { hasError, data, isLoading } = useGetCustomerQuery();

  return (
    <div>
      {hasError && <ErrorDialog />}
      {isLoading && <Loading />}
      {data?.data.items.map((datum, index) => (<View key={index} names={datum.names} age={datum.age} />))}
    </div>
  )
}

export default App
