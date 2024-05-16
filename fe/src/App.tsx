import { useCreateFeature, useFeaturesQuery, useFeatureUpdate } from "../features/feature/index"
import { useFormik } from 'formik';
import { useEffect, useState } from "react";
import Navbar from "./components/fragments/Navbar";
import MainLayout from "./components/layouts/Main-Layout";

type Feature = {
  username: string
  title: string
  started_time: string
  end_time: string
  status: string
  level: string
}

const App = () => {
  const { data: featuresData, refetch: refetchFeatures } = useFeaturesQuery()
  const [isStarted, setIsStarted] = useState(false)
  const [featureId, setFeatureId] = useState(null)
  const [errorMessage, setErrorMessage] = useState()
  const timeNow = () => {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    return `${hours}:${minutes}:${seconds}`
  }

  const formik = useFormik({
    initialValues: {
      username: "aziz",
      title: "",
      started_time: timeNow(),
      end_time: "",
      status: "1",
      level: ""
    },
    onSubmit: (values: Feature) => {
      if (!featureId) {
        createFeature(values)
      } else {
        updateFeature({
          id: featureId,
          username: createFeatureResult?.data.feature.username,
          title: createFeatureResult?.data.feature.title,
          started_time: createFeatureResult?.data.feature.started_time,
          end_time: timeNow(),
          status: createFeatureResult?.data.feature.status,
          level: createFeatureResult?.data.feature.level,
        }, featureId)
      }
    }
  })

  const { mutate: createFeature, data: createFeatureResult, isPending: createPending } = useCreateFeature({
    onSuccess: () => {
      refetchFeatures()
      setIsStarted(true)
    },
    onError: (error) => {
      setErrorMessage(error.message)
    }
  })

  const { mutate: updateFeature, data: updateFeatureResult, isPending: updatePending } = useFeatureUpdate({
    onSuccess: () => {
      refetchFeatures()
      setIsStarted(false)
      setFeatureId(null)
    },
    onError: (error) => {
      if (error) {
        console.log(error)
      }
    },
  })

  const renderElement = () => {
    return featuresData?.data?.features.map((item: Feature, i: number) => {
      return <div key={i}>
        <h1>{item.title}</h1>
      </div>
    })
  }

  useEffect(() => {
    setFeatureId(createFeatureResult?.data.result.insertId)
  }, [createFeatureResult])

  const handleForm = e => {
    return formik.setFieldValue(e.target.name, e.target.value)
  }

  return (
    <MainLayout>
      <div className="w-full flex -justify-center h-screen items-center flex-col mt-36">
      {errorMessage && <div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{errorMessage}.</span>
      </div>}
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
              <button type="submit" className="btn btn-primary btn-sm">{updatePending ? "Loading...." : "On Going"}</button>
              :
              <button type="submit" className="btn btn-primary btn-sm">{createPending ? "Loading...." : "Submit"}</button>
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
    </MainLayout>
  )
}

export default App
