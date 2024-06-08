import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiArrowSmRight, HiUser, HiAnnotation,HiDocumentText,HiOutlineUserGroup, HiChartPie,HiOutlineQuestionMarkCircle} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function DashSidebar() {
 

    const location = useLocation();
    const [tab,setTab] = useState('')
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);

    useEffect(()=>{
      const urlParams = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if (tabFromUrl){
        setTab(tabFromUrl);
      }
      
    }, [location.search])

    const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

  return (
    <Sidebar className = 'w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className = 'flex flex-col gap-1'>
            {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
                <Link to = '/dashboard?tab=profile'>
                <Sidebar.Item active = {tab === 'profile'} icon = {HiUser} label = {currentUser.isAdmin ? 'Admin' : 'Utilizator'} labelColor = 'dark' as='div'>
                    Profil
                </Sidebar.Item>
                </Link>
                {currentUser.isAdmin && (
                <Link to = '/dashboard?tab=posts'>
                <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Postari
              </Sidebar.Item>
              </Link>
              )}
              {currentUser.isAdmin && (
                <>
                <Link to = '/dashboard?tab=users'>
                  <Sidebar.Item
                  active = {tab === 'users'}
                  icon = {HiOutlineUserGroup}
                  as = 'div'
                  >
                    Utilizatori
                  </Sidebar.Item>
                </Link>
                <Link to = '/dashboard?tab=comments'>
                  <Sidebar.Item
                  active = {tab === 'comments'}
                  icon = {HiAnnotation}
                  as = 'div'
                  >
                    Commentarii
                  </Sidebar.Item>
                </Link>
                <Link to = '/dashboard?tab=questions'>
                  <Sidebar.Item
                  active = {tab === 'questions'}
                  icon = {HiOutlineQuestionMarkCircle}
                  as = 'div'
                  >
                    Intrebari
                  </Sidebar.Item>
                </Link>
                </>
                
              )
              }
                <Sidebar.Item  icon = {HiArrowSmRight} className = 'cursor-pointer' onClick={handleSignout}>
                Deconectare
                </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  );
}
