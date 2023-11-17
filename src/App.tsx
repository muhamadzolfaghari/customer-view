import './App.css'
import View from './components/View';
import useGetCustomerQuery from './hooks/useGetCustomerQuery'

function App() {
  const { error, data, isLoading } = useGetCustomerQuery();


  console.log(error);


  return (
    <div>
      {data?.data.items.map((datum, index) => (<View key={index} names={datum.names} age={datum.age} />))}
    </div>
  )
}

export default App
