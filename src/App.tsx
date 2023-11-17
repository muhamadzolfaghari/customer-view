import './App.css'
import ErrorDialog from './components/ErrorDialog';
import Loading from './components/Loading';
import View from './components/View';
import useGetCustomerQuery from './hooks/useGetCustomerQuery'
import ICustomerResult from './interfaces/ICustomerResult';

interface IProps {
  data: ICustomerResult
}

function Page({ data }: IProps) {

  return (
    <div>
      {data?.data.items.map((datum, index) => (
        <View key={index} names={datum.names} age={datum.age} />)
      )}
    </div>
  )
}

function App() {
  const { hasError, data, isLoading } = useGetCustomerQuery();

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <ErrorDialog />;
  }

  if (data) {
    return <Page data={data} />
  }

  return null;
}


export default App
