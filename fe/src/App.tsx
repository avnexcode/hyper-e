import { useCreateFeature, useFeaturesQuery } from "../features/feature/index"
import { useFormik } from 'formik';
import { useEffect, useState } from "react";

type Feature = {
  username: string
  title: string
  started_time: string
  status: string
  level: string
}

const App = () => {
  const { data: featuresData, refetch: refetchFeatures } = useFeaturesQuery()
  const [isStarted, setIsStarted] = useState(false)
  const timeNow = () => {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    return `${hours}:${minutes}`
  }

  const formik = useFormik({
    initialValues: {
      username: "aziz",
      title: "title",
      started_time: timeNow(),
      status: "0",
      level: "hard"
    },
    onSubmit: (values: Feature) => {
      createFeature(values)
    }
  })

  const { mutate: createFeature, isPending, } = useCreateFeature({
    onSuccess: () => {
      console.log("ah kawai desune")
      refetchFeatures()
    },
    onError: (error) => {
      if (error.response) {
        console.log("error res data", error.response.data);
        console.log("error res status", error.response.status);
        console.log("error res header", error.response.headers);

      } else if (error.request) {

        console.log("error req", error.request);
      } else {

        console.log('Error', error.message);
      }
    }
  })

  const renderElement = () => {
    return featuresData?.data?.features.map((item: Feature, i: number) => {
      return <div key={i}>
        <h1>{item.title}</h1>
      </div>
    })
  }

  const handleForm = e => {
    // console.log(e.target.value)
    return formik.setFieldValue(e.target.name, e.target.value)
  }

  useEffect(() => {
    setIsStarted(true)
  }, [])

  return (
    <div className="w-full flex -justify-center h-screen items-center flex-col mt-36">
      <div>
        <form action="" className="w-full flex flex-col justify-center items-center" onSubmit={formik.handleSubmit}>
          <div className="mb-2 max-w-xl">
            <input onChange={handleForm} value={formik.values.username} type="text" name="username" id="username" placeholder="username" className="text-black px-5 py-1 bg-white placeholder:font-bold placeholder:text-[1rem] placeholder:text-center w-[600px]" />
          </div>
          <div className="mb-2 max-w-xl">
            <input onChange={handleForm} value={formik.values.title} type="text" name="title" id="title" placeholder="title" className="text-black px-5 py-1 bg-white placeholder:font-bold placeholder:text-[1rem] placeholder:text-center w-[600px]" />
          </div>
          <div className="mb-2 max-w-xl">
            <select onChange={handleForm} value={formik.values.level} name="level" id="level" className="text-black px-5 py-1 bg-white placeholder:font-bold placeholder:text-[1rem] placeholder:text-center w-[600px]">
              <option value="">Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="mb-2 max-w-xl flex justify-end">
            {isStarted ?
              <button type="submit" className="btn btn-primary btn-sm">{isPending ? "Loading...." : "On Going"}</button>
              :
              <button type="submit" className="btn btn-primary btn-sm">{isPending ? "Loading...." : "Submit"}</button>
            }
          </div>
        </form>
      </div>
      <div>
        {featuresData?.data?.features.length > 0 ? renderElement() : <div role="alert" className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>tidak ada data</span>
        </div>}
      </div>
    </div>
  )
}

export default App
