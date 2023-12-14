'use client'
import AcademyComponent from '@/components/academyComponent';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect, useContext } from 'react'

function AcademyPage() {
  const { progress, user, setUser, setProgress, loading, setLoading }: any = useContext(AuthContext);
  const router = useRouter()

  useEffect(()=>{
    if(!user){
      router.push('/sign-in');
    }
  },[])

  return (
    <div>
      <AcademyComponent/>
    </div>
  )
}

export default AcademyPage;