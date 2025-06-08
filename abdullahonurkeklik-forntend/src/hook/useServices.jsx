import { fetchServices } from '@/redux/slice/serviceSlice'
import { selectAllData, selectData, selectError, selectLoading, selectMessage } from '@/redux/slice/serviceSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function useServices() {
    const dispatch = useDispatch()

    const data = useSelector(selectAllData)
    const services = useSelector(selectData("data"))

    const message = useSelector(selectMessage)
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)

    useEffect (() => { 
        const fetchData = async () => {
            try {
                await dispatch(fetchServices())
            } catch (error) {
                console.error('Services error:', error)
            }
        }

        fetchData()
    }, [])

    // console.log(services)

    return {
        services,

        serviceMessage: message,
        isLoadingService: loading || !services,
        serviceError: error,
    }
}