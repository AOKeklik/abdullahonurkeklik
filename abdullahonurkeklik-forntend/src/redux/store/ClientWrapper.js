'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSettings } from '@/redux/slice/settingSlice'
import Loader from '@/components/me/layout/Loader'
import useSettings from '@/hook/useSettings'

export default function ClientWrapper ({ children }) {
    const dispatch = useDispatch()
    const {isLoadingSetting} = useSettings()
    
    useEffect(() => {
            dispatch(fetchSettings())
    }, [dispatch])

    if (isLoadingSetting) return <Loader />
    
    return children
}