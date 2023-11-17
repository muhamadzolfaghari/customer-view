import './App.css'
import ErrorDialog from './components/ErrorDialog';
import Loading from './components/Loading';
import LanguageSlider from './components/LanguageSlider';
import View from './components/View';
import useGetCustomerQuery from './hooks/useGetCustomerQuery'
import ICustomerResult from './interfaces/ICustomerResult';
import { useState } from 'react';
import { LanguageType } from './types/LanguageType';

interface IProps {
  data: ICustomerResult
}

function Page({ data }: IProps) {
  const [language, setLanguage] = useState<LanguageType>(localStorage.getItem("language") as LanguageType ?? "en");

  function handleLangaugeChange(language: LanguageType) {
    setLanguage(language);
  }

  return (
    <div>
      {data?.data.items.map((datum, index) => (
        <View key={index} names={datum.names} age={datum.age} language={language} />)
      )}
      <LanguageSlider onChange={handleLangaugeChange} language={language}></LanguageSlider>
    </div>
  )
}

function App() {
  const language = localStorage.getItem("language") ?? "en" as LanguageType;
  const { hasError, data, isLoading } = useGetCustomerQuery();

  if (isLoading) {
    return <Loading />
  }

  if (hasError) {
    return <ErrorDialog language={language} />;
  }

  if (data) {
    return <Page data={data} />
  }

  return null;
}


export default App
