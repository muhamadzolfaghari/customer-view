import './App.css'
import Loading from './components/Loading';
import View from './components/View';
import useGetCustomerQuery from './hooks/useGetCustomerQuery'

function App() {
  const { error, data, isLoading } = useGetCustomerQuery();


  console.log(error);


  return (
    <div>
      {!isLoading && <Loading />}
      {data?.data.items.map((datum, index) => (<View key={index} names={datum.names} age={datum.age} />))}
    </div>
  )
}

export default App
