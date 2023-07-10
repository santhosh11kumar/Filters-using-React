import Filter from "./compnents/Filter";
import Display from "./compnents/Display";
import Loading from "./compnents/Loading"
import './App.css';
import { filterData, apiUrl } from './data'
import { useEffect, useState } from 'react';


function App() {
  const [urldata, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [datatobeshown, setFilter] = useState(filterData[0].title)


  async function fetchingdata() {
    try {
      let response = await fetch(apiUrl);
      let apidata = await response.json();
      setData(apidata.data);
    }
    catch (err_message) {
      // toast.error("Can't loading information try to be in network !! ")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchingdata()
  }, [])


  return (
    <div className="divcenter min-h-screen bg-slate-600">
      <h1 className="title py-4 bg-blue-950 text-center text-3xl font-bold text-white">Top Courses</h1>

      <Filter filterdata={filterData}
        data={datatobeshown}
        setFilter_={setFilter}
      >

      </Filter>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading ? (<Loading />) : (<Display cardsdata={urldata} cateogry={datatobeshown} />)
        }
      </div>

    </div>
  );
}

export default App;
