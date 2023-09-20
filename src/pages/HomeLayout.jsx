import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Themes from '../components/Themes'

const HomeLayout = () => {
  const navigation = useNavigation()

  const isPageLoading = navigation.state === 'loading'
  const value = 'some value'
  return (
    <>
      <Navbar />
      <Themes></Themes>

      <Outlet context={{ value }} />
    </>
  )
}
export default HomeLayout
