import React, { useEffect, useState } from 'react'
import ProfileSidebar from '../Components/Profile/ProfileSidebar'
import ProfileMain from '../Components/Profile/ProfileMain'
import { useLocation } from 'react-router-dom'
import AllPosts from '../Components/AllPosts'

function Profile() {

  const location = useLocation()
  const [tab, setTab] = useState()
  useEffect(() => {
    // We use location.search to search for queries
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has('tab')) {
      setTab(urlParams.get('tab'))
    }
  }, [location.search])

  // We use locaton.search in useEffect to render different components based on tabs

  return (
    <div className='flex flex-col tablet:flex-row'>
      <ProfileSidebar />
      <>
        {tab === "main" && < ProfileMain />}
        {tab === "savedArticles" && <AllPosts />}
      </>
    </div>
  )
}

export default Profile